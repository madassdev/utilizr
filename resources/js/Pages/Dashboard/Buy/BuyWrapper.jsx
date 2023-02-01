import React from "react";

function BuyWrapper({ children, label }) {
    return (
        <div className="p-3 md:px-12 flex flex-col">
            <div className="rounded-xl p-3 md:p-8 shadow w-full md:w-2/3 mx-auto bg-white flex flex-col space-y-8 min-h-[80vh]">
                <div>
                    <p className="font-bold">{label}</p>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BuyWrapper;
