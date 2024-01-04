import React, { useState, useEffect } from "react";
import Api from "../../Api";
const SampleTable = () => {
  const [products, setProducts] = useState([]);
  const [authentication, setAuthentication] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await Api.authenticatedRequest(Api.getAllTestProducts); // Assuming this function exists in your Api.js file
      setProducts(response); // Update the products state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
      setAuthentication(true);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (productId) => {
    try {
      await Api.deleteTestProduct(productId);
      // Product deleted successfully, you can update the UI or perform any other actions
      console.log(`Product with ID ${productId} deleted successfully`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle errors or display a notification to the user
    }
  };



  return (
    <>
      {authentication ? (
        <h1 className="text-3xl text-center my-auto font-bold">
          Oops, something went wrong...!
        </h1>
      ) : (
        <div className="table-container overflow-x-auto  max-w-[100vw]">
          <table className="border-collapse border-gray-300 border w-full ">
            <thead>
              <tr className={`bg-metal`}>
                <th className="border px-2 py-3 w-[5%]">Sr No</th>
                <th className="border-gray-300 border px-2 py-3">Test ID</th>
                <th className="border-gray-300 border px-2 py-3">Product ID</th>
                <th className="border-gray-300 border px-2 py-3">
                  Product Name
                </th>
                <th className="border-gray-300 border px-2 py-3">
                  Product Type
                </th>
                <th className="border-gray-300 border px-2 py-3">Test Type</th>
                <th className="w-[5%] border-white border px-2 py-3 ">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? `bg` : `bg-`}>
                  <td className="border-metal border p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border-metal border p-2">{product.testID}</td>
                  <td className="border-metal border p-2">
                    {product.productID}
                  </td>
                  <td className="border-metal border p-2">
                    {product.productName}
                  </td>
                  <td className="border-metal border p-2">
                    {product.productType}
                  </td>
                  <td className="border-metal border p-2">
                    {product.testType}
                  </td>
                  <td className="border-metal border p-2 ">
                    <div onClick={() => handleDelete(product._id)}>
                      <svg
                        className="cursor-pointer hover:text-red mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M3 6h18m-2-4h-4l-2-2h-4l-2 2H5zm5 4V5M7 8h10m2 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8h2zm2 4v6m4-6v6m-2-4V5"></path>
                      </svg>
                    </div>
                  </td>
                  {/* <td className="border-metal border p-2">{product.testProduct}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SampleTable;


  // Sample array of products
  // const products = [
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },
  //     { TestId: '12438', id: 'ABC123', name: 'Sample Product 1', productType: "Prouct Type", testType: "Test Type", testProduct: "Test Product" },

  //     // Add more products as needed
  // ];