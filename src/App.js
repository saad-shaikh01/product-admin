// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import ProductTable from './pages/product/table';
// import ProductForm from './pages/product/form';
// import TestProductTable from './pages/test/table';
// import TestProductForm from './pages/test/form';
// import CPRProductTable from './pages/cprProduct/table';
// import CPRProductForm from './pages/cprProduct/form';
// import SignupForm from './pages/user/signup';
// import SigninForm from './pages/user/signin';

// function App() {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Navbar />
//           <Routes>
//             <Route exact path="/" Component={ProductTable} />
//             <Route exact path="/signup" Component={SignupForm} />
//             <Route exact path="/signin" Component={SigninForm} />
//             <Route exact path="/product-form" Component={ProductForm} />
//             <Route  path="/test-product-table" Component={TestProductTable} />
//             <Route  path="/test-product-form" Component={TestProductForm} />
//             <Route  path="/cpr-product-table" Component={CPRProductTable} />
//             <Route  path="/cpr-product-form" Component={CPRProductForm} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProductTable from './pages/product/table';
import ProductForm from './pages/product/form';
import TestProductTable from './pages/test/table';
import TestProductForm from './pages/test/form';
import CPRProductTable from './pages/cprProduct/table';
import CPRProductForm from './pages/cprProduct/form';
import SignupForm from './pages/user/signup';
import SigninForm from './pages/user/signin';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/test-product-table" element={<TestProductTable />} />
          <Route path="/test-product-form" element={<TestProductForm />} />
          <Route path="/cpr-product-table" element={<CPRProductTable />} />
          <Route path="/cpr-product-form" element={<CPRProductForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
