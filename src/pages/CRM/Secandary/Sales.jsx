import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import Dots from "../../../components/Geniral/Dots";
import Chart from "react-apexcharts";
import { BsCurrencyDollar } from "react-icons/bs";

const Sales = () => {
  const { dark } = useContext(ThemeContext);

  const hexDarkAndLight = dark ? "#474360" : "#F0F2F8";
  const hexDarkAndLight_Lable = dark ? "#E7E3FCDE" : "#3A3541DE";

  const series = [12, 25, 13, 50];

  const options = {
    labels: ["Apparel", "Electronic", "FMCG", "Other Sales"],
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    chart: {
      width: 223,
      type: "donut",
      offsetY: 0,
      parentHeightOffset: 0,
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#9155FD", "#9155FDB3", "#9155FD80", hexDarkAndLight],
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "24px ",
              fontFamily: "Inter, sans-serif",
              fontWeight: "400",
              color: hexDarkAndLight_Lable,
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "44px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "400",
              color: hexDarkAndLight_Lable,
              offsetY: -20,
              formatter: function (val) {
                return `${val}k`;
              },
            },
            total: {
              show: true,
              label: "Weekly Sales",
              color: hexDarkAndLight_Lable,
              formatter: function (w) {
                const total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return `${total}k`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="lg:col-span-6 sm:col-span-6 Box flex flex-col justify-between">
      <h1 className="Body1 !font-semibold">Sales Overview</h1>
      <Dots />
      <div className="flex sm:flex-row flex-col items-center">
        <Chart
          type="donut"
          width={223}
          height={222}
          series={series}
          options={options}
        />
        <div className="w-full">
          <div className="flex flex-row items-center gap-3">
            <div
              className={`text-Light-Main-Primary dark:text-Dark-Main-Primary p-[9px] rounded-md ${
                dark ? "Dark_Bg_Span" : "Bg_Span"
              }`}
            >
              <BsCurrencyDollar className="text-2xl " />
            </div>
            <div>
              <p className="Body2 !font-normal">Number of Sales</p>
              <h6 className="H6">$86,400</h6>
            </div>
          </div>
          <div className="w-full h-px bg-Light-Other-Divider dark:bg-Dark-Other-Divider my-4"></div>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
            <div>
              <div className="flex flex-row items-center">
                <span className="bg-[#9155FD] w-[10px] h-[10px] rounded-full mr-[6px]"></span>
                <p className="Body2">Apparel</p>
              </div>
              <h6 className="Body1 !font-semibold">$12,150</h6>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <span className="bg-[#9155FDB3] w-[10px] h-[10px] rounded-full mr-[6px]"></span>
                <p className="Body2">Electronic</p>
              </div>
              <h6 className="Body1 !font-semibold">$24,900</h6>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <span className="bg-[#9155FD80] w-[10px] h-[10px] rounded-full mr-[6px]"></span>
                <p className="Body2">FMCG</p>
              </div>
              <h6 className="Body1 !font-semibold">$12,750</h6>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <span className="dark:bg-[#474360] bg-[#F0F2F8] w-[10px] h-[10px] rounded-full mr-[6px]"></span>
                <p className="Body2">Other Sales</p>
              </div>
              <h6 className="Body1 !font-semibold">$50,200</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
