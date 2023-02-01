import React from "react";

function RecipientInput({ label, recipient, inputProps, error }) {
    return (
        <div className="flex flex-col space-y-2">
            <p className="">{label}</p>
            <div className="space-y-1">
                <input
                    className="numberInput"
                    type="number"
                    value={recipient}
                    maxLength="11"
                    placeholder="11 digits"
                    {...inputProps}
                />
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        </div>
    );
}

export default RecipientInput;
