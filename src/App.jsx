import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './Components/Dashboard.jsx';
import NewBill from './Components/NewBill.jsx';
import AllInvoices from './Components/AllInvoices.jsx';
import Pending from './Components/Pending.jsx';
import Approved from './Components/Approved.jsx';
import Rejected from './Components/Rejected.jsx';
import Withdrawn from './Components/Withdrawn.jsx';
import Hold from './Components/Hold.jsx';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />

        <div className="flex flex-1">
          <Sidebar />

          
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/new-bill" element={<NewBill />} />
              <Route path="/all-invoices" element={<AllInvoices />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/approved" element={<Approved />} />
              <Route path="/rejected" element={<Rejected />} />
              <Route path="/withdrawn" element={<Withdrawn />} />
              <Route path="/hold" element={<Hold />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
