import { Modal, NotesForm, Back, Table, NoteEdit } from '../../elements';
import Link from 'next/link';
import { Header } from '../Header';
import { useState, useEffect } from 'react';

export const NotesList = ({ notes }) => {
  const [showModal, setShowModal] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchParameters = ['title'];
  const handleModal = () => setShowModal(!showModal);

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  return (
    <div className="flex flex-col w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <NotesForm closeModal={setShowModal} />
        </Modal>
      )}
      <Header />

      <div className="flex flex-col w-full">
        <Back />
        <h1 className="mx-6">Notes</h1>

        <button
          onClick={handleModal}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <Table
          list={notes}
          setList={setNotesList}
          searchParameters={searchParameters}
        >
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
          {notesList?.length > 0 ? (
            <tbody className="text-sm divide-y divide-gray-100 cursor-pointer">
              {notesList?.map((note) => (
                <tr key={note.id}>
                  <td className="py-2 px-0 m-0 whitespace-nowrap table-cell align-middle">
                    <div className="font-medium text-gray-800 ">
                      {note.title}
                    </div>
                  </td>
                  <td className="py-2 px-0 m-0 whitespace-nowrap table-cell align-middle">
                    <div className="text-gray-800 ">{note.description}</div>
                  </td>

                  <td className="py-2 px-0 m-0 whitespace-nowrap  flex items-center justify-end">
                    <div className="rounded-sm py-1 text-xs float-right flex items-center">
                      <span className="mx-4">{new Date().toDateString()}</span>
                      <NoteEdit note={note} />
                      <Link href={`/notes/${note.link}`} key={note.id}>
                        <span className="rounded-lg py-1 ml-4 px-2 text-xs text-white float-right flex items-center bg-black">
                          Open
                        </span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr className="relative">
                <td
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    showSearchResults ? 'my-20' : 'my-6'
                  }`}
                >
                  {!showSearchResults
                    ? 'Sorry there are no search results to display😟'
                    : 'There are no items to display. Click on add to start your list 👆🤗'}
                </td>
                <td></td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
};
