import React from "react";
import Card from "./Card.jsx";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-fuchsia-200">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Card title="All Invoices" info="8" />
        <Card title="Approved Invoices" info="4" />
        <Card title="Pending Invoices" info="0" />
        <Card title="Rejected Invoices" info="8" />
        <Card title="Hold Invoices" info="4" />
        <Card title="Revise Invoices" info="0" />
        <Card title="Withdrawn" info="8" />
        <Card title="Scanning done" info="4" />
        <Card title="Posting done" info="0" />
        <Card title="Payment done" info="8" />
        <Card title="All Invoice Amount" info="4" />
        <Card title="Amount Paid" info="0" />
      </div>

      {/* Responsive Footer */}
      <footer className="mt-auto bg-white text-gray-600 text-sm md:text-base p-4 w-full">
        <span className="font-bold">Copyright © 2025.</span> All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
