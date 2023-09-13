import styles from "./FadeTextSlider.module.css";
import React, { useState, useEffect } from "react";

const INTERVAL_TIME = 5000;
const FADE_TIME = 1500;

function FadeTextSlider({ slides }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let fadeTimer = null;
    let autoSlideTimer = null;

    function turnOffAutoSlide() {
      clearTimeout(autoSlideTimer);
    }

    function turnOnAutoSlide() {
      autoSlideTimer = setTimeout(() => {
        goToNextSlide();
      }, INTERVAL_TIME);
    }

    function goToNextSlide() {
      turnOffAutoSlide();
      setIsFadingIn(false);
      setIsFadingOut(true);
      fadeTimer = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const isLastSlide = prevIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : prevIndex + 1;
          return newIndex;
        });
        setIsFadingIn(true);
        setIsFadingOut(false);
      }, FADE_TIME);
      turnOnAutoSlide();
    }

    turnOnAutoSlide();

    return () => {
      clearTimeout(autoSlideTimer);
      clearTimeout(fadeTimer);
    };
  }, [slides.length]);
  return slides
    ? slides.map((slide, index) => {
        return (
          <div
            className={
              isFadingIn ? styles.fadingIn : isFadingOut ? styles.fadingOut : ""
            }
          >
            <p
              className={
                index === currentIndex ? styles.active : styles.notActive
              }
            >
              {slide.text}
            </p>
          </div>
        );
      })
    : null;
}

export default FadeTextSlider;