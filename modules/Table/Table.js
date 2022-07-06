import { Sidebar } from '../Sidebar';
import { useRouter } from 'next/router';
import { SearchAndFilter } from '../SearchAndFilter';

export const Table = () => {
  const router = useRouter();

  const { platform } = router.query;
  console.log(platform);
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <div className="flex flex-col w-10/12">
        <SearchAndFilter />

        <button className="px-4 py-2 w-24 mx-6 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Name</div>
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
                          <div className="font-semibold text-left">Solved</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div> */}
                            <div className="font-medium text-gray-800">
                              Two sum
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600">
                            Easy
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300">
                            Two pointer
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600">
                            Solved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div> */}
                            <div className="font-medium text-gray-800">
                              Two sum
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600 ">
                            Easy
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300 ">
                            Two pointer
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600 ">
                            Solved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div> */}
                            <div className="font-medium text-gray-800">
                              Two sum
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600 ">
                            Easy
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300 ">
                            Two pointer
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600 ">
                            Solved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="font-medium text-gray-800">
                            Two sum
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600 ">
                            Easy
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300 ">
                            Two pointer
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600 ">
                            Solved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div> */}
                            <div className="font-medium text-gray-800">
                              Two sum
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-green-600 ">
                            Easy
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium bg-yellow-300 ">
                            Two pointer
                          </span>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <span className="rounded-sm py-1 px-2 text-xs font-medium text-white bg-blue-600 ">
                            Solved
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
