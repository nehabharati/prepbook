import {
  Modal,
  Sidebar,
  QuestionFormAdd,
  Back,
  QuestionEdit,
  Table,
} from '../../elements';
import { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '../';

// import styles from './QuestionList.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const QuestionList = ({ problems }) => {
  const [showModal, setShowModal] = useState(false);
  const [problemList, setProblemList] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();
  const { platform } = router.query;
  const searchParameters = ['name', 'difficulty', 'solved', 'category'];
  useEffect(() => {
    problems && setProblemList(problems);
  }, [problems]);

  return (
    <div className="flex flex-col w-full h-screen">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <QuestionFormAdd closeModal={setShowModal} problems={problems} />
        </Modal>
      )}
      <Header />

      <div className="flex flex-col w-full my-6">
        <Back />
        <h1 className="mx-6 capitalize">{platform} questions</h1>
        <button
          onClick={() => setShowModal(!showModal)}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <Table
          list={problemList}
          setList={setProblemList}
          searchParameters={searchParameters}
        >
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
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left"></div>
              </th>
            </tr>
          </thead>
          {problemList?.length > 0 ? (
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {problemList?.map((problem) => (
                <tr>
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

                  <td className="p-2 whitespace-nowrap">
                    <div className="rounded-sm py-1 px-2 text-xs">
                      <QuestionEdit problem={problem} />
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <Link href={`/dsa/leetcode/${problem.link}`}>
                      <span className="rounded-lg py-1 px-2 text-xs text-white float-right flex items-center bg-black">
                        Open
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr className="relative">
                <td
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    showSearchResults ? 'my-20' : 'my-6'
                  }`}
                >
                  {!showSearchResults
                    ? 'Sorry there are no search results to display😟'
                    : 'There are no items to display. Click on add to start your list 👆🤗'}
                </td>
                <td></td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
};
