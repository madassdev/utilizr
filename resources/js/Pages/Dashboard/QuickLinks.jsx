import React from "react";
import { BsCollectionPlayFill, BsFillPhoneFill } from "react-icons/bs";
import { MdWifiTethering } from "react-icons/md";
import { GoZap } from "react-icons/go";
import { Link } from "@inertiajs/react";

function QuickLinks() {
    return (
        <div className="w-full grid grid-cols-2 gap-8 p-5">
            <Link
                href={route("dashboard.buy.airtime")}
                className="hover:scale-105 transition-all ease-in-out rounded-xl bg-teal-400 bg-opacity-20 flex flex-col p-3 space-y-4 items-center justify-center"
            >
                <BsFillPhoneFill className="text-4xl text-teal-400" />
                <p className="text-center text-xs font-bold text-gray-600">Buy Airtime</p>
            </Link>
            <Link
                href={route("dashboard.buy.data")}
                className="hover:scale-105 transition-all ease-in-out rounded-xl bg-orange-400 bg-opacity-20 flex flex-col p-3 space-y-4 items-center justify-center"
            >
                <MdWifiTethering className="text-4xl text-orange-400" />
                <p className="text-center text-xs font-bold text-gray-600">Buy Data</p>
            </Link>
            <Link
                href={route("dashboard.buy.tv")}
                className="hover:scale-105 transition-all ease-in-out rounded-xl bg-blue-400 bg-opacity-20 flex flex-col p-3 space-y-4 items-center justify-center"
            >
                <BsCollectionPlayFill className="text-4xl text-blue-400" />
                <p className="text-center text-xs font-bold text-gray-600">Tv Subscription</p>
            </Link>
            <Link
                href={route("dashboard.buy.electricity")}
                className="hover:scale-105 transition-all ease-in-out rounded-xl bg-rose-400 bg-opacity-20 flex flex-col p-3 space-y-4 items-center justify-center"
            >
                <GoZap className="text-4xl text-rose-400" />
                <p className="text-center text-xs font-bold text-gray-600">Recharge Electricity</p>
            </Link>
        </div>
    );
}

export default QuickLinks;
