import { Modal, PortfolioEdit, PortfolioForm, Back } from '../../elements';
import { Header } from '../Header';
import { BsGithub } from 'react-icons/bs';

import { useState, useEffect } from 'react';

export const Project = ({ portfolio }) => {
  const [showModal, setShowModal] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const handleModal = () => setShowModal(!showModal);
  console.log(portfolio);
  useEffect(() => {
    setProjectList(portfolio);
  }, [portfolio]);

  return (
    <div className="flex flex-col w-full">
      {showModal && (
        <Modal closeModal={setShowModal}>
          <PortfolioForm closeModal={setShowModal} />
        </Modal>
      )}
      <Header />

      <div className="flex flex-col w-full md:w-10/12">
        <Back />
        <h1 className="mx-6">Portfolio</h1>
        <button
          onClick={handleModal}
          className="px-4 py-2 w-24 text-sm mx-6 my-4 tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add
        </button>
        <section className="text-gray-600 body-font w-100">
          <div className="flex flex-wrap">
            {projectList?.length > 0 ? (
              projectList?.map((item) => (
                <div
                  key={item.id}
                  className={`lg:w-1/3 md:w-full p-4 w-full border-4 border-black rounded-xl mx-6 mb-4`}
                >
                  <a className="block relative h-48 rounded overflow-hidden border border-gray-500">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </a>
                  <div className="w-full">
                    <div className="flex flex-col my-2">
                      <div className="flex justify-between items-baseline">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.name}
                        </h2>
                        <PortfolioEdit portfolio={item} />
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm">{item.technologies}</p>
                        <a
                          target="_blank"
                          href={item.link}
                          key={item.name}
                          className="text-base"
                        >
                          <BsGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex justify-center w-full my-20">
                There are no items to display. Click on add to start your list
                👆🤗
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
