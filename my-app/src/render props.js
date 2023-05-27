import React from 'react';
import Counter from './Counter';

const Apps = () => {
  return (
    <div>
      <h1>My App</h1>
      <Counter
        render={(count, increment, decrement) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <input type='text'></input>
            <button onClick={decrement}>Decrement</button>
          </div>
        )}
      />
    </div>
  );
};

export default Apps;
