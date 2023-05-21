import React, { useState } from "react";
import "./home.css";

function Home() {
  const [temperature, setTemperature] = useState(22);
  const [temperatureColor, setTemperatureColor] = useState("nomral");

  const handleIncrement = () => {
    setTemperature(temperature + 1);
    if (temperature + 1 > 28) {
      setTemperatureColor("hot");
    } else if (temperature + 1 < 16) {
      setTemperatureColor("cold");
    } else {
      setTemperatureColor("normal");
    }
  };

  const handleDecrement = () => {
    setTemperature(temperature - 1);
    if (temperature - 1 > 28) {
      setTemperatureColor("hot");
    } else if (temperature - 1 < 16) {
      setTemperatureColor("cold");
    } else {
      setTemperatureColor("normal");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="heading">Temperature Controller</h1>
        <div className="box">
          <div className={`temperatureDiv ${temperatureColor}`}>
            <p className="temperature">{temperature}° C</p>
          </div>
          <div className="buttons">
            <button className="increment" onClick={handleIncrement}>
              +
            </button>
            <button className="decrement" onClick={handleDecrement}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
