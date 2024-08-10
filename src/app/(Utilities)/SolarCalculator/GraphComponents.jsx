"use client";
import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

function GraphComponent({
  initialbill,
  emi_i,
  initialcost,
  newbill,
  tenure_i,
}) {
  const chartRef = useRef(null);

  let initial_ebill = parseInt(initialbill),
    emi = parseInt(emi_i),
    initial_cost = parseInt(initialcost),
    new_ebill = parseInt(newbill),
    tenure = parseInt(tenure_i);

  let savings = initial_ebill - new_ebill;
  let cost = emi;
  let emi_chart = [];
  let cost_chart = [];
  let savings_chart = [];
  let ebill_chart = [];
  let label = [];

  const cal = () => {
    emi_chart[0] = 0;
    cost_chart[0] = 0;
    savings_chart[0] = 0;
    label[0] = 0;
    ebill_chart[0] = initial_ebill * 4;

    for (let i = 1; i <= Math.ceil(tenure / 4) + 1; i++) {
      let x = emi * 4 * i;
      emi_chart[i] = emi * 4 * i;
      if (i <= Math.ceil(tenure / 4)) {
        cost_chart[i] = x + initial_cost;
        savings_chart[i] = (initial_ebill - new_ebill - emi) * 4;
      } else {
        cost_chart[i] = 0;
        savings_chart[i] = (initial_ebill - new_ebill) * 4;
      }
      label[i] = 4 * i;
      ebill_chart[i] = new_ebill * 4;
    }
  };

  useEffect(() => {
    displaygraph();
    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const displaygraph = () => {
    cal();
    const ctx = document.getElementById("myChart").getContext("2d");

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    let maxIndex = cost_chart.indexOf(Math.max(...cost_chart));

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            data: ebill_chart,
            label: "Electricity Bill",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
            lineTension: 0,
          },
          {
            data: savings_chart,
            label: "Savings",
            borderColor: "red",
            backgroundColor: "red-800",
            fill: false,
            lineTension: 0,
          },
          {
            data: cost_chart,
            label: "Cost",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
            lineTension: 0,
            pointBackgroundColor: (context) => {
              if (context.dataIndex === maxIndex) {
                return "green-400";
              } else {
                return "#ffa500";
              }
            },
            pointRadius: (context) => {
              return context.dataIndex === maxIndex ? 8 : 4;
            },
            pointHoverRadius: (context) => {
              return context.dataIndex === maxIndex ? 10 : 6;
            },
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Value (in ₹)",
            },
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Time (in months)",
            },
            ticks: {
              stepSize: 4,
            },
          },
        },
      },
    });
  };

  return (
    <>
      <div className="w-[90vw] md:w-full relative">
        <h6 className="text-center text-sm lg:text-lg font-semibold font-sans">
          Electricity bill, Savings, and Cost
        </h6>
        <canvas
          className="border mt-2 h-full shadow-sm shadow-slate-700"
          id="myChart"
        ></canvas>
      </div>
    </>
  );
}

export default GraphComponent;
