import React from 'react';
import { Image } from 'react-bootstrap';
import Grayscale from './grayscale';

const GrayscaleImage = Grayscale(Image);

const FilterImage = () => {
  return (
    <div>
      <GrayscaleImage src="https://picsum.photos/200/300" alt="Grayscale Image" />
    </div>
  );
};

export default FilterImage;
