import React from 'react'
import {layout } from '../style'
import styles from '../style'
import Button from './Button'

export const CTA = () => {
  return (
    <section className={`${layout.section} ${styles.marginY}  p-20 bg-black-gradient-2 rounded-[15px] box-shadow`}>    
    <div className={`${styles.flexStart} 
     flex-col flex-1`}>
      <h2 className={styles.heading2}>
      Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments <br className='sm:block hidden'/>and grow your business
        anywhere on the planet.
      </p>

    </div>
    <div className='py-5'>
    <Button/>
    </div>

    
    </section>
  )
}

export default CTA
