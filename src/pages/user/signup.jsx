import React, { useState } from "react";
import Api from "../../Api";
import Modal from "../../components/modal";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const handleSignup = async () => {
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        setIsModalOpen(true);
        setModalMessage("Please fill in all the required fields.");
        setModalType("warning !");
        return;
      }

      const response = await Api.signup(formData);
      // Handle success, maybe redirect to another page or show a success message
      console.log("Signup successful:", response);
      setIsModalOpen(true);
      setModalMessage("Signup Successfully!");
      setModalType("success !");
      // Extract the token from the response
      const { token } = response;
      // Store the token in localStorage after successful sign-in
      localStorage.setItem("token", token);
      navigate("/");
      // Clear form data state after successful signin      // Clear form data state after successful signup
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      // Display success message using alert or other UI component
    } catch (error) {
      setIsModalOpen(true);
      setModalMessage("Failed. Please try again.");
      setModalType("error !");
      // Handle error, show an error message or validation feedback
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex  justify-center items-center my-auto">
      <form className="box bg-metal p-8 rounded shadow-md w-[30%]">
        <h2 className="text-white text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
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
            onClick={handleSignup}
          >
            Sign Up
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

export default SignupForm;
