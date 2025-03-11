import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './Components/Dashboard.jsx';
import NewBill from './Components/NewBill.jsx';
import AllInvoices from './Components/All Invoices/AllInvoices.jsx';
import Pending from './Components/Pending Invoices/Pending.jsx';
import Approved from './Components/Approved Invoices/Approved.jsx';
import Rejected from './Components/Rejected Invoices/Rejected.jsx';
import Withdrawn from './Components/Withdrawn Invoices/Withdrawn.jsx';
import Hold from './Components/Hold Invoices/Hold.jsx';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-1">
          <Sidebar />

          
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/NewBill" element={<NewBill />} />
              <Route path="/AllInvoices" element={<AllInvoices />} />
              <Route path="/Pending" element={<Pending />} />
              <Route path="/Approved" element={<Approved />} />
              <Route path="/Rejected" element={<Rejected />} />
              <Route path="/Withdrawn" element={<Withdrawn />} />
              <Route path="/Hold" element={<Hold />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
