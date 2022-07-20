import Link from 'next/link';
import { Modal, Sidebar, PlatformForm, Back } from '../../elements';
import { platforms } from './constants';
import styles from './PlatformList.module.css';
import { useState } from 'react';

export const PlatformList = () => {
  const [showModal, setShowModal] = useState(false);
  const colors = {
    yellow: 'bg-yellow-300 border-yellow-500',
    green: 'bg-green-300 border-green-500',
    gray: 'bg-gray-200 border-gray-500',
  };
  return (
    <div className="flex w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <PlatformForm closeModal={setShowModal} />
        </Modal>
      )}
      <Sidebar />

      <div className="flex flex-col w-10/12 my-6">
        <Back />
        <h1 className="mx-6 mb-4">Coding Platforms</h1>
        <p className="mx-6 mb-4">
          Click on any one of the platforms to add your questions
        </p>

        <section className="text-gray-600 body-font w-100 px-5 ">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {platforms.map((item) => (
                <div
                  key={item.name}
                  className={`p-4 border-4 rounded-xl mr-4 mb-4 ${
                    item.color ? colors[item.color] : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col justify-between items-center">
                    <h2 className="text-black text-xl mb-4 font-medium">
                      {item.name}
                    </h2>
                    <p className="text-black mb-8 text-center">
                      {item.description}
                    </p>
                    <Link href={`/dsa/${item.tag}`} key={item.name}>
                      <button className="px-2 w-24 py-2 text-sm tracking-wide cursor-pointer text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
