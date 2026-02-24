import React, { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import ContactPopup from './components/ContactPopup'

function App() {
  const [showContactPopup, setShowContactPopup] = useState(false)

  const openContact = () => setShowContactPopup(true)
  const closeContact = () => setShowContactPopup(false)

  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <CategorySection 
          title="MEDAL WORTHY BRANDS TO BAG" 
          folder="offers"
          count={12}
        />
        <CategorySection 
          title="SHOP BY CATEGORY" 
          folder="categories"
          count={10}
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
