import React from "react";
import OneSmallWin from "./OneSmallWin";

const TodayWins = ({ todayswins, setTodaysWins }) => {
  return (
    <div className="today-wins-container">
      <ul className="todays-wins">
        {todayswins.map((win) => (
          <OneSmallWin
            win={win}
            todayswins={todayswins}
            setTodaysWins={setTodaysWins}
            key={win.id}
            text={win.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodayWins;
