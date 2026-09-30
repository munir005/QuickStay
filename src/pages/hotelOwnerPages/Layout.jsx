import React from "react";
import OwnerNavbar from "../../components/hotelOwnerComponents/OwnerNavbar";
import OwnerSidebar from "../../components/hotelOwnerComponents/OwnerSidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen pt-17">
      <OwnerNavbar />
      <div className="flex min-h-full">
        <OwnerSidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
