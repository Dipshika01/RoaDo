import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Performance',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75, 192, 192, 1)',
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(220, 220, 220, 1)',
      pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      pointHitRadius: 50,
      data: [60, 80, 70, 65, 85, 95, 80],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => {
  return (
    <div>
      <h2>Performance</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
