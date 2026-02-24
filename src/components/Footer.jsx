import React from 'react'

function Footer({ onContactClick }) {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>
        <div className="footer_column">
          <h3>USEFUL LINKS</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2026 www.myntra.com. All rights reserved.</div>
    </footer>
  )
}

export default Footer
