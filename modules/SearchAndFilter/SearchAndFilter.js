import { Filter, Search } from '../../elements';
import Fuse from 'fuse.js';
import { useEffect } from 'react';
import styles from './SearchAndFilter.module.css';

export const SearchAndFilter = (props) => {
  return (
    <div className="flex justify-between">
      <Search {...props} />
      {/* <Filter /> */}
    </div>
  );
};
