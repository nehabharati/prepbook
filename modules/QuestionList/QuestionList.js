import { Modal, Sidebar, QuestionFormAdd, Back } from '../../elements';
import { useEffect } from 'react';
import Link from 'next/link';
import { QuestionEdit, Table } from '../../elements';

// import styles from './QuestionList.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const QuestionList = ({ problems }) => {
  const [showModal, setShowModal] = useState(false);
  const [problemList, setProblemList] = useState([]);
  const router = useRouter();
  const { platform } = router.query;
  useEffect(() => {
    let displayResults = problems?.filter((i) => i.platform === platform);
    problems && setProblemList(displayResults);
  }, [problems]);

  console.log(problemList);
  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal} type={'add'}>
          <QuestionFormAdd
            closeModal={setShowModal}
            type={'add'}
            problems={problems}
          />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <Back />
        {/* <div className="mx-6">
          <SearchAndFilter
            keys={a}
            list={problems}
            setProblemList={setProblemList}
          />
        </div> */}
        <h1 className="mx-6 capitalize">{platform} questions</h1>
        <button
          onClick={() => setShowModal(!showModal)}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        {problemList?.length > 0 ? (
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
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {problemList?.map((problem) => (
                <tr>
                  {console.log(problem)}
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
