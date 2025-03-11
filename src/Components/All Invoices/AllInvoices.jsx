import { useState, useEffect } from "react";
import AllInvoicesTable from "./AllInvoicesTable.jsx";

function AllInvoices() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/invoices"); // Replace with actual API
        const data = await response.json();

        console.log("Fetched Invoices:", data); // Debugging: Check API response

        const invoiceList = Array.isArray(data) ? data : data.data || [];
        setInvoices(invoiceList);
        setFilteredInvoices(invoiceList);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  // Handle dropdown changes for entries per page
  const handleEntriesChange = (e) => {
    const value = e.target.value === "all" ? "all" : Number(e.target.value);
    setEntries(value);
    setCurrentPage(1);
  };

  // Handle search filtering
  useEffect(() => {
    const filtered = invoices.filter((invoice) =>
      Object.values(invoice).some(
        (val) =>
          val &&
          typeof val === "string" &&
          val.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredInvoices(filtered);
    setCurrentPage(1);
  }, [search, invoices]);

  // Pagination logic
  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentEntries =
    entries === "all"
      ? filteredInvoices
      : filteredInvoices.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = entries === "all" ? 1 : Math.ceil(filteredInvoices.length / entries);

  return (
    <div className="h-screen bg-fuchsia-200">
      <h1 className="text-2xl p-4">All Invoices</h1>
      <div className="bg-white rounded-md border-t-4 border-t-fuchsia-700 mx-4 my-6 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Dropdown Box */}
          <div className="flex items-center gap-2 text-sm">
            <label className="text-gray-700 font-bold">Show</label>
            <select
              className="border rounded-sm text-gray-700 p-1"
              value={entries}
              onChange={handleEntriesChange}
            >
              <option value="all">All</option>
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span className="text-gray-700 font-bold">entries</span>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-bold">Search:</label>
            <input
              type="text"
              className="border rounded-sm p-1 text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Invoices Table */}
        <AllInvoicesTable invoices={currentEntries} />

        {/* Pagination Controls */}
        <div className="flex justify-between items-center text-sm mt-4">
          <p className="text-black">
            Showing {filteredInvoices.length > 0 ? indexOfFirstEntry + 1 : 0} to{" "}
            {Math.min(indexOfLastEntry, filteredInvoices.length)} of {filteredInvoices.length} entries
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-pointer text-gray-500 hover:underline disabled:text-gray-300"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="cursor-pointer text-gray-500 hover:underline disabled:text-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="fixed bottom-0 w-full bg-white text-gray-600 text-base p-4">
        <span className="font-bold">Copyright © 2025.</span> All rights reserved.
      </footer>
    </div>
  );
}

export default AllInvoices;
