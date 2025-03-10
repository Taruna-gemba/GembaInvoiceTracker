import React from 'react';

function header() {
    return (
        <div className="flex bg-orange-400 h-36 items-center ">
           <div className="text-4xl font-bold flex-1 ml-10 mt-4">
              <h1 >GEMBA</h1>
            </div> 
            <div className="flex-1 text-white text-3xl mt-4 font-bold">
              <h2>Invoice Tracking System</h2>
            </div>
        </div>
    );
}

export default header;