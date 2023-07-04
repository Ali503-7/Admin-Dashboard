import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../App";

const WeeklySales = () => {

  const {dark} = useContext(ThemeContext)

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
        borderRadius: 5,
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        columnWidth: "60%",
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
        left: 0,
        right: 0,
      },
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "Z"],
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      tickPlacement: 'on',
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
    <div className="sm:col-span-5 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between p-5 rounded-md relative">
      <Chart
        type="bar"
        // width={292}
        height={203}
        options={options}
        series={series}
      />
    </div>
  );
};

export default WeeklySales;
