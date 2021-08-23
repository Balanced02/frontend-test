import React from 'react'
import ReactApexChart from "react-apexcharts";

type SeriesType = {
  name: string
  data: number[]
}

type GraphProps = {
  title: string
  series: SeriesType[]
  colors: string[]
  date: number[]
}

const Graph = ({ title, series, colors, date }: GraphProps) => {

  return (
    <div id="chart">
      <ReactApexChart
        options={{
          chart: {
            height: '500px',
            type: "line",
            zoom: {
              enabled: true,
            },
          },
          title: {
            text: title,
            align: "left",
          },
          legend: {
            showForSingleSeries: true,
            position: "top",
            horizontalAlign: "left",
            offsetY: -10,
          },
          colors: colors,
          stroke: {
            curve: "smooth",
            width: 1,
          },
          xaxis: {
            type: "datetime",
            categories: date,
            tooltip: {
              enabled: true,
            },
          },
          yaxis: {
            decimalsInFloat: 4,
          }
        }}
        series={series}
        type="line"
        height={300}

      />
    </div>
  );
};

export default React.memo(Graph);