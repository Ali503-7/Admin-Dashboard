import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../App";
import Dots from "../../../components/Geniral/Dots";
import { AiOutlineRise } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

const WeeklySales = () => {
  const { dark } = useContext(ThemeContext);

  const LabelColors = dark ? "#E7E3FCAD" : "#3A354199";

  const series = [
    {
      data: [8, 13, 10, 13, 19, 7, 9],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      offsetX: 0,
      offsetY: 0,
      parentHeightOffset: 0,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0.35,
        },
      },
    },

    colors: [
      function ({ value }) {
        if (value == 19) {
          return "#9155FD";
        } else {
          return "#9155FD1F";
        }
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        columnWidth: "80%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "Z"],
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      tickPlacement: "on",
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: LabelColors,
        },
      },
    },
    yaxis: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="lg:col-span-4 sm:col-span-5  bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between p-5 rounded-md relative">
      <div>
        <h1 className="H6 text-Light-Text-Primary dark:text-Dark-Text-Primary !font-semibold">
          Weekly Sales
        </h1>
        <p className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary">
          Total 85.4k Sales
        </p>
      </div>

      <Dots />
      <Chart type="bar" height={203} options={options} series={series} />
      <div className="flex flex-row justify-center gap-[50px] items-center">
        <div className="flex flex-row items-center">
          <div
            className={`text-Light-Main-Primary dark:text-Dark-Main-Primary text-[24px] p-[9px] mr-4 rounded-md ${
              dark ? "Dark_Bg_Primary" : "Bg_Custom_primary"
            }`}
          >
            <AiOutlineRise className="text-2xl" />
          </div>
          <div>
            <h3 className="Body1 !font-semibold">34.6k</h3>
            <p className="Caption">Sales</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div
            className={`text-Light-Main-Success dark:text-Dark-Main-Success text-[24px] p-[9px] mr-4 rounded-md ${
              dark ? "Dark_Custom_Success" : "Bg_Custom_Success"
            }`}
          >
            <BsCurrencyDollar className="text-2xl" />
          </div>
          <div>
            <h3 className="Body1 !font-semibold">$482k</h3>
            <p className="Caption">Total Profit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySales;
