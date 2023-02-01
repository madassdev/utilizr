import DashboardLayout from "@/Layouts/DashboardLayout";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SetPrice from "./SetPrice";
import { AppContext } from "@/context/AppContext";
import { TbCurrencyNaira } from "react-icons/tb";
import OrderSummary from "./OrderSummary";
import BuyWrapper from "./BuyWrapper";
import SelectProvider from "./SelectProvider";
import RecipientInput from "./RecipientInput";
import AmountInput from "./AmountInput";
import { toast } from "react-hot-toast";
import { validatePhone, validateRange } from "@/utils/validators";

function Airtime({ airtime_products }) {
    const { setModal } = useContext(AppContext);
    const [selectedProduct, setSelectedProduct] = useState();
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({
        amount: false,
        recipient: false,
    });

    const handleProceed = (e) => {
        const order = {
            product: selectedProduct,
            amount,
            type: "airtime",
        };
        setModal({
            show: true,
            size: "w-full md:w-[30rem]",
            content: <OrderSummary order={order} onProceed={processOrder} />,
        });
    };

    const validate = (e) => {
        e.preventDefault();
        const vPhone = validatePhone(recipient);
        const vAmount = validateRange(
            amount,
            selectedProduct.min_price,
            selectedProduct.max_price
        );
        let err = false;
        if (!vPhone.valid) {
            err = true;
        }

        if (!vAmount.valid) {
            err = true;
        }
        if (err) {
            setErrors({ amount: vAmount.error, recipient: vPhone.error });
            return;
        } else {
            handleProceed();
        }
    };

    const processOrder = (order) => {
        console.log(order);
        Inertia.post();
    };

    const validateRecipient = (number = recipient) => {
        const validation = validatePhone(number);
        if (validation.valid) {
            setErrors({ ...errors, recipient: false });
        } else {
            setErrors({ ...errors, recipient: validation.error });
        }
    };

    const validateAmount = () => {
        const validation = validateRange(
            amount,
            selectedProduct.min_price,
            selectedProduct.max_price
        );
        if (validation.valid) {
            setErrors({ ...errors, amount: false });
        } else {
            setErrors({ ...errors, amount: validation.error });
        }
    };

    const handleRecipientChanged = (e) => {
        if (e.target.value.toString().length <= 11) {
            setRecipient(e.target.value);
            // validateRecipient(e.target.value);
        }
    };
    return (
        <DashboardLayout>
            <BuyWrapper label={"Buy Airtime"}>
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <SelectProvider
                        products={airtime_products}
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />
                </motion.div>
                {selectedProduct ? (
                    <>
                        <hr />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className=""
                        >
                            <form
                                onSubmit={validate}
                                className="flex flex-col space-y-4"
                            >
                                <RecipientInput
                                    label="Recipient number"
                                    recipient={recipient}
                                    setRecipient={setRecipient}
                                    error={errors.recipient}
                                    inputProps={{
                                        onBlur: (e) => validateRecipient(),
                                        onChange: handleRecipientChanged,
                                    }}
                                />
                                <AmountInput
                                    amount={amount}
                                    setAmount={setAmount}
                                    error={errors.amount}
                                    label="Amount"
                                    inputProps={{
                                        min: selectedProduct.min_price,
                                        max: selectedProduct.max_price,
                                        onBlur: (e) => validateAmount(),
                                        placeholder: `${parseFloat(
                                            selectedProduct.min_price
                                        )}-${selectedProduct.max_price}`,
                                    }}
                                />

                                <button
                                    className="btn w-full bg-primary text-white"
                                    onClick={validate}
                                >
                                    Continue
                                </button>
                            </form>
                        </motion.div>
                    </>
                ) : null}
            </BuyWrapper>
        </DashboardLayout>
    );
}

export default Airtime;
