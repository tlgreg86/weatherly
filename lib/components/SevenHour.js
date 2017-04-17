import React from 'react';

const SevenHour = ({ sevenHour }) => {
  if (!sevenHour.length) {
    return (
     <section>
       <p></p>
     </section>
    )
  };
   return (
     <section className='hourly-weather-container'>
      <div>
        <h1>7 Hour Forecast</h1>
      </div>
      {sevenHour[0].hourly_forecast.slice(0, 7).map((hour, index) => {
      return (
        <section className='hourly-weather' key={index}>
          <p>{hour.FCTTIME.civil}</p>
          <img src={hour.icon_url.toString()} alt='Weather'/>
          <p className='marginHourly'>{hour.temp.english}</p>
          <p className='marginHourly'>{hour.condition}</p>
        </section>
      );
    })}
     </section>
   );
};

export default SevenHour
