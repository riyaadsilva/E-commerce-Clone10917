import React from 'react'

function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="popup" style={{ display: 'flex' }}>
      <div className="popup-box">
        <h3>Contact Us</h3>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ContactPopup
