import React, { useState } from 'react'

function CategorySection({ title, folder, count, initialVisible = 6 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const items = Array.from({ length: count }, (_, i) => i + 1)
  const [hoveredItem, setHoveredItem] = useState(null)

  const visibleCount = isExpanded ? count : initialVisible
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = count > initialVisible

  return (
    <>
      <div className="category_heading">{title}</div>
      <div className="category_items">
        {visibleItems.map((item) => (
          <a 
            key={item} 
            href="#"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              transform: hoveredItem === item ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.2s ease'
            }}
          >
            <img 
              className="sale_item" 
              src={`images/${folder}/${item}.${folder === 'offers' ? 'png' : 'jpg'}`}
              alt={`${title} ${item}`}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      
      {hasMore && (
        <div className="view_more_container">
          <button 
            className="view_more_btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <span className="material-symbols-outlined">expand_less</span>
                View Less
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">expand_more</span>
                View More
              </>
            )}
          </button>
        </div>
      )}
    </>
  )
}

export default CategorySection
