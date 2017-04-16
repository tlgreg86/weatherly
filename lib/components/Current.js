import React from 'react';


const Current = ({current}) => {
 return (
   <section className='current-container'>
     <section className='current-card'>
       <h2 className='current-city'>
       {current.currentCity}
       </h2>
       <h3 className='current-day'>
         <p className = 'day'>{current.currentDay}</p>
         <p className = 'condition'>{current.currentWeatherDescription}</p>
       </h3>
       <h3 className='temp-container'>
         <p className = 'current-temp'>{current.currentTemp}</p>
         <p className = 'high'>high: {current.currentHighTemp}</p>
         <p className = 'low'>low: {current.currentLowTemp}</p>
         </h3>
       <p className='summary'>{current.currentWeatherSummary}

       </p>
     </section>
   </section>
 );
};

export default Current
