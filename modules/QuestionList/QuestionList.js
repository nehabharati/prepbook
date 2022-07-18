import { Modal, Sidebar, QuestionForm, Back } from '../../elements';
import { SearchAndFilter } from '..';
import { problems } from './constants';
import Link from 'next/link';
import { List } from '../../elements';

// import styles from './QuestionList.module.css';
import { useState } from 'react';
import { Table } from '../../elements';

export const QuestionList = () => {
  const [showModal, setShowModal] = useState(false);
  const [problemList, setProblemList] = useState(problems);
  const a = ['name', 'difficulty', 'solved', 'category'];

  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <QuestionForm closeModal={setShowModal} />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <Back />
        <SearchAndFilter
          keys={a}
          list={problems}
          setProblemList={setProblemList}
        />

        <button
          onClick={() => setShowModal(!showModal)}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        {problems.length > 0 ? (
          <Table>
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Difficulty</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Solved</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {problems.map((problem) => (
                <tr>
                  <Link href={`/notes/${problem.link}`} key={problem.id}>
                    <>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {problem.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600">
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300">
                          {problem.category}
                        </span>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600">
                          {problem.solved ? 'Solved' : 'Unsolved'}
                        </span>
                      </td>
                    </>
                  </Link>

                  <td className="p-2 whitespace-nowrap">
                    <div className="rounded-sm py-1 px-2 text-xs">
                      <List />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="flex justify-center w-full my-20">
            There are no items to display. Click on add to start your list 👆🤗
          </p>
        )}
      </div>
    </div>
  );
};
