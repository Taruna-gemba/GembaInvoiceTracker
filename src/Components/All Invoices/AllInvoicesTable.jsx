import {useState} from 'react';
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const AllInvoicesTable = () => {
  const [data, setData] = useState("");
 
   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
 
   const handleSort = (key) => {
     let direction = "asc";
     if (sortConfig.key === key && sortConfig.direction === "asc") {
       direction = "desc";
     }
     setSortConfig({ key, direction });
 
     // Sort data
     const sortedData = [...data].sort((a, b) => {
       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
       return 0;
     });
 
     setData(sortedData);
   };
 
   const getSortIcon = (key) => {
     if (sortConfig.key === key) {
       return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
     }
     return <FaSort />;
   };
 
   return (
     <div className="py-4">
       <div className="overflow-x-auto bg-white">
         <table className="w-full border">
           {/* Table Head */}
           <thead>
             <tr className="bg-gray-100 text-gray-700 text-sm">
               {[
                 { key: "id", label: "Unique ID" },
                 { key: "vendorCode", label: "Vendor Code" },
                 { key: "companyName", label: "Company Name" },
                 { key: "invoiceNo", label: "Invoice No" },
                 { key: "soPoNo", label: "SO/PO No." },
                 { key: "docDate", label: "Doc. Submitted Date" },
                 { key: "invoiceDate", label: "Invoice Date" },
                 { key: "geography", label: "Geography Area" },
                 { key: "amount", label: "Invoice Amount" },
                 { key: "status", label: "Invoice Status" },
                 { key: "Scanning_status", label: "Scanning Status"},
                 { key: "Posting_status", label: "Posting Status"},
                 { key: "Payment_status", label: "Payment Status"},
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
             {data.length > 0 ? (
               data.map((item, index) => (
                 <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                   <td className="p-3">{item.id}</td>
                   <td className="p-3">{item.vendorCode}</td>
                   <td className="p-3">{item.companyName}</td>
                   <td className="p-3">{item.invoiceNo}</td>
                   <td className="p-3">{item.soPoNo}</td>
                   <td className="p-3">{item.docDate}</td>
                   <td className="p-3">{item.invoiceDate}</td>
                   <td className="p-3">{item.geography}</td>
                   <td className="p-3">${item.amount.toLocaleString()}</td>
                   <td className="p-3">
                     <span
                       className={`px-3 py-1 rounded text-white ${
                         item.status === "Approved"
                           ? "bg-green-500"
                           : "bg-yellow-500"
                       }`}
                     >
                       {item.status}
                     </span>
                   </td>
                   <td>{item.Scanning_status}</td>
                   <td>{item.Posting_status}</td>
                   <td>{item.Payment_status}</td>
                   <td className="p-3">
                     <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                       View
                     </button>
                   </td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan="11" className="p-3 text-center text-gray-500">
                   No data available in table
                 </td>
               </tr>
             )}
           </tbody>
         </table>
       </div>
     </div>
   );

}

export default AllInvoicesTable;

