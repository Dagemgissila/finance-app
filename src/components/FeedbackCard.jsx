import {quotes }from "../assets";
import styles from "../style";

const FeedbackCrad = ({content,name ,title, img}) => {
  return (
     <div className='flex justify-between flex-col px-10 py-12
      rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5  mr-0 my-5 feedback-card'>
      <img src={quotes} alt="" className="w-[42px] h-[27px] object-contain"/>
      <p className={`${styles.paragraph} font-poppins font-normal
      text-[18px] leading-[32px] text-white my-10`}>{content}</p>
      <div className="flex flex-row items-center">
             <img src={img} alt="person" className="w-[50px] h-[50px] object-contain rounded-full" />
             <div>
              <p className={`font-poppins font-semibold text-white text-[20px] ml-2`}>{name}</p>
              <p className={`${styles.paragraph} text-[16px] font-poppins ml-2`}>{title}</p>
             </div>
      </div>
     </div>
  )
}

export default FeedbackCrad