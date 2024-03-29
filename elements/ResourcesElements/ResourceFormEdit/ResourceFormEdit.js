import { useState } from 'react';
import { Form } from '../../Form';
import { CustomInput } from '../../CustomInput';

export const ResourceFormEdit = ({ closeModal, resource }) => {
  const [name, setName] = useState(resource.name);
  const [link, setLink] = useState(resource.link);

  const handleName = (e) => setName(e.target.value);
  const handleLink = (e) => setLink(e.target.value);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const body = {
      name,
      link,
    };
    try {
      const response = await fetch(`/api/resource/${id}`, {
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
        <form onSubmit={(e) => handleSubmit(e, resource.id)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput
              label={'Name'}
              value={name}
              placeholder={'Please enter the name'}
              handleEntry={handleName}
            />
            <CustomInput
              label={'Link'}
              handleEntry={handleLink}
              value={link}
              placeholder={'Please give a link'}
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
