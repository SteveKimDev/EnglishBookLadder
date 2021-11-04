import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import SliderImgOne from './slider-images/slider-img-01';
import SliderImgTwo from './slider-images/slider-img-02';
import SliderImgThree from './slider-images/slider-img-03';
import SliderImgFour from './slider-images/slider-img-04';
import SliderImgFive from './slider-images/slider-img-05';

import * as HomeStyle from './homestyle.module.css';

const LibrarySlider = () => (
  <div className={`${HomeStyle.sliderDiv}`}>
    <Carousel fade>
      {/* Slide 1 */}
      <Carousel.Item interval={3000}>
        <SliderImgOne />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item interval={3000}>
        <SliderImgTwo />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item interval={3000}>
        <SliderImgThree />
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item interval={3000}>
        <SliderImgFour />
      </Carousel.Item>

      {/* Slide 5 */}
      <Carousel.Item interval={3000}>
        <SliderImgFive />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default LibrarySlider;
