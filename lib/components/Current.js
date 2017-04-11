import React from 'react';


const Current = () => {
  return (
    <section className='current-container'>
      <section className='current-card'>
        <h2 className='current-location'>
          Denver, Colorado
        </h2>
        <h3 className='current-date'>
          <p>Some Date</p>
          <p>Some Time</p>
        </h3>
        <h3 className='current-temp'>
          90˚F
        </h3>
        <p className='summary'>
          A few clouds. Lows overnight in the low 30s.
        </p>
      </section>
    </section>
  );
};

export default Current 
