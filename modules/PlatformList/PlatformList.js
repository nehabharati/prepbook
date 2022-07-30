import Link from 'next/link';
import { Modal, PlatformForm, Back } from '../../elements';
import { platforms } from './constants';
// import styles from './PlatformList.module.css';
import { useState } from 'react';
import { Header } from '../Header';

export const PlatformList = () => {
  const [showModal, setShowModal] = useState(false);
  const colors = {
    yellow: 'border-yellow-500',
    green: 'border-green-500',
    gray: 'border-gray-500',
  };
  return (
    <div className="flex flex-col w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <PlatformForm closeModal={setShowModal} />
        </Modal>
      )}
      <Header />

      <div className="flex flex-col w-full">
        <Back />
        <h1 className="text-center md:text-left mx-6 mb-2">Coding Platforms</h1>
        <p className="text-center md:text-left mx-6 mb-6">
          Click on any one of the platforms to add your questions
        </p>

        <section className="text-gray-600 body-font container md:px-0 py-4 mx-auto">
          <div className="flex flex-wrap justify-center md:justify-start md:mr-6">
            {platforms.map((item) => (
              <div
                key={item.name}
                className={`p-4 border-t-4 mx-6 rounded-xl mb-4 shadow-lg transition-all duration-500 hover:-translate-y-2 ${
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
        </section>
      </div>
    </div>
  );
};
