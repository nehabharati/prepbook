import { useState, useEffect, useRef } from 'react';
import { Form } from '../Form';
import { PrismaClient } from '@prisma/client';
import { CustomInput, CustomRadio, Dropdown, MultiSelect } from '..';
import { customStylesForm } from '../../constants/customStyles';

// const prisma = new PrismaClient();

export const QuestionFormAdd = ({ closeModal, type, problem }) => {
  console.log(problem);
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState(null);
  const [solved, setSolved] = useState(false);
  const formRef = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.value);
  const handleCategory = (e) => setCategory(e);
  const handleSolved = (e) => setSolved(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const linkRegex = name.split(' ').map((i) => i.toLowerCase());
    const link = linkRegex.join('-');
    let eachCategory = category?.map((i) => i.label).join(',');
    let isSolved = solved === 'No' ? false : true;
    const body = {
      name,
      link,
      difficulty,
      category: eachCategory,
      solved: isSolved,
    };
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
        closeModal(false);
        console.log('form submitted successfully !!!');
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error);
    }
  };

  const categories = [
    {
      label: 'Array',
      value: 'Array',
      key: 'Array',
    },
    {
      label: 'String',
      value: 'String',
      key: 'String',
    },
    {
      label: 'Hash Table',
      value: 'Hash Table',
      key: 'Hash Table',
    },
    {
      label: 'DP',
      value: 'DP',
      key: 'DP',
    },
    {
      label: 'Math',
      value: 'Math',
      key: 'Math',
    },
    {
      label: 'Two Pointer',
      value: 'Two Pointer',
      key: 'Two Pointer',
    },
    {
      label: 'Binary Tree',
      value: 'Binary Tree',
      key: 'Binary Tree',
    },
    {
      label: 'Stack',
      value: 'Stack',
      key: 'Stack',
    },
    {
      label: 'Recursion',
      value: 'Recursion',
      key: 'Recursion',
    },
  ];

  console.log(name, difficulty, category, solved, problem);
  return (
    <div className="relative flex-auto">
      <Form>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 mb-4">
            <CustomInput
              label={'Name'}
              handleEntry={handleName}
              value={problem?.name ? problem?.name : name}
              placeholder={'Please enter the name'}
              name="e"
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
                value={problem?.difficulty ? problem?.difficulty : difficulty}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>

              <MultiSelect
                options={categories}
                placeholder="Select category"
                value={problem?.category ? problem?.category : category}
                handleChange={handleCategory}
                // isSearchable={true}
                multi={true}
              />
            </div>
            <CustomRadio
              label={'Have you solved the question?'}
              value={problem?.solved ? problem?.solved : solved}
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