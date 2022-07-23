import Fuse from 'fuse.js';
import { list } from 'postcss';
import { useEffect } from 'react';

export const Search = (props) => {
  console.log(props);
  // const fuse = new Fuse(list, {
  //   keys: keys,
  //   includeScore: true,
  // });

  // useEffect(() => {
  //   const results = fuse.search('easy');
  //   const searchResults = results?.map((result) => result.item);
  //   console.log(searchResults);
  //   setList(searchResults);
  // }, []);

  const handleChange = (e) => {
    let filteredNotes = props.list.filter((item) => {
      if (e.target.value === '') {
        return item;
      }
      console.log(
        item.title,
        e.target.value,
        item.title.toLowerCase().includes('Note 1')
      );
      return item.title.toLowerCase().includes(e.target.value);
    });

    props.setList(filteredNotes);
  };
  return (
    <section className="relative rounded-md">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </section>
  );
};
