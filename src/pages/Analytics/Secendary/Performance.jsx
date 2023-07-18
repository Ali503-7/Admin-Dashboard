import React, { useContext } from "react";
import Dots from "../../../components/Geniral/Dots";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../App";

const Performance = () => {
  const { dark } = useContext(ThemeContext);
  const LabelColors = dark ? "#E7E3FC61" : "#3A354161";

  const series = [
    {
      name: "Net Worth",
      data: [4, 4.5, 4.5, 4.5, 3.5, 4.5],
    },
    {
      name: "Income",
      data: [5, 3.8, 4.5, 3.8, 4.5, 3.8],
    },
  ];
  const options = {
    chart: {
      type: "radar",
      offsetX: -50,
      offsetY: 0,
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#16B1FF", "#9155FD"],
    stroke: {
      width: 0,
    },
    fill: {
      opacity: 0.9,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      show: false,
    },
    grid: {
      yaxis: {
        show: false,
      },
    },
    legend: {
      labels: {
        colors: LabelColors,
      },
    },
  };

  return (
    <div className="Box sm:col-span-4">
      <h3 className="H6 pb-5">Performance</h3>
      <Dots />
      <div>
        <Chart
          options={options}
          series={series}
          type="radar"
          width={400}
          height={250}
        />
      </div>
    </div>
  );
};

export default Performance;