import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../../../App";
const Box_1 = () => {
  const { dark } = useContext(ThemeContext);

  const Colors = dark ? "#312D4B" : "#FFFFFF";
  const LabelColors = dark ? "#E7E3FC61" : "#3A354161";

  const series = [
    {
      name: "series2",
      data: [0, 15, 5, 20, 10, 30],
    },
  ];
  const options = {
    chart: {
      // height: 500,
      type: "line",
      stacked: true,
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },


    colors: ["#9155FD"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
    },
    annotations: {
      points: [
        {
          x: 6,
          y: 30,
          marker: {
            strokeWidth: 4,
            size: 6,
            fillColor: Colors,
            strokeColor: "#9155FD",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
        },
      ],
    },
    grid: {
      show: true,
      borderColor: LabelColors,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      strokeDashArray: 5,
      padding: {
        top: 5,
        right: 9,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      tickPlacement: "on",
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        maxHeight: 0,
      },
      axisTicks: {
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
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="Box col-span-1 row-span-1 flex justify-between flex-col gap-4">
      <h6 className="H6">$86.4k</h6>
      <Chart options={options} series={series} type="line" />
      <p className="Body2 !font-semibold self-center">Total Profit</p>
    </div>
  );
};

export default Box_1;
