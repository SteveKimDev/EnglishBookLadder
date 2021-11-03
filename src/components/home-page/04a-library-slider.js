import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import ProgramImgOne from './program-images/program-img-01';

import * as HomeStyle from './homestyle.module.css';

const LibrarySlider = () => (
  <div className={`${HomeStyle.sliderDiv}`}>
    <Carousel fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <ProgramImgOne />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <ProgramImgOne />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <ProgramImgOne />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <ProgramImgOne />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 5 */}
      <Carousel.Item>
        <ProgramImgOne />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default LibrarySlider;
