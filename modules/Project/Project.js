import Link from 'next/link';
import { Sidebar, Modal } from '../../elements';
import { SearchAndFilter } from '../';
import { platforms } from './constants';
import { useState } from 'react';
// import styles from './DsaList.module.css';

export const Project = ({ closeModal }) => {
  const [showModal, setShowModal] = useState(false);
  const colors = {
    yellow: 'bg-yellow-300 border-yellow-500',
    green: 'bg-green-300 border-green-500',
  };
  return (
    <div className="flex w-full">
      {showModal && <Modal closeModal={setShowModal} />}
      <Sidebar />

      <div className="flex flex-col w-10/12">
        <SearchAndFilter />

        <button
          onClick={() => closeModal(false)}
          className="px-4 py-2 w-24 mx-6 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <section className="text-gray-600 body-font w-100 px-5 ">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {platforms.map((item) => (
                <div
                  key={item.tag}
                  className={`lg:w-1/3 md:w-full p-4 w-full border-4 border-yellow-500 rounded-xl mr-4 ${
                    item.color ? colors[item.color] : 'bg-white'
                  }`}
                >
                  <a className="block relative h-48 rounded overflow-hidden border border-gray-500">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </a>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.name}
                      </h2>
                      <p className="mt-1">{item.tag}</p>
                    </div>
                    <a target="_blank" href={item.link} key={item.name}>
                      github Link
                    </a>
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
