import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";
import "../../style/Recharts/score.css";

function Score(props) {
  const [data, setData] = useState(null);
  const [goal, setGoal] = useState(null);
  const [goalIsLoading, setGoalIsLoading] = useState(false);

  useEffect(() => {
    setData([{ name: "score", score: props.goal }]);
    setGoal(props.goal);
    setGoalIsLoading(true);
  }, []);
  return (
    <>
      <div className="goal_chart">
        <h2 className="goal_title">Score</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={90}
              endAngle={goal * 360}
              innerRadius="60%"
              outerRadius="70%"
              paddingAngle={5}
              dataKey="score"
            >
              <Cell fill="red" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="goal_content">
          <div>
            <p className="percentage">{goal * 100}%</p>
            <p className="legend">de votre</p>
            <p className="legend">objectif</p>
          </div>
        </div>
      </div>
    </>
  );
}

Score.propTypes = {
  goal: PropTypes.number,
};

export default Score;
