import { AppContext } from "@/context/AppContext";
import useEscape from "@/hooks/useEscape";
import React, { useCallback, useContext, useEffect } from "react";
import { BiX } from "react-icons/bi";
import "./popup.css";
import { AnimatePresence, motion } from "framer-motion";

function Popup() {
    const { modal, closeModal } = useContext(AppContext);
    useEscape(() => {
        if (!modal.noClose) {
            closeModal();
        }
    }, [modal]);
    function handleClose() {
        if (modal.reloadOnClose === true) {
            window.location.reload();
            closeModal();
        } else {
            closeModal();
        }
    }
    return (
        <AnimatePresence>
            {modal.show && (
                <motion.div
                    className="modal__container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", }}
                        exit={{ opacity: 0, y: 500 }}
                        className={`max-w-[600px] ${
                            modal.size || "md:w-[80vw] md:max-w-[80vw]"
                        } rounded-2xl relative
                    flex flex-col my-16 md:my-32 mx-8 md:mx-auto ${
                        modal.transparent ? "bg-transparent" : "bg-white"
                    }`}
                    >
                        <div className="p-3">{modal.content}</div>
                        {modal.noClose ? (
                            <></>
                        ) : (
                            <div
                                className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow bg-white -top-12 right-2 cursor-pointer"
                                onClick={handleClose}
                            >
                                <BiX />
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Popup;
