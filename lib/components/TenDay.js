import React from 'react';

const TenDay = ({ tenDay }) => {
  if (!tenDay.length) {
    return (
     <section>
       <p></p>
     </section>
    )
  };
  return (
   <section>
     <h1 className='tenDayTitle'>10 Day Forecast</h1>
     {tenDay[0].forecast.simpleforecast.forecastday.map((day, index) => {
       return (
         <section key={index}>
           <h2>{day.date.weekday}</h2>
           <img src={day.icon_url.toString()} alt='Weather'/>
           <p>{day.high.fahrenheit}</p>
           <p>{day.low.fahrenheit}</p>
         </section>
       );
     })}
   </section>
   );
};

export default TenDay;
