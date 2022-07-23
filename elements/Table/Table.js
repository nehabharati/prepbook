import { Children, cloneElement, isValidElement } from 'react';
import { SearchAndFilter } from '../../modules';

export const Table = (props) => {
  console.log(props);
  return (
    <>
      <section className="flex flex-col justify-center antialiased text-gray-600 p-4 mx-2">
        <div className="h-full">
          <div className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200 ">
            <header className="px-3 py-2 border-b border-gray-100">
              <SearchAndFilter {...props} />
            </header>

            <div className="px-3 py-2">
              <table className="table-auto w-full rounded-lg overflow-visible">
                {props.children}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
