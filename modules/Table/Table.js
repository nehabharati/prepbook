import { Sidebar } from '../Sidebar';
import { useRouter } from 'next/router';
import { Modal } from '../../elements';
import { SearchAndFilter } from '../';
import { useState } from 'react';
import { problems } from './constants';
import Link from 'next/link';

export const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  console.log(router);

  const { platform } = router.query;
  const handleModal = () => setShowModal(!showModal);

  return (
    <>
      {showModal && <Modal closeModal={handleModal} />}
      <div className="flex bg-gray-100">
        <Sidebar />

        <div className="flex flex-col w-10/12">
          <SearchAndFilter />

          <>
            <button
              onClick={handleModal}
              className="px-4 py-2 w-24 mx-6 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Add
            </button>
            <section className="flex flex-col justify-center antialiased text-gray-600 p-4">
              <div className="h-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800 capitalize">
                      {platform} list
                    </h2>
                  </header>
                  <Link href={`dsa/${platform}/`}>
                    <div className="p-3">
                      <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">
                                  Name
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">
                                  Difficulty
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">
                                  Category
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">
                                  Solved
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
                            {problems.map((problem) => (
                              <Link
                                href={`/dsa/${platform}/${problem.link}`}
                                key={problem.id}
                              >
                                <tr>
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
                                </tr>
                              </Link>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </>
        </div>
      </div>
    </>
  );
};
