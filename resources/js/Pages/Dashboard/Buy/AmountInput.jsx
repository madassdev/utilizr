import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

function AmountInput({ label, amount, setAmount, inputProps, error }) {
    return (
        <div className="flex flex-col space-y-2">
            <p className="">{label}</p>
            <div className="relative min-h-12">
                <input
                    className="numberInput h-full rounded-xl border border-gray-300 p-3 pl-12"
                    type="number"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                    {...inputProps}
                />
                <span className="flex items-center justify-center text-2xl text-primary absolute top-2 left-2 w-8 h-8">
                    <TbCurrencyNaira />
                </span>
                {error && <span className="text-red-500 text-xs">{error}</span>}
            </div>
        </div>
    );
}

export default AmountInput;
