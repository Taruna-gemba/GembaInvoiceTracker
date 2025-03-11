import React,{useState} from 'react';


function NewBill() {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('File', selectedFile);
        handleFileChange();
    };
    return (
        <div className="h-auto bg-fuchsia-200">
            <h1 className="text-2xl p-4">Add New Invoices</h1>
            <br></br>
            <form class="max-w-4xl mx-auto bg-white p-8 rounded-sm shadow-lg border-t-4 border-fuchsia-700 overflow-y-auto h-96">
  <div class="grid grid-cols-1 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Vendor Type <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Invoice Type <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
        <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Invoice No <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
        <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Material (PO) No <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Doc Submit Date <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Geographical Area <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Department <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Preferred GA User <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>

    <div class="grid grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Invoice Date <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="date" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Invoice Amount <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Type of Submission <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Delivery At <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Remarks <span class="text-red-500">*</span> <span class="text-gray-500" title="Required field">ℹ️</span></label>
      <input type="text" required class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500"/>
    </div>
  </div>
  <br></br>
  <p className="font-bold">Note: File Formats Allowed pdf, jpeg, jpg, xls, docx, xlsx with maximum file size 10MB</p>
  <br></br>
  <hr></hr>
  <br></br>
  <div className="grid grid-cols-2 gap-4">
        <input type="file" onChange={handleFileUpload} className="hidden" id="fileInput" />
        <label htmlFor="fileInput" className="bg-gray-300 text-black rounded-lg px-4 py-2 cursor-pointer">Choose File</label>
        <input type="text" placeholder="Document Description" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500" />
    </div>
    {selectedFile && <p>{selectedFile.name}</p>}
  <br></br>
  <hr></hr>
  <div class="flex justify-end space-x-4 mt-6">
    <button type="button" class="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">Save as Draft</button>
    <button type="submit" class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Submit</button>
    <button type="button" class="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400">Cancel</button>
  </div>
</form>
     <footer className="fixed bottom-0 w-full bg-white text-gray-600 text-base p-4">
        <span className="font-bold">Copyright © 2025.</span> All rights reserved.
      </footer>

</div>



            

    );
}

export default NewBill;
