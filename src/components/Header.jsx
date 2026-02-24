import React, { useState } from 'react'

function Header() {
  return (
    <header>
      <div className="logo_container">
        <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Logo" />
      </div>
      <Navigation />
      <SearchBar />
      <ActionBar />
    </header>
  )
}

function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    {
      label: 'Men',
      columns: [
        { title: 'Topwear', items: ['T-Shirts', 'Shirts', 'Jackets'] },
        { title: 'Bottomwear', items: ['Jeans', 'Shorts'] }
      ]
    },
    {
      label: 'Women',
      columns: [
        { title: 'Indian Wear', items: ['Kurtas', 'Sarees'] },
        { title: 'Western', items: ['Dresses', 'Tops'] }
      ]
    },
    {
      label: 'Kids',
      columns: [
        { title: 'Boys', items: ['T-Shirts', 'Shorts'] },
        { title: 'Girls', items: ['Dresses', 'Tops'] }
      ]
    },
    {
      label: 'Home & Living',
      columns: [
        { title: 'Decor', items: ['Bedsheets', 'Curtains'] }
      ]
    },
    {
      label: 'Beauty',
      columns: [
        { title: 'Makeup', items: ['Lipstick', 'Skincare'] }
      ]
    },
    {
      label: 'Studio',
      isStudio: true,
      icon: 'images/studio-popup.png'
    }
  ]

  return (
    <nav className="nav_bar">
      {navItems.map((item, idx) => (
        <NavItem 
          key={idx} 
          item={item} 
          isActive={activeDropdown === idx}
          onMouseEnter={() => setActiveDropdown(idx)}
          onMouseLeave={() => setActiveDropdown(null)}
        />
      ))}
    </nav>
  )
}

function NavItem({ item, isActive, onMouseEnter, onMouseLeave }) {
  if (item.isStudio) {
    return (
      <div className="nav_item studio_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="#">
          Studio <sup style={{ color: '#f54e77' }}>NEW</sup>
        </a>
        <div className="studio_popup">
          <img src={item.icon} alt="Studio Promo" />
        </div>
      </div>
    )
  }

  return (
    <div className="nav_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <a href="#">{item.label}</a>
      <div className="dropdown" style={{ display: isActive ? 'grid' : 'none' }}>
        {item.columns.map((col, idx) => (
          <div key={idx} className="dropdown_column">
            <h4>{col.title}</h4>
            {col.items.map((subitem, sidx) => (
              <a key={sidx}>{subitem}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="search_bar">
      <span className="material-symbols-outlined search_icon">search</span>
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  )
}

function ActionBar() {
  const [hoveredAction, setHoveredAction] = useState(null)

  const actions = [
    { label: 'Profile', icon: 'person', action: () => console.log('Profile clicked') },
    { label: 'Wishlist', icon: 'favorite', action: () => console.log('Wishlist clicked') },
    { label: 'Bag', icon: 'shopping_bag', action: () => console.log('Bag clicked') }
  ]

  return (
    <div className="action_bar">
      {actions.map((action, idx) => (
        <div 
          key={idx} 
          className="action_container"
          title={action.label}
          onClick={action.action}
          onMouseEnter={() => setHoveredAction(idx)}
          onMouseLeave={() => setHoveredAction(null)}
          style={{ opacity: hoveredAction === idx ? 1 : 0.8 }}
        >
          <span className="material-symbols-outlined">{action.icon}</span>
          {action.label}
        </div>
      ))}
    </div>
  )
}

export default Header
