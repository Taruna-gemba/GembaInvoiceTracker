import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faTachometerAlt,
  faFileInvoice,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 transition-colors duration-200 font-semibold 
     ${isActive ? "bg-[#FF8904] text-white" : "text-white hover:bg-orange-200"} px-4 py-2`;

  return (
    <>
      {/* Hamburger Menu Button (Only for Mobile & Tablet) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 fixed top-4 left-4 z-50 bg-white text-black rounded-md shadow-lg"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-fuchsia-700 py-2 shadow-lg w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-screen`}
      >
        <nav className="flex flex-col space-y-2 mt-16 md:mt-0">
          <NavLink to="/Dashboard" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/NewBill" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faPlusSquare} />
            <span>New Bill</span>
          </NavLink>
          <NavLink to="/AllInvoices" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>All Invoices</span>
          </NavLink>
          <NavLink to="/Pending" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Pending Invoices</span>
          </NavLink>
          <NavLink to="/Approved" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Approved Invoices</span>
          </NavLink>
          <NavLink to="/Rejected" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Rejected Invoices</span>
          </NavLink>
          <NavLink to="/Withdrawn" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Withdrawn Invoices</span>
          </NavLink>
          <NavLink to="/Hold" className={linkClass} onClick={closeSidebar}>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Hold Invoices</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
