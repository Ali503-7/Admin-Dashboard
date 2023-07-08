import Chart from "react-apexcharts";
import { MdCardTravel } from "react-icons/md";
import Dots from "../../../components/Geniral/Dots";

const DobbleBox = () => {
  const series = [
    {
      name: "series2",
      data: [0, 10, 5, 20, 10, 25, 22],
    },
  ];
  const options = {
    chart: {
      height: 500,
      type: "area",
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
        enabled: true,
      },
    },
    colors: ["#56CA00"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
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
      show: false,
      offsetX: 0,
      offsetY: 0,
      format: undefined,
      tickPlacement: "on",
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
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
    <div className="sm:col-span-2 flex flex-col gap-6 justify-between">
      {/* box-1 */}

      <div className="sm:col-span-2 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col gap-4 justify-between p-5 rounded-md relative">
        <h1 className="H6">42.5k</h1>
        <Chart type="area" height={60} options={options} series={series} />
        <p className="Body2 !font-semibold self-center">Total Growth</p>
      </div>

      {/* box-2 */}

      <div className="sm:col-span-2 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col p-5 rounded-md relative h-1/2">
        <Dots />
        <div className=" w-10 h-10 flex items-center justify-center rounded-full text-[#fff] bg-Light-Main-Primary mb-5">
          <MdCardTravel className=" text-[26px]" />
        </div>
        <div>
          <p className="Body2 !font-semibold">New Project</p>
          <div className="flex items-center gap-2">
            <p className="H6">862</p>
            <span className="Caption text-Light-Main-Error dark:text-Dark-Main-Error">
              -18%
            </span>
          </div>
          <p className="Caption text-Light-Text-Secondary dark:text-Dark-Text-Primary">
            Yearly Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default DobbleBox;
