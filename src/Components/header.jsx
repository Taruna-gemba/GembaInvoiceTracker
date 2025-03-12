import React from 'react';

function Header() {
    return (
        <div className="flex flex-col md:flex-row bg-orange-400 h-auto md:h-36 items-center text-center md:text-left p-4">
            <div className="text-3xl md:text-4xl font-bold flex-1 md:ml-10 my-2">
                <h1>GEMBA</h1>
            </div>
            <div className="flex-1 text-white text-2xl md:text-3xl my-2 font-bold">
                <h2>Invoice Tracking System</h2>
            </div>
        </div>
    );
}

export default Header;
