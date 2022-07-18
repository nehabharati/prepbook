import { useState } from 'react';
import { Form } from '../Form';
import { CustomInput, CustomRadio, Dropdown, MultiSelect } from '../';
import { customStylesForm } from '../../constants/customStyles';

export const QuestionForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState(null);
  const [solved, setSolved] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.value);
  const handleCategory = (e) => {
    let categories = e.map((i) => i.label).join(',');
    console.log(categories);
    setCategory(e);
  };
  const handleSolved = (e) => setSolved(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let eachCategory = category.map((i) => i.label).join(',');
    let isSolved = solved === 'No' ? false : true;
    const body = { name, difficulty, category: eachCategory, solved: isSolved };
    console.log(body);
    try {
      const response = await fetch('/api/problems', {
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
    setDifficulty('');
    setCategory('');
    setSolved('');
  };
  const categories = [
    {
      label: 'Array',
      value: 'Array',
    },
    {
      label: 'String',
      value: 'String',
    },
    {
      label: 'Hash Table',
      value: 'Hash Table',
    },
    {
      label: 'DP',
      value: 'DP',
    },
    {
      label: 'Math',
      value: 'Math',
    },
    {
      label: 'Two Pointer',
      value: 'Two Pointer',
    },
    {
      label: 'Binary Tree',
      value: 'Binary Tree',
    },
    {
      label: 'Stack',
      value: 'Stack',
    },
    {
      label: 'Recursion',
      value: 'Recursion',
    },
  ];
  return (
    <div className="relative flex-auto">
      <Form>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput
              label={'Name'}
              handleEntry={handleName}
              placeholder={'Please enter the name'}
            />
            <div>
              <label htmlFor="difficulty">Difficulty</label>
              <Dropdown
                styles={customStylesForm}
                onChange={handleDifficulty}
                placeholder="Choose the difficulty level of the problem"
                options={[
                  {
                    label: 'Easy',
                    value: 'Easy',
                    key: 'Easy',
                  },
                  {
                    label: 'Medium',
                    value: 'Medium',
                    key: 'Medium',
                  },
                  {
                    label: 'Hard',
                    value: 'Hard',
                    key: 'Hard',
                  },
                ]}
                defaultValue={{ value: 'Select...', label: 'Select...' }}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              {/* <MultiSelect
                value={category}
                options={categories}
                handleChange={handleCategory}
                multi={true}
              /> */}
              <MultiSelect
                options={categories}
                placeholder="Select category"
                value={category}
                handleChange={handleCategory}
                // isSearchable={true}
                multi={true}
              />
            </div>
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
