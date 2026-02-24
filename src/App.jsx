import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import SliderSection from './components/SliderSection'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import ContactPopup from './components/ContactPopup'

function App() {
  const [showContactPopup, setShowContactPopup] = useState(false)

  const openContact = () => setShowContactPopup(true)
  const closeContact = () => setShowContactPopup(false)

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showContactPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showContactPopup])

  // Close popup on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showContactPopup) {
        closeContact()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showContactPopup])

  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <SliderSection 
          title="MEDAL WORTHY BRANDS TO BAG" 
          folder="offers"
          count={12}
        />
        <CategorySection 
          title="SHOP BY CATEGORY" 
          folder="categories"
          count={10}
          initialVisible={6}
        />
      </main>
      <Footer onContactClick={openContact} />
      <ContactPopup 
        isOpen={showContactPopup} 
        onClose={closeContact}
      />
    </div>
  )
}

export default App
