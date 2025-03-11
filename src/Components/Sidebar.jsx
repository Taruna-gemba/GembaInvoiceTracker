import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileInvoice, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 rounded-lg transition-colors duration-200 font-semibold ${isActive ? 'bg-orange-400 text-white m-4 p-2' : 'text-white hover:bg-orange-200 m-4 p-2'}`;

  return (
    <div className="w-64 h-screen bg-fuchsia-700 shadow-lg">
      <nav className="flex flex-col space-y-2">
        <NavLink to="/Dashboard" className={linkClass}>
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/NewBill" className={linkClass}>
          <FontAwesomeIcon icon={faPlusSquare} />
          <span>New Bill</span>
        </NavLink>
        <NavLink to="/AllInvoices" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>All Invoices</span>
        </NavLink>
        <NavLink to="/Pending" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>Pending Invoices</span>
        </NavLink>
        <NavLink to="/Approved" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>Approved Invoices</span>
        </NavLink>
        <NavLink to="/Rejected" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>Rejected Invoices</span>
        </NavLink>
        <NavLink to="/Withdrawn" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>Withdrawn Invoices</span>
        </NavLink>
        <NavLink to="/Hold" className={linkClass}>
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>Hold Invoices</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
