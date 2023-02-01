import Popup from "@/Components/Popup";
import React, { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const AppContext = createContext();
export default function AppCtx({ children }) {
    const [modal, setModal] = useState({
        show: false,
    });
    const app_config = children?.props?.initialPage?.props?.app_config;

    const closeModal = (val) => {
        setModal({ show: false });
        if (modal.reloadOnClose) {
            window.location.reload;
        }
    };

    return (
        <AppContext.Provider
            value={{
                modal,
                setModal,
                closeModal,
                app_config,
            }}
        >
            <Toaster />
            {children}
            <Popup/>
        </AppContext.Provider>
    );
}
