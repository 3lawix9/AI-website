import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'


export const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      <div className='rounded-full blue__gradient absolute -right-[50px] w-[40%] h-[60%]
       z-[0]'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6
      relative z-[1]'>
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" />saying about us
      </h2>
      <p className={`${styles.paragraph} mr-20 mt-6 text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>

      </div>
      <div className='w-full flex-wrap sm:justify-start flex justify-center
      relative z-[1] feedback-container'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
    
  )
}


export default Testimonials
