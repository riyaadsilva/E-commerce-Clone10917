import React from 'react'

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
        <NavItem key={idx} item={item} />
      ))}
    </nav>
  )
}

function NavItem({ item }) {
  if (item.isStudio) {
    return (
      <div className="nav_item studio_item">
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
    <div className="nav_item">
      <a href="#">{item.label}</a>
      <div className="dropdown">
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
  return (
    <div className="search_bar">
      <span className="material-symbols-outlined search_icon">search</span>
      <input
        className="search_input"
        placeholder="Search for products, brands and more"
      />
    </div>
  )
}

function ActionBar() {
  const actions = [
    { label: 'Profile', icon: 'person' },
    { label: 'Wishlist', icon: 'favorite' },
    { label: 'Bag', icon: 'shopping_bag' }
  ]

  return (
    <div className="action_bar">
      {actions.map((action, idx) => (
        <div key={idx} className="action_container">
          <span className="material-symbols-outlined">{action.icon}</span>
          {action.label}
        </div>
      ))}
    </div>
  )
}

export default Header
