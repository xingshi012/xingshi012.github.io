// components/HomepageSlideshow/HomepageSlideshow.js
import React from 'react';
import { slideshowImages } from './SlideshowData';
import './HomepageSlideshow.css';
const HomepageSlideshow = () => {
  return (
    <section className="homepage-slideshow">
      <div className="homepage-slideshow__container">
        {slideshowImages.map((slide) => (
          <div className={ `homepage-slideshow__item ${slide.theme}`}>
            <div className="homepage-slideshow__image">
                <img src={slide.src} alt={slide.alt} />
            </div>
            <div className="homepage-slideshow__content">
              <h2 className='homepage-slideshow__heading'>{slide.title}</h2>
              <div className='homepage-slideshow__description'>{slide.description}</div>
            </div>
          </div>
          ))}
      </div>
    </section>
  );
};

export default HomepageSlideshow;