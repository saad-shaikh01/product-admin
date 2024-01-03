import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [testProductDropdown, setTestProductDropdown] = useState(false);
  const [cprProductDropdown, setCPRProductDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdown(!productDropdown);
    setTestProductDropdown(false);
    setCPRProductDropdown(false);
  };

  const toggleTestProductDropdown = () => {
    setTestProductDropdown(!testProductDropdown);
    setProductDropdown(false);
    setCPRProductDropdown(false);
  };

  const toggleCPRProductDropdown = () => {
    setCPRProductDropdown(!cprProductDropdown);
    setProductDropdown(false);
    setTestProductDropdown(false);
  };

  return (
    <>
      <div
        className={`bg-metal box text-white w-64 h-screen ${
          isOpen ? "block" : "block"
        }`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-9 text-center ">
            Lap Automation
          </h1>
          <ul>
            <li className="mb-2">
              <div>
                <button
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    productDropdown ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={toggleProductDropdown}
                >
                  <span>Product</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Product Dropdown Content */}
                {productDropdown && (
                  <ul
                    className={`ml-4 transition-max-height duration-1000 ease-in-out overflow-hidden ${
                      productDropdown ? "max-h-40" : "max-h-0"
                    }`}
                    //  className="ml-4"
                  >
                    <li>
                      <Link
                        to="/"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Table
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product-form"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Form
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="mb-2">
              <div>
                <button
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    testProductDropdown ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={toggleTestProductDropdown}
                >
                  <span>Test Product</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Test Product Dropdown Content */}
                {testProductDropdown && (
                  <ul className="ml-4">
                    <li>
                      <Link
                        to="/test-product-table"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Table
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/test-product-form"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Form
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="mb-2">
              <div>
                <button
                  className={`flex justify-between items-center w-full p-2 rounded ${
                    cprProductDropdown ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={toggleCPRProductDropdown}
                >
                  <span>Test Depart (CPRI)</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* CPR Product Dropdown Content */}
                {cprProductDropdown && (
                  <ul className="ml-4">
                    <li>
                      <Link
                        to="/cpr-product-table"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Table
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cpr-product-form"
                        className="block py-1 hover:bg-gray-700 rounded"
                      >
                        Form
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            {/* Add more sidebar links */}
          </ul>
        </div>
        <button
          className="absolute top-0 right-0 mt-4 mr-4 lg:hidden block"
          onClick={toggleSidebar}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
