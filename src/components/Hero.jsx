import styles from "../style";
import {discount,robot} from "../assets";
import Getstarted from "./GetStarted";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingX}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                       <div className="flex flex-row items-center py-[6px] px-4 
                       bg-discount-gradiente rounded-[10px] mb-4"> 
                       <img src={discount} alt="discount" className="w-[30px] h-[30px]" />
                                <p className={`${styles.paragraph} ml-2`}>
                                  <span className="text-white"> 20%</span>
                                  <span> Discount For {" "}</span>
                                  <span> 1 Month</span>
                                </p>
                       </div>

                 <div className="flex flex-row justify-between item-center w-full">
                             
                      
                       <h1 className="flex-1 font-poppins font-semibold 
                       ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        The Next <br className="sm:block hidden" />
                        {" "} <span className="text-gradient">Generation</span> {" "}
                       </h1>

                       <div className="ss:flex hidden md:mr-4 mr-0">
                        <Getstarted />
                       </div>
                </div>

               
               <h1 className="font-poppins font-semibold 
                    ss:text-[72px] text-[52px] text-white
                     ss:leading-[100px] leading-[75px] w-full">
                     Payment Method
               </h1>
               <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
               Our team of experts uses a methodology to identify the credit
                cards most likely to 
               fit your needs. 
                We examine annual percentage rates, annual fees.
               </p>

                </div>

                <div>
                  <img src={robot} alt="robot image" className="w-[100%] h-[100%] z-[5] relative"/>
                  <div className="absolute z-[0] w-[40%] h-[35%]   top-0 pink__gradient">
                  <div className="absolute z-[1] w-[80%] h-[80%]  rounded-full bottom-40 white__gradient"></div>
                  <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient"></div>
                  </div>
                </div>

                <div className={`ss:hidden ${styles.flexCenter}`}>
                         <Getstarted />
                </div>
    </section>
  )
}

export default Hero