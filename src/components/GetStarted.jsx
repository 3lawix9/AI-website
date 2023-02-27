import React from 'react'
import styles from "../style";
import { arrowUp } from '../assets';


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] 
    rounded-full p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} bg-primary rounded-full  w-full h-full flex-col`}>
        <div className={`${styles.flexStart} flex-row `}>
          <p className='font-poppins font-medium text-[18px]  leading-6 text-gradient mr-1.5'>
            Get
          </p>
            <img src={arrowUp} className='w-6 h-6  object-contain'/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-6 text-gradient'>
            Started</p>
      </div>
    </div>
  )
}

export default GetStarted