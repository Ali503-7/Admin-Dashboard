import React, { Component } from "react";
import Chart from "react-apexcharts";
import Dots from "./Dots";
import { ThemeContext } from "../../App";

class TotalSales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [5, 90, 10, 80, 50, 150],
        },
      ],
      options: {
        chart: {
          height: 600,
          type: "line",
          offsetX: 0,
          offsetY: 0,
          stacked: true,
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#ffffff"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 5,
          curve: "smooth",
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
          show: false,
        },
        xaxis: {
          categories: ["Jan", "Fed", "Mar", "Apr", "May", "Jun"],
          axisBorder: {
            show: false,
          },
          labels: {
            style: {},
          },
        },
        tooltip: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#6AD01F"],
            type: "horizontal",
            shadeIntensity: 1,
            stops: [1],
          },
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

          // Update the options object with the updated labels style
          const updatedOptions = {
            ...this.state.options,
            xaxis: {
              ...this.state.options.xaxis,
              labels: {
                ...this.state.options.xaxis.labels,
                style: labelsStyle,
              },
            },
          };

          return (
            <div className="col-span-4 bg-Light-Other-Paper_Card dark:bg-Dark-Other-Paper_Card shadow-Light_6 dark:shadow-Dark_6 flex flex-col justify-between p-5 pb-0 rounded-md relative">
              <div>
                <h5 className="Body1 !font-semibold">Total Sales</h5>
                <p className="H6">$21,845</p>
              </div>
              <Dots />
              <Chart
                options={updatedOptions} // Use the updated options object
                series={this.state.series}
                type="line"
                height="190"
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TotalSales;
