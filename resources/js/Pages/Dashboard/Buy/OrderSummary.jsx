import Spinner from "@/Components/Spinner";
import { RadioGroup, Switch } from "@headlessui/react";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PinInput from "react-pin-input";

function OrderSummary({ order, onProceed }) {
    const [enabled, setEnabled] = useState(false);
    const [pin, setPin] = useState();
    const [showPin, setShowPin] = useState(false);
    const [pinDone, setPinDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleProceed = () => {
        setLoading(true);
        onProceed({ ...order, pin });
    };

    return (
        <div className="p-5 flex flex-col space-y-4 items-center">
            <p className="">Order Summary</p>

            <div className="w-full bg-gray-100 text-gray-500 text-xs rounded-xl p-3 grid grid-cols-2 gap-y-2">
                <p>Product:</p>
                <div className="flex items-center justify-end space-x-2">
                    <img
                        src={order.product.provider.logo}
                        className="w-6 h-6 rounded-xl"
                    />
                    <p className="text-right text-black">
                        {order.product.name}
                    </p>
                </div>
                <p>Amount:</p>
                <p className="text-right text-black">{naira(order.amount)}</p>
                <p>Beneficiary:</p>
                <p className="text-right text-black">{order.recipient}</p>
                <p>Fee:</p>
                <p className="text-right text-black">
                    {naira(order?.fee || 0)}
                </p>
                <hr className="col-span-2 border-dashed border-primary opacity-50 " />
                <p>Total:</p>
                <p className="text-right font-bold text-primary text-xl">
                    {naira(order.amount)}
                </p>
            </div>

            <div className="space-y-2 w-full">
                <div className="flex items-center space-x-2 justify-center">
                    <span>Enter PIN</span>
                    <span
                        onClick={() => setShowPin(!showPin)}
                        className="w-8 h-8 rounded-xl text-primary flex items-center justify-center cursor-pointer bg-primary bg-opacity-10"
                    >
                        {showPin ? <BsEyeSlash /> : <BsEye />}
                    </span>
                </div>
                <PinInput
                    disabled={loading}
                    length={4}
                    initialValue={pin}
                    secret={!showPin}
                    autoFocus={true}
                    onChange={(value, index) => {
                        setPin(value);
                        if (value.toString().length != 4) {
                            setPinDone(false);
                        }
                        // setPinError("");
                    }}
                    type="numeric"
                    inputMode="number"
                    style={{
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                    inputStyle={{
                        borderColor: "#999",
                        borderRadius: "5px",
                        margin: "0px 4px",
                        height: "50px",
                        width: "50px",
                    }}
                    inputFocusStyle={{ borderColor: "#854fff" }}
                    onComplete={(value, index) => {
                        setPinDone(true);
                        setPin(value);
                    }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
            </div>

            {pinDone ? (
                <>
                    {loading ? (
                        <button
                            className="btn bg-primary w-full bg-opacity-70"
                            onClick={() => {}}
                        >
                            <Spinner color="text-white" />
                        </button>
                    ) : (
                        <button
                            className="btn bg-primary text-white w-full"
                            onClick={handleProceed}
                        >
                            <span>Pay {naira(order.amount)}</span>
                        </button>
                    )}
                </>
            ) : (
                <button
                    className="btn bg-gray-300 text-gray-600 w-full"
                    disabled={true}
                >
                    Pay {naira(order.amount)}
                </button>
            )}

            {/* <div className="flex items-center justify-between w-full">
                <p className="text-xs">Save Beneficiary</p>

                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-primary" : "bg-gray-300"}
          relative inline-flex h-[16px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-4" : "translate-x-0"
                        }
            pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div> */}
        </div>
    );
}

export default OrderSummary;
