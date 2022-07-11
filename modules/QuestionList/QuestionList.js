import { Modal, Sidebar, QuestionForm } from '../../elements';
import { SearchAndFilter } from '..';
// import styles from './QuestionList.module.css';
import { useState } from 'react';
import { Table } from '../../elements';

export const QuestionList = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <QuestionForm closeModal={setShowModal} />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12">
        <SearchAndFilter />

        <button
          onClick={() => setShowModal(!showModal)}
          className="px-4 py-2 w-24 mx-6 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <Table />
      </div>
    </div>
  );
};
