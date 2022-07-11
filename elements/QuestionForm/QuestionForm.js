import { useState } from 'react';
import { Form } from '../Form';
import { CustomInput, CustomRadio } from '../';

export const QuestionForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('Two pointer');
  const [solved, setSolved] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSolved = (e) => setSolved(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, difficulty, category, solved };
    console.log(body);
    try {
      const response = await fetch('/api/platform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log('something went wrong');
        //set an error banner here
      } else {
        resetForm();
        console.log('form submitted successfully !!!');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const resetForm = () => {
    setName('');
    setColor('');
  };
  return (
    <div className="relative flex-auto">
      <Form>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput label={'Name'} handleEntry={handleName} />
            <CustomInput label={'Difficulty'} handleEntry={handleDifficulty} />
            <CustomInput label={'Category'} handleEntry={handleCategory} />
            <CustomRadio
              label={'Have you solved the question?'}
              value={solved}
              onChange={handleSolved}
            />
            {/* <CustomInput label={'Solved'} handleEntry={handleSolved} /> */}
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
