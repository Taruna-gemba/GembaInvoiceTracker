import { useState, useEffect } from "react";
import ApprovedTable from "./ApprovedTable";

function Approved() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true);
      fetch("http://localhost:4000/api/invoices")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setFilteredInvoices(data); // Initialize filteredInvoices
          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetching error:", error);
          setError(error.message);
          setLoading(false);
        });
    }, []);


  // Filtering logic based on search
  useEffect(() => {
    if (!data.length) return;

    setFilteredInvoices(
      data.filter(
        (invoice) =>
          invoice.vendor_id?.toString().toLowerCase().includes(search.toLowerCase()) ||
          invoice.invoice_number?.toString().toLowerCase().includes(search.toLowerCase()) ||
          invoice.status?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  // Pagination logic
  const indexOfLastEntry = currentPage * entries;
  const indexOfFirstEntry = indexOfLastEntry - entries;
  const currentInvoices =
    entries === "all" ? filteredInvoices : filteredInvoices.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = entries === "all" ? 1 : Math.ceil(filteredInvoices.length / entries);

  return (
    <div className="flex flex-col min-h-screen bg-fuchsia-200">
      <h1 className="text-2xl p-4">Approved Invoices</h1>
      <div className="bg-white rounded-md border-t-4 border-t-fuchsia-700 mx-4 my-6 p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-2 ">
            <label className="text-gray-700 font-bold">Show</label>
            <select
              className="border rounded-sm text-gray-700 p-1"
              value={entries}
              onChange={(e) =>
                setEntries(e.target.value === "all" ? "all" : Number(e.target.value))
              }
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
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-bold">Search:</label>
            <input
              type="text"
              className="border rounded-sm p-1 text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value || "")} // Ensuring search is always a string
            />
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 mt-4">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-4">{error}</p>
        ) : (
        <ApprovedTable invoices={currentInvoices} />
          )}

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
       <footer className="mt-auto w-full bg-white text-gray-600 text-sm md:text-base p-4">
        <span className="font-bold">Copyright © 2025.</span> All rights reserved.
      </footer>
      
    </div>
  );
}

export default Approved;
