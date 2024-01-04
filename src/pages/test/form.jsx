import React, { useState } from "react";
import Api from "../../Api";
import Modal from "../../components/modal";

const SampleForm = () => {
  const [formData, setFormData] = useState({
    testType: "",
    testID: "",
    productName: "",
    productID: "",
    productType: "",
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

  const handleSubmit = async () => {
    try {
      if (
        !formData.testType ||
        !formData.testID ||
        !formData.productName ||
        !formData.productID ||
        !formData.productType
      ) {
        setIsModalOpen(true);
        setModalMessage("Please fill in all the required fields.");
        setModalType("warning !");
        return;
      }
      if (localStorage.getItem("token")) {
        const response = await Api.testProductForm(formData);
        console.log("Form submitted successfully:", response);
        // Handle success, show a success message or redirect
        setFormData({
          testType: "",
          testID: "",
          productName: "",
          productID: "",
          productType: "",
        });
        setIsModalOpen(true);
        setModalMessage("Submitted Successfully!");
        setModalType("success !");
      } else {
        setIsModalOpen(true);
        setModalMessage("Authentication error. Please sign in.");
        setModalType("error !");
        // Handle authentication error
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsModalOpen(true);
      setModalMessage("Failed. Please try again.");
      setModalType("error !");
      // Handle error, show an error message or validation feedback
    }
  };

  return (
    <div className="flex justify-center items-center my-auto">
      <form className="bg-metal p-8 rounded shadow-md w-[90%] sm:w-[50%] md:w-[60%] lg:w-[40%] ">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="testType"
          >
            Test Type
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="testType"
            type="text"
            placeholder="Test Type"
            value={formData.testType}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="testID"
          >
            Test ID
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="testID"
            type="text"
            placeholder="Test ID"
            value={formData.testID}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="productName"
            type="text"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productID"
          >
            Product ID
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="productID"
            type="text"
            placeholder="Product ID"
            value={formData.productID}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productType"
          >
            Product Type
          </label>
          <input
            className="bg-input w-full border border-white rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-inputBorder"
            id="productType"
            type="text"
            placeholder="Product Type"
            value={formData.productType}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-midnight hover:bg-olive text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
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

export default SampleForm;
