import { Filter, Search } from '../../elements';
import styles from './SearchAndFilter.module.css';

export const SearchAndFilter = () => {
  return (
    <div className="flex justify-between">
      <Filter />
      <Search />
    </div>
  );
};
