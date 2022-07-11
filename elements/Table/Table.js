import { useRouter } from 'next/router';
import { problems } from './constants';
import Link from 'next/link';

export const Table = () => {
  const router = useRouter();

  console.log(router);

  const { query } = router;

  return (
    <section className="flex flex-col justify-center antialiased text-gray-600 p-4">
      <div className="h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800 capitalize">
              {query?.platform && query.platform} list
            </h2>
          </header>

          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full rounded-lg">
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
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
                  {query.platform
                    ? problems.map((problem) => (
                        <Link
                          href={`/dsa/${query.platform}/${problem.link}`}
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
                      ))
                    : problems.map((problem) => (
                        <Link href={`/notes/${problem.link}`} key={problem.id}>
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
        </div>
      </div>
    </section>
  );
};
