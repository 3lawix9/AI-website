import React from 'react'
import { stats } from '../constants'
import styles from '../style'

export const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
         <div key={stat.id} className="flex flex-1 items-center m-3 flex-row justify-start ">
          <h4 className='text-white leading-[43px] font-poppins mr-4 font-semibold 
          xs:leading-[54px] text-[30px] '>{stat.value}</h4>
          <p className='text-gradient text-white leading-[21px] xs:text-[26px] font-poppins 
          xs:leading-[26px] text-[15px] '>{stat.title}</p>
        
         </div>    
      ))}
 
    </section>
  )
}

export default Stats
