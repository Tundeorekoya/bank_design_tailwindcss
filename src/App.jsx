import React from 'react'
import styles from './Style'
import { Navbar, Hero, Billing, Stats, Business, CardDeals, Testimonials, Client, CTA, Footer } from './components'


const App = () =>
(
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>



    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/> 
        </div>

    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeals />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)


export default App
