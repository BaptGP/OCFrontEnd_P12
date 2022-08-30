import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
import "../../style/Recharts/courbe.css";

const Courbe = (props) => {
  /**
   * Custom tooltip of LineChart
   * @param { Object } payload
   * @param { Boolean } active Content tooltip object
   * @returns { Component } React component
   */
  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <>
          <div className="average_duration_tooltip">
            <p>{payload[0].value}min</p>
          </div>
        </>
      );
    }
    return null;
  };

  useEffect(() => {
    const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
    let average = props.average;
    // Attribute day
    for (let element of average) {
      if (element.day in days) {
        element.day = days[element.day];
      }
    }
  }, []);

  return (
    <>
      <div className="average_duration_chart">
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={props.average}>
            <Tooltip
              wrapperStyle={{ left: -10 }}
              cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100 }}
              content={<CustomTooltip />}
            />
            <XAxis
              tick={{ opacity: 0.5 }}
              tickLine={false}
              axisLine={false}
              stroke="white"
              dataKey={"day"}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              strokeOpacity="1"
              dot=""
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
Courbe.propTypes = {
  average: PropTypes.array,
};
export default Courbe;
