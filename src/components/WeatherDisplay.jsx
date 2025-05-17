import { useState } from 'react';
import { 
  WiDaySunny, WiCloudy, WiRain, WiSnow, 
  WiThunderstorm, WiDust, WiFog, WiDayHaze
} from 'react-icons/wi';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  const [unit, setUnit] = useState('celsius');

  if (!weatherData) return null;

  const { name, main, weather, dt } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const celsiusTemp = Math.round(main.temp);
  const fahrenheitTemp = Math.round((main.temp * 9/5) + 32);
  const temperature = unit === 'celsius' ? `${celsiusTemp}°C` : `${fahrenheitTemp}°F`;

  const getWeatherIcon = (weatherCode) => {
    const code = weatherCode.toLowerCase();
    if (code.includes('clear')) return <WiDaySunny className="weather-icon" />;
    if (code.includes('cloud')) return <WiCloudy className="weather-icon" />;
    if (code.includes('rain') || code.includes('drizzle')) return <WiRain className="weather-icon" />;
    if (code.includes('snow')) return <WiSnow className="weather-icon" />;
    if (code.includes('thunder')) return <WiThunderstorm className="weather-icon" />;
    if (code.includes('dust') || code.includes('sand')) return <WiDust className="weather-icon" />;
    if (code.includes('fog') || code.includes('mist')) return <WiFog className="weather-icon" />;
    if (code.includes('haze') || code.includes('smoke')) return <WiDayHaze className="weather-icon" />;
    return <WiDaySunny className="weather-icon" />;
  };

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return (
    <div className="weather-display">
      <div className="city-date">
        <h2 className="city-name">{name}</h2>
        <p className="date">{date}</p>
      </div>
      
      <div className="weather-info">
        <div className="weather-description">
          {getWeatherIcon(weather[0].main)}
          <span className="description-text">{weather[0].description}</span>
        </div>
        
        <div className="temperature-container">
          <div className="temperature" onClick={toggleUnit}>
            {temperature}
          </div>
          <div className="unit-toggle">
            <button 
              className={`unit-button ${unit === 'celsius' ? 'active' : ''}`}
              onClick={() => setUnit('celsius')}
            >
              °C
            </button>
            <button 
              className={`unit-button ${unit === 'fahrenheit' ? 'active' : ''}`}
              onClick={() => setUnit('fahrenheit')}
            >
              °F
            </button>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">
              {unit === 'celsius' 
                ? `${Math.round(main.feels_like)}°C` 
                : `${Math.round((main.feels_like * 9/5) + 32)}°F`}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
