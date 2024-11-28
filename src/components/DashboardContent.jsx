import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheck,
  faUsers,
  faUserCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { TrendingUp } from "lucide-react";
import SalesChart from "./SalesChart";
import SalesByCountry from "./SalesByCountry";
import Categories from "./Categories";
import Footer from "./Footer";

const DashboardContent = () => {
  return (
    <div className="pt-2 flex-grow left-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="money-box bg-white p-4 rounded-2xl shadow-md min-h-28">
          <div className="w-full lg:w-auto xl:w-auto px-1">
            <div className="flex justify-between items-start gap-3">
              <div className="box-text tracking-tight leading-none w-full space-y-2 xl:space-y-1">
                <p className="font-semibold text-zinc-500 text-base md:text-[2.5vw] lg:text-[1.1vw] xl:text-[1.1vw] whitespace-nowrap">
                  TODAY'S MONEY
                </p>
                <h1 className="font-bold text-xl text-slate-900">$ 53,000</h1>
                <p className="text-xl mt-1 md:mt-7 text-slate-500">
                  <span className="text-green-500 font-bold">+55%</span> since{" "}
                  yesterday
                </p>
              </div>
              <div className="box-icon flex items-start justify-start">
                <FontAwesomeIcon
                  icon={faMoneyCheck}
                  style={{ color: "#133E87" }}
                  size="2x"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user-box bg-white p-4 rounded-2xl shadow-md min-h-28">
          <div className="w-full lg:w-auto xl:w-auto">
            <div className="flex justify-between items-start gap-3">
              <div className="box-text tracking-tight leading-none w-full space-y-2">
                <p className="font-semibold text-zinc-500 text-base md:text-[2.5vw] lg:text-[1.1vw] xl:text-[1.1vw]">
                  TODAY'S USERS
                </p>
                <h1 className="font-bold text-2xl text-slate-900">2,300</h1>
                <p className="text-xl mt-2 md:mt-7 text-slate-500">
                  <span className="text-green-500 font-bold">+3%</span> since{" "}
                  last week
                </p>
              </div>
              <div className="box-icon flex items-start justify-start">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  style={{ color: "#FF4545" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="client-box bg-white p-4 rounded-2xl shadow-md min-h-28">
          <div className="w-full lg:w-auto xl:w-auto">
            <div className="flex justify-between items-start gap-3">
              <div className="box-text tracking-tight leading-none w-full space-y-2">
                <p className="font-semibold text-zinc-500 text-base md:text-[2.5vw] lg:text-[1.1vw] xl:text-[1.1vw]">
                  TODAY'S CLIENTS
                </p>
                <h1 className="font-bold text-2xl text-slate-900">+3,462</h1>
                <p className="text-xl mt-2 md:mt-7 text-slate-500">
                  <span className="text-red-500 font-bold">-2%</span> since last{" "}
                  week
                </p>
              </div>
              <div className="box-icon flex items-start justify-start">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  style={{ color: "#7ED4AD" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sales-box bg-white p-4 rounded-2xl shadow-md min-h-28">
          <div className="w-full lg:w-auto xl:w-auto">
            <div className="flex justify-between items-start gap-3">
              <div className="box-text tracking-tight leading-none w-full space-y-2">
                <p className="font-semibold text-zinc-500 text-base md:text-[2.5vw] lg:text-[1.2vw] xl:text-[1.2vw] uppercase">
                  SALES
                </p>
                <h1 className="font-bold text-2xl text-slate-900">$103,430</h1>
                <p className="text-xl mt-2 md:mt-7 text-slate-500">
                  <span className="text-green-500 font-bold">+5%</span> than
                  last month
                </p>
              </div>
              <div className="box-icon flex items-start justify-start bg-[#FF4545] p-4 rounded-full">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="1x"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sales-chart */}
      <div className="min-h-full bg-gray-50 p-8 rounded-2xl">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">
                Sales Overview
              </h1>
              <div className="flex items-center gap-2 text-emerald-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">4% more</span>
                <span className="text-gray-500">in 2021</span>
              </div>
            </div>

            <SalesChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between my-5 ">
        <SalesByCountry />
        <Categories />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardContent;
