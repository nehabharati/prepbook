import { Modal, Sidebar, NotesForm, Back, List, Table } from '../../elements';
import { SearchAndFilter } from '..';
import { problems } from './constants';
import Link from 'next/link';
// import styles from './QuestionList.module.css';
import { useState } from 'react';

export const NotesList = () => {
  const [showModal, setShowModal] = useState(false);
  const [problemList, setProblemList] = useState(problems);
  const handleModal = () => setShowModal(!showModal);
  const a = ['name', 'difficulty', 'solved', 'category'];

  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <NotesForm closeModal={setShowModal} />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <Back />
        <h1 className="mx-6">Notes</h1>

        <button
          onClick={handleModal}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        {problems.length >= 1 ? (
          <Table
            problems={problems}
            parameters={a}
            setProblemList={setProblemList}
          >
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 rounded-lg">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {problems.map((problem) => (
                <tr>
                  <td className="py-2 px-0 m-0 whitespace-nowrap table-cell align-middle">
                    <div className="font-medium text-gray-800 ">
                      {problem.name}
                    </div>
                  </td>

                  <td className="py-2 px-0 m-0 whitespace-nowrap  flex items-center justify-end">
                    <div className="rounded-sm py-1 text-xs float-right flex items-center">
                      <span className="mx-4">{new Date().toDateString()}</span>
                      <List showModal={showModal} />
                      <Link href={`/notes/${problem.link}`} key={problem.id}>
                        <span className="rounded-lg py-1 ml-4 px-2 text-xs text-white float-right flex items-center bg-black">
                          Open
                        </span>
                      </Link>
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
