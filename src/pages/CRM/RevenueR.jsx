import React, { Component } from "react";
import Chart from "react-apexcharts";

class Revenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Earning",
          data: [1, 2, 3, 2.7, 0.7, 0.3, 2.9, 1.5, 0.4],
        },
        {
          name: "Expense",
          data: [-1.5, -1.2, -1.5, -1, -0.7, -0.3, -0.6, -0.5, -0.8],
        },
      ],
      options: {
        chart: {
          type: "bar",
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: ["#56CA00", "#8A8D93"],
        plotOptions: {
          bar: {
            borderRadius: 9,
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "all",
            columnWidth: "120%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 9,
          colors: ["#fff"],
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
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="col-span-4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between p-5 pb-0 rounded-md relative">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={300}
        />
      </div>
    );
  }
}

export default Revenue;
