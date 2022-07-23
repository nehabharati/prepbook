import { Filter, Search } from '../../elements';
import Fuse from 'fuse.js';
import { useEffect } from 'react';
import styles from './SearchAndFilter.module.css';

export const SearchAndFilter = (props) => {
  console.log(props);
  // const fuse = new Fuse(props?.list, {
  //   keys: props.keys,
  //   includeScore: true,
  // });

  // useEffect(() => {
  //   const results = fuse.search('easy');
  //   const searchResults = results?.map((result) => result.item);
  //   console.log(searchResults);
  //   props.setList(searchResults);
  // }, []);
  return (
    <div className="flex justify-between">
      <Search {...props} />
      <Filter />
    </div>
  );
};
