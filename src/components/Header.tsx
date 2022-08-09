import React from 'react';

export const Header = () => {
  return (
    <div className='bg-gray-300' id="header">
      <h1>Pizza-website</h1>
      {/*TODO: Add Routing*/}
      <p>Bestill</p>
      <p>Mine Bestillinger</p>
      {/*TODO: Auth */}
      <p>Logg inn</p>
    </div>
  );
};
