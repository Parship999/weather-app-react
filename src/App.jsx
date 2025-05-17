import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeatherData } from './services/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSearched, setLastSearched] = useState('');

  useEffect(() => {
    // Load default city on first render
    handleSearch('Agartala');
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setLastSearched(city);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(`Could not find weather data for "${city}". Please check the city name and try again.`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-app">
        <h1 className="app-title">Weather App</h1>
        <SearchBar onSearch={handleSearch} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && weatherData && (
          <WeatherDisplay weatherData={weatherData} />
        )}

        {!loading && !error && !weatherData && !lastSearched && (
          <div className="initial-message">
            <p>Enter a city name to get the weather information</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
