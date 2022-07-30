import { SearchAndFilter } from '../../modules';

export const Table = (props) => {
  return (
    <>
      <section className="flex flex-col justify-center antialiased text-gray-600 w-full py-4 px-6">
        <div className="h-full">
          <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
            <div className="px-3 py-2 border-b border-gray-100">
              <SearchAndFilter {...props} />
            </div>

            <div className="px-3 py-2 overflow-scroll md:overflow-visible">
              <table className="table-auto w-full rounded-lg md:overflow-visible">
                {props.children}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
