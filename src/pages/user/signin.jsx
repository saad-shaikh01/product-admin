// import React from 'react';

// const SigninForm = () => {
//   return (
//     <div className="flex justify-center items-center my-auto">
//       <form className="bg-metal p-8 rounded shadow-md w-[30%]">
//         <h2 className="text-white text-2xl font-bold mb-4">Sign In</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
//             id="email"
//             type="email"
//             placeholder="Email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
//             id="password"
//             type="password"
//             placeholder="Password"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-midnight hover:bg-olive text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Sign In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SigninForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import Modal from "../../components/modal";

const SigninForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // Set default to success or error based on response

  const closeModal = () => {
    setIsModalOpen(false);
    // navigate("/"); // Redirect after closing the modal
  
  };


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      if (
        !formData.email ||
        !formData.password 
      ) {
        setIsModalOpen(true);
        setModalMessage("Please fill in all the required fields.");
        setModalType("warning !");
        return;
      }
      
      
      const response = await Api.signin(formData);
      
      setIsModalOpen(true);
      setModalMessage("Signin Successfully!");
      setModalType("success !");
      console.log("Signin successful:", response);
      // Extract the token from the response
      const { token } = response;
      console.log(token)
      // Store the token in localStorage after successful sign-in
      localStorage.setItem("token", token);
      // navigate("/");
      // Clear form data state after successful signin
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
      // Display success message using alert or other UI component
      // alert('Signin successful!'); // You can use other UI components for a better UX
    } catch (error) {
      console.error("Signin error:", error);
      setIsModalOpen(true);
      setModalMessage("Failed. Please try again.");
      setModalType("error !");
      // Handle error, show an error message or validation feedback
    }
  };

  return (
    <div className="flex justify-center items-center my-auto">
      <form className="bg-metal p-8 rounded shadow-md w-[30%]">
        <h2 className="text-white text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-midnight hover:bg-olive text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
};

export default SigninForm;
