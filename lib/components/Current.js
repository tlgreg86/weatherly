import React from 'react';


const Current = () => {
 return (
   <section className='current-container'>
     <section className='current-card'>
       <h2 className='current-location'>
         Denver, Colorado
       </h2>
       <h3 className='current-date'>
         <p className = 'date'>Some Date</p>
         <p className = 'time'>Some Time</p>
       </h3>
       <h3 className='temp-container'>
         <p className = 'current-temp'>90˚F</p>
         <p className = 'high-low'>High/Low</p>
       </h3>
       <p className='summary'>
         A few clouds. Lows overnight in the low 30s.
       </p>
     </section>
   </section>
 );
};

export default Current
