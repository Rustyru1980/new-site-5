import { fetch } from 'wix-fetch';
import { getSecret } from 'wix-secrets-backend';
import { webMethod, Permissions } from 'wix-web-module';

//export const getCurrentWeather = webMethod(Permissions.Anyone, async (city) => {
//  const apiKey = await getSecret('openWeatherKey'); // Make sure this matches your secret's name exactly!

 // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&mode=json&appid=${apiKey}`;
  
 // console.log("Calling weather API with URL:", apiUrl); // Debug output

//  const response = await fetch(apiUrl, { method: "get" });
//  const data = await response.json();

//  if (data.cod !== 200) {
//   console.log("API Error:", data); // Log full API error response
//    throw new Error(`API error: ${data.message}`);
//  }

 // return {
 //   city: data.name,
 //   temp: data.main.temp,
  //  description: data.weather[0].description
 // };
//});

export const getWeatherJson = webMethod(Permissions.Anyone, async () => {
  const secret = await wixSecretsBackend.getSecret("openWeatherKey");
  return getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=${secret}`,
  );
});

