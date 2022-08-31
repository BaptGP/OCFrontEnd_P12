import BarData from "./data/bar";
import Constante from "./data/constante";
import RadarBarChart from "./data/radar";
import { useEffect, useState } from "react";
import { fetchData } from "../config/fetchData.js";
import Score from "./data/score";
import Courbe from "./data/courbe";
import Header from "./header";

function Data() {
  const [data, setData] = useState(null);
  let idUser = 12
  useEffect(() => {
    async function fetchGeneral() {
      /**
       * Get response of fetch in config
       * @param { Number } user 
       */
      let response = await fetchData(idUser);
      setData(response);
    }
    fetchGeneral();
  }, [idUser]);

  if (data) {
    return (
      <main style={{ display: "flex", flexDirection: "column"}}>
        <Header firstName={data.userInfos.data.userInfos.firstName} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"center"}}>
          <div className="graphics">
            <BarData sessions={data.activity.data.sessions} />
            <div className="graphics-row">
              <Courbe average={data.averageSession.data.sessions}/>
              <RadarBarChart performance={data.performance.data}/>
              <Score goal={data.userInfos.data.todayScore} />
            </div>
          </div>
          <Constante keyData={data.userInfos.data.keyData}/>
        </div>
      </main>
    );
  } else {
    return null;
  }
}

export default Data;
