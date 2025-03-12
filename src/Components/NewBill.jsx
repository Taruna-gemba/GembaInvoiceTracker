import React, { useState } from "react";

function NewBill() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    handleFileChange();
  };
  return (
    <div className="flex flex-col min-h-screen bg-fuchsia-200">
      <h1 className="text-2xl p-4">Add New Invoices</h1>
     
      <form className="max-w-4xl bg-white mx-4 md:my-6 p-6 md:p-12 rounded-md border-t-4 border-t-fuchsia-700 overflow-y-auto h-96">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vendor Type <span className="text-red-500">*</span>
              <span className="text-gray-500" title="Required field">
                ℹ️
              </span>
            </label>
            <input
              type="text"
              required
              className="w-full md:w-1/2 p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Type <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice No <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Material (PO) No <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Doc Submit Date <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Geographical Area <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred GA User <span className="text-red-500">*</span>
              <span className="text-gray-500" title="Required field">
                ℹ️
              </span>
            </label>
            <input
              type="text"
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Date <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="date"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Invoice Amount <span className="text-red-500">*</span>
                <span className="text-gray-500" title="Required field">
                  ℹ️
                </span>
              </label>
              <input
                type="text"
                required
                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type of Submission <span className="text-red-500">*</span>
              <span className="text-gray-500" title="Required field">
                ℹ️
              </span>
            </label>
            <input
              type="text"
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery At <span className="text-red-500">*</span>
              <span className="text-gray-500" title="Required field">
                ℹ️
              </span>
            </label>
            <textarea
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Remarks <span className="text-red-500">*</span>
              <span className="text-gray-500" title="Required field">
                ℹ️
              </span>
            </label>
            <textarea
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <br></br>
        <p className="font-bold">
          Note: File Formats Allowed pdf, jpeg, jpg, xls, docx, xlsx with
          maximum file size 10MB
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-gray-300 text-black rounded-lg px-4 py-2 cursor-pointer"
          >
            Choose File
          </label>
          <input
            type="text"
            placeholder="Document Description"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {selectedFile && <p>{selectedFile.name}</p>}
        <br></br>
        <hr></hr>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
      <footer className="mt-auto w-full bg-white text-gray-600 text-sm md:text-base p-4">
        <span className="font-bold">Copyright © 2025.</span> All rights
        reserved.
      </footer>
    </div>
  );
}

export default NewBill;
