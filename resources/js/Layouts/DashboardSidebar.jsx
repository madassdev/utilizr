import React from "react";
import { MdOutlineDashboard, MdSettingsSuggest } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { Link, usePage } from "@inertiajs/react";

function DashboardSidebar() {
    const page = usePage();
    const { app_config } = page.props;
    const prefix = "/dashboard";
    const path = page.url;
    return (
        <div className="w-full p-5 space-y-4">
            <div className="h-16 flex items-center justify-center font-bold text-primary-2 uppercase text-center p-3">
                {app_config?.app_name || "Utilizr"}
            </div>
            <hr />
            <div className="flex flex-col space-y-8 pl-12">
                <Link href={route("dashboard.index")}>
                    <div
                        className={`nav_item ${
                            path === prefix && "active_nav"
                        }`}
                    >
                        <MdOutlineDashboard className="text-2xl" />
                        <span>Dashboard</span>
                    </div>
                </Link>
                <Link href={route("dashboard.index")}>
                    <div
                        className={`nav_item ${
                            path.startsWith(prefix + "/services") &&
                            "active_nav"
                        }`}
                    >
                        <GiReceiveMoney className="text-2xl" />
                        <span>Buy</span>
                    </div>
                </Link>
                <Link href={route("dashboard.settings.index")}>
                    <div
                        className={`nav_item ${
                            path.startsWith(prefix + "/settings") &&
                            "active_nav"
                        }`}
                    >
                        <MdSettingsSuggest className="text-2xl" />
                        <span>Settings</span>
                    </div>
                </Link>
            </div>
            <hr />
        </div>
    );
}

export default DashboardSidebar;
