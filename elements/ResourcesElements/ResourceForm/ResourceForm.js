import { useState } from 'react';
import { Form } from '../../Form';
import { CustomInput } from '../../CustomInput';

export const ResourceForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState(new Date());

  const handleName = (e) => setName(e.target.value);
  const handleLink = (e) => setLink(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, link };
    try {
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
      } else {
        window.location.reload();
        console.log('form submitted successfully !!!');
      }
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  return (
    <div className="relative flex-auto">
      <Form>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput label={'Name'} handleEntry={handleName} />
            <CustomInput label={'Link'} handleEntry={handleLink} />
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
