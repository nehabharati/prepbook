import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { QuestionFormAdd, QuestionFormEdit, Modal } from '../..';

export const QuestionEdit = ({ problem }) => {
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const handleDelete = async (id) => {
    await fetch(`/api/problem/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  const handleUpdate = async (id) => {
    setUpdateModal(!updateModal);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setShow(!show)}
            className="border-0 flex items-center justify-center w-full px-4"
            id="options-menu"
          >
            <BsThreeDotsVertical />
          </button>
        </div>
        {show && (
          <div className="absolute origin-top-right right-0 z-10 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                onClick={() => handleUpdate(problem.id)}
                className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col text-xs">
                  <span>Edit</span>
                </span>
              </a>
              <a
                href="#"
                onClick={() => handleDelete(problem.id)}
                className="flex items-center  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col text-xs">
                  <span>Delete</span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
      {deleteModal && (
        <Modal closeModal={setDeleteModal} type={'edit'}>
          <QuestionFormAdd
            closeModal={setDeleteModal}
            type={'edit'}
            problem={problem}
          />
        </Modal>
      )}
      {updateModal && (
        <Modal closeModal={setUpdateModal} type={'edit'}>
          <QuestionFormEdit closeModal={setUpdateModal} problem={problem} />
        </Modal>
      )}
    </>
  );
};
