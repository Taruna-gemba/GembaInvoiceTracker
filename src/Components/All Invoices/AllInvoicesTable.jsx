import { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const AllInvoicesTable = ({ invoices }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return invoices;

    return [...invoices].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [invoices, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div className="py-4">
      <div className="overflow-x-auto bg-white rounded-md border border-gray-200">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              {[
                { key: "id", label: "Unique ID" },
                { key: "vendor_id", label: "Vendor ID" },
                { key: "contact_person", label: "Contact Person" },
                { key: "contact_no", label: "Contact No" },
                { key: "invoice_number", label: "Invoice No" },
                { key: "PurchaseOrder", label: "SO/PO No." },
                { key: "created_at", label: "Doc. Submitted Date" },
                { key: "invoice_date", label: "Invoice Date" },
                { key: "state", label: "Geography Area" },
                { key: "total", label: "Invoice Amount" },
                { key: "status", label: "Invoice Status" },
                { key: "Scanning_Status", label: "Scanning Status" },
                { key: "Posting_Status", label: "Posting Status" },
                { key: "Payment_Status", label: "Payment Status" },
                { key: "action", label: "Action", sortable: false },
              ].map(({ key, label, sortable = true }) => (
                <th
                  key={key}
                  className="p-3 text-left border-b cursor-pointer"
                  onClick={() => sortable && handleSort(key)}
                >
                  <div className="flex items-center gap-2">
                    {label} {sortable && getSortIcon(key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm text-gray-700">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.vendor_id}</td>
                  <td className="p-3">{item.contact_person}</td>
                  <td className="p-3">{item.contact_no}</td>
                  <td className="p-3">{item.invoice_number}</td>
                  <td className="p-3">{item.PurchaseOrder}</td>
                  <td className="p-3">{new Date(item.created_at).toLocaleDateString()}</td>
                  <td className="p-3">{new Date(item.invoice_date).toLocaleDateString()}</td>
                  <td className="p-3">{item.state}</td>
                  <td className="p-3">{Number(item.total).toLocaleString()}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded text-white ${
                        item.status === "Approved" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3">{item.Scanning_Status ?? "N/A"}</td>
                  <td className="p-3">{item.Posting_Status ?? "N/A"}</td>
                  <td className="p-3">{item.Payment_Status ?? "N/A"}</td>
                  <td className="p-3">
                    <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="p-3 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInvoicesTable;