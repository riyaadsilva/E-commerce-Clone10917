import React from 'react'

function CategorySection({ title, folder, count }) {
  const items = Array.from({ length: count }, (_, i) => i + 1)

  return (
    <>
      <div className="category_heading">{title}</div>
      <div className="category_items">
        {items.map((item) => (
          <a key={item} href="#">
            <img 
              className="sale_item" 
              src={`images/${folder}/${item}.${folder === 'offers' ? 'png' : 'jpg'}`}
              alt={`${title} ${item}`}
            />
          </a>
        ))}
      </div>
    </>
  )
}

export default CategorySection
