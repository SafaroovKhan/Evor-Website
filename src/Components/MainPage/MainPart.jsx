import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img03 from "./assets/beads.jpg"
import img04 from "./assets/candle.jpg"
import img05 from "./assets/feather.jpg"
import img06 from "./assets/flowerr.jpg"
import img07 from "./assets/ledbaloons.jpg"
import img08 from "./assets/Evorlogo2.png"
import img10 from "./assets/Evor-detail-removebg-preview.png"

function MainPart() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(false); // Add transition state and setter
  const images = [
    img03,
    img04,
    img05,
    img06,
    img07
    // Add more image paths here
  ];

  const handleNextSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
      setTransition(false);
    }, 300);
  };

  const handlePreviousSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentSlide((currentSlide - 1 + images.length) % images.length);
      setTransition(false);
    }, 300); 
  };

  const getPreviousIndex = (currentIndex) => {
    return (currentIndex - 1 + images.length) % images.length;
  };

  const getNextIndex = (currentIndex) => {
    return (currentIndex + 1) % images.length;
  };

  return (
    <>
      <div className="mainpart-section">
        <div className="mainpart-container">
          <div className="mainpart-top">
            <div className="mainpart-btn-box">
                <button className="mainpart-btn" >
                  <div className='btn-div'>
                      <Link to={'/decorlar'} className='mainpart-btn-link' target='_blank'>DEKOR SEÇ</Link> 
                    <img src={img10} className='mainbtn-img1' />
                  </div>
                </button>
            </div>
            
            <img src={img08} alt="evor logo" className='mainimg' />
            <div className="mainpart-btn-box">
              <button className="mainpart-btn">
                <div className="btn-div">
                  ÖZÜN DİZAYN ET
                  <img src={img10} className='mainbtn-img2' />
                </div>
              </button>
            </div>
          </div>
          <div className="mainpart-bottom">
            <div className="mainpart-bottom-container">
                <button
                    className="prev-button"
                    onClick={handlePreviousSlide}
                    disabled={currentSlide === 0}
                    >
                        <i class="fa-solid fa-chevron-left"></i>
                </button>
              <div className="imgslider-box">
                <img
                  src={images[getPreviousIndex(currentSlide)]}
                  alt={`Slide ${getPreviousIndex(currentSlide) + 1}`}
                  className={`slide${transition ? ' transitioning' : ''}`}
                />
              </div>
              <div className="imgslider-box imgslider-box-big">
                <img
                  src={images[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className={`slide${transition ? ' transitioning' : ''}`}
                />
              </div>
              <div className="imgslider-box">
                <img
                  src={images[getNextIndex(currentSlide)]}
                  alt={`Slide ${getNextIndex(currentSlide) + 1}`}
                  className={`slide${transition ? ' transitioning' : ''}`}
                />
              </div>
              <button
                  className="next-button"
                  onClick={handleNextSlide}
                  disabled={currentSlide === images.length - 1}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPart;
