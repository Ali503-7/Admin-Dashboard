import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../App";
import Dots from "./Dots";

class Revenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Earning",
          data: [2.5, 3.5, 5, 4.5, 4, 2.5, 3.5, 4, 2.7],
        },
        {
          name: "Expense",
          data: [-4.8, -3.5, -2.5, -4.8, -4, -2.5, -2, -2, -2.5],
        },
      ],
      options: {
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
        chart: {
          type: "bar",
          height: 140,
          width: 100,
          stacked: true,
          offsetX: 0,
          offsetY: 0,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          events: {
            mouseMove: undefined,
          },
        },
        colors: ["#56CA00", "#8A8D93"],
        plotOptions: {
          bar: {
            borderRadius: 8,
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "all",
            columnWidth: "125%",
          },
        },
        stroke: {
          width: 9,
          colors: [],
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
          strokeDashArray: 0,
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
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
        },
        xaxis: {
          labels: {
            show: false,
          },
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
      },
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          // Update the labels style based on the context value
          const labelsStyle = {
            colors: context.dark ? "#E7E3FCAD" : "#3A354199",
          };

          const strockC = context.dark ? ["#312D4B"] : ["#ffffff"];

          // Update the options object with the updated labels style
          const updatedOptions = {
            ...this.state.options,
            legend: {
              ...this.state.options.legend,
              labels: {
                ...this.state.options.xaxis.labels,
                colors: labelsStyle,
              },
            },
            stroke: {
              ...this.state.options.stroke,
              colors: strockC,
            },
          };
          return (
            <div className="sm:col-span-4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between p-5 rounded-md relative">
              <div className="Body1 !font-semibold">Revenue Report</div>
              <Dots />
              <Chart
                options={updatedOptions}
                series={this.state.series}
                type="bar"
                height={240}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Revenue;
