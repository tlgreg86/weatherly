import React from 'react';

const InvalidLocation = ({ error }) => {

  return (
    <section className="errors">
      <h3>{ error }.</h3>
    </section>
  );
};

export default InvalidLocation;
