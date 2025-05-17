# WeatherNow

A modern, responsive weather application built with React and Vite. Get real-time weather information for any city around the world with a clean and intuitive user interface.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)](https://vitejs.dev/)

## ✨ Features

- 🔍 Search for weather by city name
- 🌡️ Display current temperature, feels like, humidity, and pressure
- 🔄 Toggle between Celsius and Fahrenheit
- 🎨 Beautiful UI with responsive design
- 🌤️ Weather condition icons
- 🔄 Automatic loading of default city (Agartala) on startup
- ⚡ Fast and lightweight with Vite

## 🖼️ Screenshots

![App Screenshot](https://via.placeholder.com/600x400?text=Weather+App+Screenshot)

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **React Icons** - Icon library
- **CSS** - Styling
- **OpenWeatherMap API** - Weather data
- **ESLint** - Code linting

## 🚀 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WeatherNow.git
   cd WeatherNow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View the current weather information
4. Click on the temperature to toggle between Celsius and Fahrenheit

## 🌐 API Information

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You'll need to sign up for a free API key to use this application.

## 📁 Project Structure

```
WeatherNow/
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherDisplay.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the amazing development experience
