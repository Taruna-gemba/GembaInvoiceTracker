import React from 'react';
import Card from './Card.jsx'
function Dashboard() {
    return (
        <>
        <div className="h-screen bg-fuchsia-200 grid grid-cols-3 gap-4 p-2">
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
         <footer className="fixed bottom-0 w-full bg-white text-gray-600 text-base p-4">
         <span className="font-bold">Copyright © 2025.</span> All rights reserved.
       </footer>
       </>
 
    );
}

export default Dashboard;