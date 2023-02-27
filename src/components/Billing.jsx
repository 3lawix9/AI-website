import React from 'react'
import { apple , bill , google } from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section className={layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
    <img src={bill} className="w-full h-full relative z-[5]"/> 
    <div className='white__gradient rounded-full absolute z-[3] left-1/2 bottom-0 w-[50%] h-[55%] '/>
    <div className='pink__gradient absolute z-0 w-[50%] h-[50%] rounded-full '/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} className=" object-contain cursor-pointer w-[148px] h-[48px] mr-5"/>
        <img src={google} className=" object-contain cursor-pointer w-[148px] h-[48px] mr-5"/>
      </div>
      </div>
    </section>
  )
}

export default Billing