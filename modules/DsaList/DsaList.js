import Link from 'next/link';
import { Modal, Sidebar, PlatformForm } from '../../elements';
import { SearchAndFilter } from '..';
import { platforms } from './constants';
import styles from './PlatformList.module.css';
import { useState } from 'react';

export const PlatformList = () => {
  const [showModal, setShowModal] = useState(false);
  const colors = {
    yellow: 'bg-yellow-300 border-yellow-500',
    green: 'bg-green-300 border-green-500',
  };
  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <PlatformForm />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <SearchAndFilter />

        <button
          onClick={() => setShowModal(!showModal)}
          className="px-4 py-2 w-24 mx-6 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <section className="text-gray-600 body-font w-100 px-5 ">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {platforms.map((item) => (
                <div
                  key={item.name}
                  className={`lg:w-1/4 md:w-full p-4 w-full border-4 border-yellow-500 rounded-xl mr-4 ${
                    item.color ? colors[item.color] : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col justify-between items-center">
                    <div>
                      <h2 className="text-gray-900 title-font text-xl mb-8 font-medium">
                        {item.name}
                      </h2>
                      {/* <p className="mt-1">{item.tag}</p> */}
                    </div>
                    <Link href={`/dsa/${item.tag}`} key={item.name}>
                      <button className="px-2 w-24 py-2 font-medium tracking-wide cursor-pointer text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Open
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
