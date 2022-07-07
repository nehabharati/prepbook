import { Dialog, Transition } from '@headlessui/react';
import styles from './Modal.module.css';
import { Fragment, useState } from 'react';
import { Form } from '../Form';

export const Modal = ({ closeModal }) => {
  return (
    <div className={`z-50 ${styles.overlay}`}>
      <div className={`${styles.modalContainer}`}>
        <div className="">
          <div className="border-0 rounded-xl  bg-white px-6 py-4">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Question</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <Form />
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-white mr-4 rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="text-white rounded-md p-4 bg-blue-500 hover:bg-blue-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
