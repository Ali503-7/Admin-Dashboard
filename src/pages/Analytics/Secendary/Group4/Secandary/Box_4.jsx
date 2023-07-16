import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../../../App";
const Box_4 = () => {
  const { dark } = useContext(ThemeContext);

  const Colors = dark ? "#312D4B" : "#FFFFFF";
  const LabelColors = dark ? "#E7E3FC61" : "#3A354161";

  const series = [
    {
      data: [3, 8, 6, 5, 7],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      stacked: false,
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      function ({ value }) {
        if (value == 3 || value == 6) {
          return "#FF4C51";
        } else {
          return "#9155FD";
        }
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 3,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        columnWidth: "6px",
        distributed: true,
      },
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
        right: 3,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
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
        show: false,
      },
      labels: {
        show: false,
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="Box col-span-1 row-span-1 flex justify-between flex-col gap-4">
      <h6 className="H6">2,856</h6>
      <Chart options={options} series={series} type="bar" />
      <p className="Body2 !font-semibold self-center">Sessions</p>
    </div>
  );
};

export default Box_4;
