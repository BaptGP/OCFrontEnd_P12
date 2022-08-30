import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import "../../style/Recharts/radar.css";
const RadarBarChart = (props) => {
  const [data, setData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  console.log("props", props.performance);

  useEffect(() => {
    const kinds = {
      intensity: "Intensité",
      speed: "Vitesse",
      strength: "Force",
      endurance: "Endurance",
      energy: "Energie",
      cardio: "Cardio",
    };
    const kinds_order = {
      Intensité: 1,
      Vitesse: 2,
      Force: 3,
      Endurance: 4,
      Energie: 5,
      Cardio: 6,
    };
    let performance = props.performance;

    // Translate kinds 
    for (let element in performance.kind) {
      console.log(performance.kind[element]);
      performance.kind[element] = kinds[performance.kind[element]];
    }
    // attribute the corresponding kind for each data
    for (let element in performance.data) {
      performance.data[element].kind =
      performance.kind[parseInt(element, 10) + 1];
      performance.data[element].fullMark = 150;
    }

    // assigns an id to each data and sorts them in a predefined order
    for (let element of performance.data) {
      element.id = kinds_order[element.kind];
    }
    performance.data.sort((a, b) => (a.id > b.id ? 1 : -1));

    //Update state
    setData(performance.data);
    setDataIsLoading(true);
  }, []);

  if (dataIsLoading) {
    return (
      <>
        <div className="radar_bar_chart">
          <ResponsiveContainer width={258} height={263}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid />
              <PolarAngleAxis
                tickLine={false}
                stroke="white"
                dataKey={"kind"}
                fontSize={10}
              />
              <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  } else {
    return null;
  }
};

RadarBarChart.propTypes = {
  performance: PropTypes.object,
  kind: PropTypes.object,
};

export default RadarBarChart;
