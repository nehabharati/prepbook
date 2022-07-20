import { Filter, Search } from '../../elements';
import Fuse from 'fuse.js';
import { useEffect } from 'react';
import styles from './SearchAndFilter.module.css';

export const SearchAndFilter = ({ keys, list, setList }) => {
  console.log(list, keys);
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

  return (
    <div className="flex justify-between">
      <Search keys={keys} list={list} />
      <Filter />
    </div>
  );
};
