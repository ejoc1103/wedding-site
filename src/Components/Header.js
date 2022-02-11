import React from "react";

let x = function () {
  let countDownDate = new Date("Jul 23, 2023 14:00:00").getTime();

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return days;
};
const Header = () => {
  return (
    <>
      <h1 className="App-header">Shelly and Ed</h1>

      <div></div>
      <div className="mainContainer">
        <div className="date-info">
          <h2>July 23rd, 2023 - Point Pleasant, NJ</h2>
          <h2>{x()} Days to Go</h2>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
