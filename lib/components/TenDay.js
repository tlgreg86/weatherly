import React from 'react';

const TenDay = ({ tenDay }) => {
  if (!tenDay.length) {
    return (
     <section className='no-data'>
       <p></p>
     </section>
    )
  };
  return (
    <section className='ten-day-container'>
      <h2 className='ten-day-header'>10 Day Forecast</h2>
        {tenDay[0].forecast.simpleforecast.forecastday.map((day, index) => {
          return (
            <section className='ten-day' key={index}>
              <h2 className='day-of-week'>{day.date.weekday}</h2>
              <img src={day.icon_url.toString()} alt='Weather'/>
              <p>High {day.high.fahrenheit} / Low {day.low.fahrenheit}</p>
            </section>
          );
        })}
    </section>
   );
};

export default TenDay;
