import { getCurrentWeather } from 'backend/weather.js';

$w.onReady(() => {
  $w("#getWeatherButton").onClick(async () => {
    const city = $w("#cityInput").value;

    if (!city) {
      $w("#weatherText").text = "Please enter a city name.";
      return;
    }

    $w("#weatherText").text = "Loading...";

    try {
      const weather = await getCurrentWeather(city);
      $w("#weatherText").text = `🌤️ ${weather.city}: ${weather.temperature}°C, ${weather.description}`;
    } catch (error) {
      console.error(error);
      $w("#weatherText").text = "Could not fetch weather.";
    }
  });
  
});
