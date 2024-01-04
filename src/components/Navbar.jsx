import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import Api from "../Api";
import Modal from "./modal";
const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // Set default to success or error based on response

  const closeModal = () => {
    setIsModalOpen(false);
    // navigate("/signin"); // Redirect after closing the modal
  };
  const handleSignout = async () => {
    try {
      await Api.signout(); // Call the signout API from your imported Api
      localStorage.removeItem("token"); // Remove the token from localStorage
      // setIsModalOpen(true);
      // setModalMessage("Signed out Successfully!");
      // setModalType("success !");
      navigate("/signin");
      // console.log('Signed out successfully!'); // Optionally clear local storage or perform other cleanup
      console.log("Signed out successfully!");
    } catch (error) {
      setIsModalOpen(true);
      setModalMessage("Error signing out !");
      setModalType("error !");
      // Handle error if needed
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-metal text-white p-4 flex justify-between items-center ">
      <div className="text-center flex-grow">
        <h1 className="text-2xl font-bold hidden md:block ">Welcome to Admin Panel</h1>
      </div>
      <div className="text-right">
        {localStorage.getItem("token") ? (
          <div
            onClick={handleSignout}
            className="cursor-pointer text-white hover:text-gray-300"
          >
            Signout
          </div>
        ) : (
          <>
            <Link to="/signin" className="text-white hover:text-gray-300 mr-4">
              Signin
            </Link>

            <Link to="/signup" className="text-white hover:text-gray-300">
              Signup
            </Link>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-metal text-white p-4 flex justify-between items-center">
//       <div className="text-center flex-grow"> {/* Use flex-grow to center */}
//         <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
//       </div>
//       <div className="text-right">
//         <a href="/" className="text-white hover:text-gray-300">
//           Signout
//         </a>
//         {/* You can add more links or components on the right side */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
