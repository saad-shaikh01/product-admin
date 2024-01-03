import React from 'react';

const Modal = ({ isOpen, closeModal, message, type }) => {
  const modalBGClass = isOpen ? 'block' : 'hidden';
  const modalShowHideClass = isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0';

  const getModalTypeClass = () => {
    switch (type) {
      case 'success !':
        return 'bg-metal text-green';
      case 'error !':
        return 'bg-metal text-red';
      case 'warning !':
        return 'bg-metal text-yellow';
      default:
        return 'bg-metal text-gray-700';
    }
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${modalBGClass} flex items-center justify-center`}>
      <div className={`modal-overlay fixed w-full h-full bg-metal opacity-50`}></div>

      <div className={`modal-container  w-96 mx-auto rounded shadow-lg overflow-hidden transform transition-all ${modalShowHideClass}`}>
        <div className={`modal-header py-4 px-6 border-b  items-center flex justify-between ${getModalTypeClass()}`}>
          <span className="font-bold text-2xl ">{type.toUpperCase()}</span>
          <div className="cursor-pointer float-right text-sm font-semibold border px-2 py-1 rounded-[50%] hover:bg-olive focus:outline-none " onClick={closeModal}>
            X
          </div>
        </div>

        <div className="modal-body bg-input text-2xl text-center p-6 py-[50px]">
          <p>{message}</p>
        </div>

        <div className={`modal-footer py-4 px-6 border-t border-gray-300 ${getModalTypeClass()}`}>
          <button className="bg-olive hover:bg-olive text-white py-2 px-4 rounded-md focus:outline-none" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


// import React from 'react';

// const Modal = ({ isOpen, closeModal, message, type }) => {
//   const modalBGClass = isOpen ? 'block' : 'hidden';
//   const modalShowHideClass = isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0';

//   const getModalTypeClass = () => {
//     switch (type) {
//       case 'success':
//         return 'bg-midnight text-white';
//       case 'error':
//         return 'bg-midnight text-white';
//       default:
//         return 'bg-blue-400 text-white';
//     }
//   };

//   return (
//     <div className={`fixed z-10 inset-0 overflow-y-auto ${modalBGClass} flex items-center justify-center bg-opacity-75`}>
//       <div className={`modal-overlay fixed w-full h-full bg-black opacity-50`}></div>

//       <div className={`modal-container bg-white w-96 mx-auto rounded shadow-lg overflow-hidden transform transition-all ${modalShowHideClass}`}>
//         <div className={`modal-header py-4 px-6 border-b border-gray-300 ${getModalTypeClass()}`}>
//           <span className="font-bold">{type.toUpperCase()}</span>
//           <button className="float-right text-sm font-semibold focus:outline-none" onClick={closeModal}>
//             X
//           </button>
//         </div>

//         <div className="modal-body p-6">
//           <p>{message}</p>
//         </div>

//         <div className={`modal-footer py-4 px-6 border-t border-gray-300 ${getModalTypeClass()}`}>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md focus:outline-none" onClick={closeModal}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
