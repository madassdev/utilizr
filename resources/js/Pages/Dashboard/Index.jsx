import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";
import QuickLinks from "./QuickLinks";
import { easeIn, motion } from "framer-motion";

function Index() {
    return (
        <DashboardLayout>
            <div className="p-3 md:px-12 flex flex-col space-y-8">
                <div>Balances</div>

                <div className="w-full space-y-4 md:space-y-0 md:flex md:space-x-8">
                    <motion.div
                        className="flex-1 rounded-xl bg-white shadow py-2"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delayChildren: 0.5, ease:"easeInOut", duration:0.3 }}
                    >
                        {/* <DashboardPortfolio stats={portfolio_stats}/> */}
                        <div className="p-3">
                            Quick  Links
                        </div>
                        <QuickLinks />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delayChildren: 0.5, ease:"easeInOut", duration:0.3, delay:0.2 }}
                        className="md:w-[360px] rounded-xl bg-white shadow py-2"
                    >
                        {/* <HomeHistory history={history} /> */}
                        History
                    </motion.div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;
