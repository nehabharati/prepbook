import { useState } from 'react';
import { Form } from '../../';
import { CustomInput } from '../../';

export const NotesFormEdit = ({ closeModal, note }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleName = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  console.log(note);
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const linkRegex = title.split(' ').map((i) => i.toLowerCase());
    const linkNew = linkRegex.join('-');
    const body = {
      title,
      link: linkNew,
      description,
    };
    try {
      const response = await fetch(`/api/note/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        window.location.reload();
        console.log('form submitted successfully !!!');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };
  return (
    <div className="relative flex-auto">
      <Form>
        <form onSubmit={(e) => handleSubmit(e, note.id)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput
              label={'Title'}
              value={title}
              placeholder={'Please enter the title'}
              handleEntry={handleName}
            />
            <CustomInput
              label={'Description'}
              handleEntry={handleDescription}
              value={description}
              placeholder={'Please give a description'}
            />
            <div>
              <div className="flex items-center justify-end py-4 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-white mr-4 rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => closeModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-white rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
