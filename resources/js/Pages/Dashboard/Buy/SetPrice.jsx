import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";

function SetPrice({ product, proceed, price, setPrice }) {
    const [prices, setPrices] = useState([100, 200, 500, 1000, 2000, 5000]);
    const [showInput, setShowInput] = useState(false);
    function proceedPrice() {
        console.log({ price, max: product.max_price });
        if (price < product.min_price) {
            toast.error(
                "Please enter amount greater than or equal to " + naira(product.min_price),
                {
                    position: "bottom-right",
                }
            );
            return;
        }
        if (price > product.max_price) {
            toast.error("Please enter amount less than or equal to " + naira(product.max_price), {
                position: "bottom-right",
            });
            return;
        }
        proceed(price);
    }
    return (
        <div className="space-y-4">
            <p>Amount</p>
            <div className="w-full md:max-w-md grid grid-cols-3 gap-4 items-center">
                {prices.map((p) => (
                    <div
                        className={`p-2 inline-flex items-center justify-center cursor-pointer font-bold rounded-xl ${
                            p == price
                                ? "bg-blue-100 text-primary "
                                : " bg-white border border-blue-100 text-primary"
                        }`}
                        onClick={() => setPrice(p)}
                    >
                        {naira(p)}
                    </div>
                ))}
                {showInput ? (
                    <div className="col-span-3">
                        <p className="text-xs text-gray-400 mb-1">
                            Enter amount between {naira(product.min_price)} and{" "}
                            {naira(product.max_price)}
                        </p>
                        <input
                            className="w-full rounded-xl border border-gray-300 p-3 font-bold text-primary"
                            min={product.min_price}
                            max={product.max_price}
                            type="number"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </div>
                ) : (
                    <button
                        className="font-bold text-primary"
                        onClick={() => setShowInput(true)}
                    >
                        Other?
                    </button>
                )}
            </div>

            <hr />
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold text-gray-400">Total:</p>
                    <p className="font-bold text-2xl text-primary">
                        {naira(price || 0)}
                    </p>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    <button
                        className="rounded-xl p-2 px-4 text-primary font-bold flex items-center space-x-2 ease-in transition-all hover:scale-105"
                        onClick={() => setStep(1)}
                    >
                        <BiArrowBack />
                        <span>Back</span>
                    </button>
                    <button
                        className="bg-primary text-white rounded-xl p-2 px-4"
                        onClick={proceedPrice}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SetPrice;
