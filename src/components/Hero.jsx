import React from 'react'
import { discount , robot} from '../assets'
import styles from "../style";
import GetStarted from './GetStarted';


const Hero = () => {
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6 lg:mt-[-150px]`}>
          <div className="flex flex-row items-center  py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
  
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
  
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className={`flex flex-1 ${styles.flexCenter}  md:my-0 my-10 relative`}>
        <img src={robot} className='w-[100%] h-[100%] z-[5] sm:w-[80%]h-[80%] relative' />
        <div className='blue__gradient absolute z-0 w-[10%] h-[25%] top-0'></div>
        <div className='white__gradient absolute z-1 w-[80%] h-[80%] rounded-full bottom-40'></div>
        <div className='blue__gradient absolute z-0 w-[50%] h-[55%] bottom-20'></div>
        </div>
  
      </section> 
      
      )}

export default Hero