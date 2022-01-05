import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
// import Title from "./Title";

// Generate Sales Data
function createData(day, amount) {
  return { day, amount };
}

const data = [
  createData("13 Dec", 0),
  createData("14 Dec", 0),
  createData("15 Dec", 10),
  createData("16 Dec", 20),
  createData("17 Dec", 30),
  createData("18 Dec", 1000),
  createData("19 Dec", 100),
  createData("20 Dec", 100),
  createData("21 Dec", 0),
];

export default function Chart() {
  return (
    <React.Fragment>
      {/* <Title>Today</Title> */}
      <ResponsiveContainer>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv">
              <stop stopColor="blue" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={{ stroke: "#EAF0F4" }}
            style={{ fontSize: "small", opacity: ".8" }}
          />
          <YAxis
            tickCount={8}
            axisLine={{ stroke: "#EAF0F4" }}
            style={{ fontSize: "small", opacity: ".8" }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
