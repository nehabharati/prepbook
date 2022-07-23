import {
  Modal,
  Sidebar,
  ResourceForm,
  Back,
  Table,
  ResourceEdit,
} from '../../elements';
import { useState, useEffect } from 'react';

export const ResourcesList = ({ resources }) => {
  const [showModal, setShowModal] = useState(false);
  const [resourceList, setResourceList] = useState([]);
  const handleModal = () => setShowModal(!showModal);

  useEffect(() => {
    setResourceList(resources);
  }, [resources]);
  console.log(resources);
  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <ResourceForm closeModal={setShowModal} />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <Back />
        <h1 className="mx-6">Resources</h1>
        <button
          onClick={handleModal}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        {resourceList?.length >= 1 ? (
          <Table list={resources} setList={setResourceList}>
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 rounded-lg">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Description</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {resourceList.map((resource) => (
                <tr key={resource.id}>
                  <td className="py-2 px-0 m-0 whitespace-nowrap table-cell align-middle">
                    <div className="font-medium text-gray-800 ">
                      {resource.name}
                    </div>
                  </td>
                  <td className="py-2 px-0 m-0 whitespace-nowrap table-cell align-middle">
                    <div className="text-gray-800 ">{resource.link}</div>
                  </td>

                  <td className="py-2 px-0 m-0 whitespace-nowrap  flex items-center justify-end">
                    <div className="rounded-sm py-1 text-xs float-right flex items-center">
                      <span className="mx-4">{new Date().toDateString()}</span>
                      <ResourceEdit resource={resource} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p className="flex justify-center w-full my-20">
            There are no items to display. Click on add to start your list 👆🤗
          </p>
        )}
      </div>
    </div>
  );
};
