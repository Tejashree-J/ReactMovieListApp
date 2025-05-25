import { useState, useEffect } from "react";
import "./Weather.css";
import windSpeed from "../../assets/windSpeed.png";
import humidity from "../../assets/humidity.png"

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update date and time
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime(); // Update immediately
    const interval = setInterval(updateDateTime, 1000); // Update every second

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=0Ezf2IDQ4U6BjgaiMzqeQmrswP3KS8C3"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  console.log(weather); // Debugging the weather data

  return (
    <>
      <div className="weather">
        <div className="dateTime">
          {currentDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {currentTime}
        </div>
        <div className="weatherData">
          {/* <p>Weather: {weather?.timelines?.daily?.[0]?.values?.weatherCodeMin || "Loading..."}</p> */}
          <p>Temperature: {weather?.timelines?.daily?.[0]?.values?.temperatureAvg || "Loading..."}°C</p>
          <p><img src={windSpeed} className="icon" /> {weather?.timelines?.daily?.[0]?.values?.windSpeedAvg || "Loading..."} km/h Wind</p>
          <p><img src={humidity} className="icon"/> {weather?.timelines?.daily?.[0]?.values?.humidityAvg || "Loading..."}% Humidity</p>
        </div>    
      </div>
    </>
  );
}
