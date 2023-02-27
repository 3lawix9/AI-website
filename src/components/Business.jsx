import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({icon,title,content,index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`bg-dimBlue rounded-full ${styles.flexCenter} w-[64px] h-[64px]`}>
        <img src={icon} className="w-[50%] h-[50%] object-contain"/>
      </div>
      <div className='flex flex-1 flex-col text-white ml-4 leading-[23px] font-poppins'>
        <h4 className='mb-1 text-[18px] font-semibold'>{title}</h4>
        <p className='font-normal text-dimWhite'>{content}</p>
      </div>

    </div>
)


export const Business = () => { 
  
  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we will handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button/>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
       {features.map((feature)=>(
        <FeatureCard key={feature.id} {...feature} />
       ))}
    </div>
   </section>
  )
}
export default Business