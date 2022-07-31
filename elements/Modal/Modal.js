import styles from './Modal.module.css';

export const Modal = ({ closeModal, children, type }) => {
  return (
    <div className={`z-50 ${styles.overlay}`}>
      <div
        className={`p-4 translate-y-10 md:w-1/2 md:relative md:left-1/2 transform md:-translate-x-1/2 md:translate-y-10`}
      >
        <div className="border-0 rounded-xl  bg-white px-6">
          <div className="flex items-start justify-between py-4 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold capitalize">
              {type} Question
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => closeModal(false)}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
