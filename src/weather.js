/**
 *
 * @param {string} cityName - name of city for weather fetching
 */
function fetchWeather(cityName) {
  const queryString = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=547217b339f04bdf96e55115182711&q=${cityName}&format=json&num_of_days=5`;
  return fetch(queryString)
    .then((result) => result.json())
    .then((weather) => {
      return {
        temperature: weather
          ? weather.data.current_condition[0].FeelsLikeC
          : '',
        weatherDesc: weather
          ? weather.data.current_condition[0].weatherDesc[0].value
          : '',
      };
    });
}

export default fetchWeather;
