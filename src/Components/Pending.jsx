import React from 'react';


function AllInvoices() {
    return (
        <div className="h-screen bg-fuchsia-200">
            <h1 className="text-3xl p-6 font-semibold">Pending/Revised Invoices</h1>
            <div className="max-w-6xl mx-auto h-auto bg-white p-8 rounded-xl shadow-lg border-t-8 border-fuchsia-700">
                <div className="flex mb-4 mt-16">
                    <p>Show<select className="ml-4 p-2 border border-gray-300 rounded-lg">
                           <option value=""></option>
                           <option value="10">10</option>
                           <option value="20">20</option>
                           <option value="50">50</option>
                           <option value="All">All</option>
                    </select> entries</p>
                    <div className="ml-auto">
                        <label>Search:</label>
                        <input className="border border-gray-300 p-1 rounded" type="text" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-2">Unique ID</th>
                                <th className="border border-gray-300 p-2">Vendor Code</th>
                                <th className="border border-gray-300 p-2">Company Name</th>
                                <th className="border border-gray-300 p-2">Invoice No.</th>
                                <th className="border border-gray-300 p-2">SO/PO No.</th>
                                <th className="border border-gray-300 p-2">Doc Submitted Date</th>
                                <th className="border border-gray-300 p-2">Invoice Date</th>
                                <th className="border border-gray-300 p-2">Geographical Area</th>
                                <th className="border border-gray-300 p-2">Invoice Amount</th>
                                <th className="border border-gray-300 p-2">Invoice Status</th>
                                <th className="border border-gray-300 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">12345</td>
                                <td className="border border-gray-300 p-2">VC001</td>
                                <td className="border border-gray-300 p-2">Acme Corp</td>
                                <td className="border border-gray-300 p-2">INV123</td>
                                <td className="border border-gray-300 p-2">PO456</td>
                                <td className="border border-gray-300 p-2">2025-03-01</td>
                                <td className="border border-gray-300 p-2">2025-03-05</td>
                                <td className="border border-gray-300 p-2">North America</td>
                                <td className="border border-gray-300 p-2">$5000</td>
                                <td className="border border-gray-300 p-2">Approved</td>
                                <td className="border border-gray-300 p-2">
                                    <button className="px-2 py-1 text-blue-500 rounded">View Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AllInvoices;
