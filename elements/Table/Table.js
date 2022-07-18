import { useRouter } from 'next/router';
import { SearchAndFilter } from '../../modules';

export const Table = ({ children, problems, parameters, setProblemList }) => {
  const router = useRouter();

  const { query } = router;

  return (
    <section className="flex flex-col justify-center antialiased text-gray-600 p-4 mx-2">
      <div className="h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
          <header className="px-3 py-2 border-b border-gray-100">
            <SearchAndFilter
              keys={parameters}
              list={problems}
              setProblemList={setProblemList}
            />
          </header>

          <div className="px-3 py-2">
            <table className="table-auto w-full rounded-lg overflow-visible">
              {children}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
