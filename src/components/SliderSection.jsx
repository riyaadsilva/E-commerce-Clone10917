import React, { useState, useRef, useEffect } from 'react'

function SliderSection({ title, folder, count }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)
  const sliderRef = useRef(null)

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(2)
      } else if (window.innerWidth <= 768) {
        setItemsPerView(3)
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(4)
      } else {
        setItemsPerView(6)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const items = Array.from({ length: count }, (_, i) => i + 1)
  const totalSlides = Math.ceil(count / itemsPerView)
  const maxIndex = Math.max(0, totalSlides - 1)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1))
  }

  const startIndex = currentIndex * itemsPerView
  const visibleItems = items.slice(startIndex, startIndex + itemsPerView)

  return (
    <>
      <div className="category_heading">{title}</div>
      <div className="slider_container">
        <button className="slider_btn slider_btn_prev" onClick={handlePrev} title="Previous">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="slider_wrapper">
          <div className="slider_track">
            {visibleItems.map((item) => (
              <div key={item} className="slider_item">
                <a href="#">
                  <img
                    className="sale_item"
                    src={`images/${folder}/${item}.${folder === 'offers' ? 'png' : 'jpg'}`}
                    alt={`${title} ${item}`}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <button className="slider_btn slider_btn_next" onClick={handleNext} title="Next">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div className="slider_dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            title={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default SliderSection
