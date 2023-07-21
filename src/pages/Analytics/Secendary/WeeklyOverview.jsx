import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
import Chart from "react-apexcharts";
import Dots from "../../../components/Geniral/Dots";

const WeeklyOverview = () => {
  const { dark } = useContext(ThemeContext);

  const LabelColors = dark ? "#E7E3FC61" : "#3A354161";

  const series = [
    {
      data: [3, 5.8, 5, 7.6, 5.8, 3, 6.5],
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
      sparkline: {
        enabled: false,
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
        if (value == 7.6) {
          return "#9155FD";
        } else {
          return "#9155FD1F";
        }
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        columnWidth: "10px",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: LabelColors,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      strokeDashArray: 5,
      padding: {
        left: 20,
        right: 10,
        bottom: 0,
        top: 0,
      },
    },
    xaxis: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: LabelColors,
        },
      },
    },
    yaxis: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tickAmount: 4,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        color: LabelColors,
        width: 5,
        offsetY: 1,
        offsetX: 3,
      },
      labels: {
        show: true,
        maxWidth: 24,
        style: {
          colors: [LabelColors],
        },
        formatter: (value) => {
          if (value == 0) return "0k";
          return `${value}0k`;
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="Box lg:col-span-4 sm:col-span-4 flex flex-col justify-between">
      <h6 className="H6 text-Light-Text-Primary dark:text-Dark-Text-Primary pb-5">
        Weekly Overview
      </h6>
      <Dots />
      <Chart type="bar" height={179} options={options} series={series} />
      <div className="flex flex-row items-center gap-5">
        <h5 className="H5">45%</h5>
        <p className="Body2 text-Light-Text-Secondary dark:text-Dark-Text-Primary ">
          Your sales performance is 45% better compared to last month
        </p>
      </div>
      <button className="mt-5 w-full uppercase Button-M text-white bg-Light-Main-Primary shadow-Light_3 dark:shadow-Dark_3 h-[38px] px-5 rounded-md">
        Details
      </button>
    </div>
  );
};

export default WeeklyOverview;
