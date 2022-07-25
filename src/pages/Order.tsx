import React from 'react';

export const Order = () => {
  return (
    <div id="order">
      <button>Sorter etter</button>
      <button>Filtrer</button>
      {/*TODO: List all pizzas */}

      <div id="sidemenu">
        <p>Handlekurv</p>
        {/*TODO: Display pizzas in shopping cart context*/}
        <button>Bestill</button>
      </div>
    </div>
  );
};
