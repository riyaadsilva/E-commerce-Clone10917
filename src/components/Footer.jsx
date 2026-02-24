import React, { useState } from 'react'

function Footer({ onContactClick }) {
  const [hoveredLink, setHoveredLink] = useState(null)

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#" onMouseEnter={() => setHoveredLink('men')} onMouseLeave={() => setHoveredLink(null)}>Men</a>
          <a href="#" onMouseEnter={() => setHoveredLink('women')} onMouseLeave={() => setHoveredLink(null)}>Women</a>
          <a href="#" onMouseEnter={() => setHoveredLink('kids')} onMouseLeave={() => setHoveredLink(null)}>Kids</a>
          <a href="#" onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>Home & Living</a>
          <a href="#" onMouseEnter={() => setHoveredLink('beauty')} onMouseLeave={() => setHoveredLink(null)}>Beauty</a>
          <a href="#" onMouseEnter={() => setHoveredLink('gift')} onMouseLeave={() => setHoveredLink(null)}>Gift Card</a>
          <a href="#" onMouseEnter={() => setHoveredLink('insider')} onMouseLeave={() => setHoveredLink(null)}>Myntra Insider</a>
        </div>
        <div className="footer_column">
          <h3>USEFUL LINKS</h3>
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault()
              onContactClick()
            }}
            onMouseEnter={() => setHoveredLink('contact')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            Contact Us
          </a>
          <a href="#" onMouseEnter={() => setHoveredLink('faq')} onMouseLeave={() => setHoveredLink(null)}>FAQ</a>
          <a href="#" onMouseEnter={() => setHoveredLink('careers')} onMouseLeave={() => setHoveredLink(null)}>Careers</a>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2026 www.myntra.com. All rights reserved.</div>
    </footer>
  )
}

export default Footer
