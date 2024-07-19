import React, { useState,useEffect } from "react";

const CustomApp = () => {
  const { isOpen, openModal, closeModal } = UseModal();
  return (
    <>
     <div className="flex justify-center items-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Open Modal
        </button>
        {isOpen && <Modal closeModal={closeModal} />}
      </div>
    </>
  );
};

export default CustomApp;

// modal components
const Modal = ({ closeModal }) => {
  return (
    <>
      <div
            onClick={closeModal}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
        
      </div>

      <div
        className="modal bg-white rounded-lg p-8 z-[999]">
          <p className="text-gray-800">This is the modal content.</p>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close Modal
          </button>
        </div>
    </>
  );
};

// custom hooks to manage modal state
const UseModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return { isOpen, openModal, closeModal };
  };

// const Modal = () => {
//   const [open, setOpen] = useState(false);

//   const btnOpen = () => {
//     setOpen(true);
//   };

//   const btnClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={btnOpen}
//       >
//         Open
//       </button>
//       {open && (
//         <>
//           <div className="overlay bg-gray-800 bg-opacity-75 fixed inset-0 flex justify-center items-center">
//             <div className="max-w-[300px] relative h-[300px] overflow-x-auto overflow-y-auto content bg-white p-8 rounded-lg">
//               <p className="text-gray-700">
//                 Pariatur eu Lorem sit in est qui minim ad do exercitation. Do
//                 mollit fugiat officia do adipisicing. Aliqua in do laboris anim
//                 commodo reprehenderit laborum aute. Veniam eiusmod ex elit irure
//                 elit culpa reprehenderit ad do proident laborum irure. Ex esse
//                 minim Lorem in mollit labore nostrud fugiat. Officia enim id
//                 nisi labore. Mollit dolor dolore reprehenderit velit. Incididunt
//                 officia culpa laborum qui Lorem eu cupidatat fugiat nisi
//                 consequat deserunt duis exercitation. Velit minim ad voluptate
//                 veniam nulla anim minim esse veniam qui non sit ullamco. Elit ad
//                 exercitation commodo voluptate sit nostrud irure duis ipsum.
//                 Consectetur consectetur ea reprehenderit commodo cupidatat irure
//                 culpa amet adipisicing voluptate proident officia. Ad nisi in
//                 occaecat irure. Culpa ut proident laborum dolor. Ad officia
//                 laborum velit est in duis duis ut anim eiusmod do consequat
//                 occaecat labore. Ut ad excepteur velit velit cillum aliquip
//                 ullamco excepteur irure nisi laboris do duis mollit. Eu occaecat
//                 consectetur duis et occaecat proident. Sit ad officia est enim
//                 non cupidatat proident. In proident est excepteur ipsum irure
//                 ea. Dolor esse excepteur fugiat et ea reprehenderit mollit.
//               </p>
//               <button
//                 className="bg-red-500 absolute top-[-10px] right-[-10px] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={btnClose}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };
