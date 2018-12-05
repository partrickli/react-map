import React from 'react';

function WeatherDetail(props) {
  const { temperature, weatherDesc } = props;

  const isWeatherAvailable = temperature && weatherDesc;

  if (isWeatherAvailable) {
    return (
      <div className={'weather-detail-container'}>
        <p className={'display-5'}>{temperature} °C</p>
        <p className={'display-5'}>{weatherDesc} </p>
      </div>
    );
  } else {
    return (
      <div className={'weather-detail-container'}>
        <p>weather data not available</p>
      </div>
    );
  }
}

export default WeatherDetail;
