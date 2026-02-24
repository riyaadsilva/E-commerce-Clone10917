import React, { useState } from 'react'

function CategorySection({ title, folder, count }) {
  const items = Array.from({ length: count }, (_, i) => i + 1)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      <div className="category_heading">{title}</div>
      <div className="category_items">
        {items.map((item) => (
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
    </>
  )
}

export default CategorySection
