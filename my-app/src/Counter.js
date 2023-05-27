import React, { useState } from 'react';

const Counter = ({ render }) => {
  const [count, setCount] = useState(5);

  const increment = () => {
    if(count<10){

        setCount(count + 1);
    }
  };

  const decrement = () => {
   if(count>0){

    setCount(count - 1);
   }
  };

  return (
    <div>
      <h1>Counter</h1>
      {render(count, increment, decrement)}
    </div>
  );
};

export default Counter;
