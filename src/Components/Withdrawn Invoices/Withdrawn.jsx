import { useState } from "react";
import WithdrawnTable from "./WithdrawnTable";

function Withdrawn() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  // Handle dropdown changes
  const handleEntriesChange = (e) => {
    const value = e.target.value === "all" ? "all" : Number(e.target.value);
    setEntries(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fuchsia-200">
      {/* Header */}
      <h1 className="text-2xl p-4">Withdraw Invoices From GA</h1>

      {/* Main Content */}
      <div className=" bg-white rounded-md border-t-4 border-t-fuchsia-700 mx-4 my-6 p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Dropdown Box */}
          <div className="flex items-center gap-2 ">
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

        {/* Pass `entries` as a prop to WithdrawnTable */}
        <WithdrawnTable entries={entries} search={search} />

        {/* Pagination */}
        <div className="flex justify-between items-center text-sm mt-4">
          <p className="text-black">Showing 0 to 0 of 0 entries</p>
          <div className="flex gap-4">
            <p className="cursor-pointer text-gray-500 hover:underline">
              Previous
            </p>
            <p className="cursor-pointer text-gray-500 hover:underline">Next</p>
          </div>
        </div>
      </div>

      {/* Responsive Footer */}
      <footer className="mt-auto bg-white text-gray-600 md:text-base text-sm p-4 w-full">
        <span className="font-bold">Copyright © 2025.</span> All rights reserved.
      </footer>
    </div>
  );
}

export default Withdrawn;
