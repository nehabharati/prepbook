import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ResourceFormEdit, Modal } from '../..';

export const ResourceEdit = ({ resource }) => {
  const [show, setShow] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  console.log(resource);
  const handleDelete = async (id) => {
    await fetch(`/api/resource/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };
  const handleUpdate = async () => setUpdateModal(!updateModal);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setShow(!show)}
            className="border-0 flex items-center justify-center w-full"
            id="options-menu"
          >
            <BsThreeDotsVertical />
          </button>
        </div>
        {show && (
          <div className="absolute origin-top-right right-0 z-10 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1 "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                onClick={() => handleUpdate(resource.id)}
                className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>Edit</span>
                </span>
              </a>
              <a
                href="#"
                onClick={() => handleDelete(resource.id)}
                className="flex items-center  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>Delete</span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
      {updateModal && (
        <Modal closeModal={setUpdateModal} type={'edit'}>
          <ResourceFormEdit closeModal={setUpdateModal} resource={resource} />
        </Modal>
      )}
    </>
  );
};
