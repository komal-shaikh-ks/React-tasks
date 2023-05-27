import React from 'react';

const Grayscale = (WrappedComponent) => {
  return (props) => {
    const styles = {
      filter: 'grayscale(100%)',
    };

    return <WrappedComponent {...props} style={styles} />;
  };
};

export default Grayscale;
