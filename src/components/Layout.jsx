import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebar = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="flex h-screen">
      {!hideSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {<Navbar />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
