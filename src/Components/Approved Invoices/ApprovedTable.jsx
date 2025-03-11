import {useState, useMemo} from 'react';
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const ApprovedTable = ( {invoices = [] } ) => {
 
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
   
     // Ensure invoices is always an array before filtering
     const approvedInvoices = useMemo(() => {
       if (!Array.isArray(invoices)) return [];  // Prevent errors
       return invoices.filter((invoice) => invoice.status === "Approved");
     }, [invoices]);
   
     // Sorting logic
     const sortedData = useMemo(() => {
       if (!Array.isArray(approvedInvoices) || approvedInvoices.length === 0) return [];
   
       if (!sortConfig.key) return approvedInvoices;
   
       return [...approvedInvoices].sort((a, b) => {
         if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
         if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
         return 0;
       });
     }, [approvedInvoices, sortConfig]);
   
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
                  <td className="p-3">{item.id ?? "N/A"}</td>
                  <td className="p-3">{item.vendor_id ?? "N/A"}</td>
                  <td className="p-3">{item.contact_person ?? "N/A"}</td>
                  <td className="p-3">{item.contact_no ?? "N/A"}</td>
                  <td className="p-3">{item.invoice_number ?? "N/A"}</td>
                  <td className="p-3">{item.PurchaseOrder ?? "N/A"}</td>
                  <td className="p-3">{item.created_at ? new Date(item.created_at).toLocaleDateString() : "N/A"}</td>
                  <td className="p-3">{item.invoice_date ? new Date(item.invoice_date).toLocaleDateString() : "N/A"}</td>
                  <td className="p-3">{item.state ?? "N/A"}</td>
                  <td className="p-3">{item.total ? Number(item.total).toLocaleString() : "N/A"}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded text-white bg-green-500">
                      {item.status ?? "N/A"}
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
                <td colSpan="15" className="p-3 text-center text-gray-500">
                  No Approved invoices found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedTable;