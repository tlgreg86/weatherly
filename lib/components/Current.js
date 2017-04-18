import React from 'react';

const Current = ({currentWeather}) => {
    if (!currentWeather.length) {
        return (
            <section>
                <p>Please enter a valid location</p>
            </section>
        )
    };
    return (
        <section className='current-container'>
            <section className='current-card'>
                <h2 className='current-location'>
                    {currentWeather[0].current_observation.display_location.full}
                </h2>
                <h3 className='current-date'>
                    <p className='date'>{currentWeather[0].forecast.simpleforecast.forecastday[0].date.weekday}</p>
                </h3>
                <h3 className='temp-container'>
                    <p className='current-temp'>{currentWeather[0].hourly_forecast[0].temp.english}˚F</p>
                    <img className='current-weather-image'src={currentWeather[0].current_observation.icon_url} alt='Weather'/>
                    <p className='high-low'>High {currentWeather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit} / Low {currentWeather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
                </h3>
                <p className='summary'>{currentWeather[0].forecast.txt_forecast.forecastday[0].fcttext}</p>
            </section>
        </section>
    );
};

export default Current
