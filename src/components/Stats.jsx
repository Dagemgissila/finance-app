import React from 'react';
import { stats } from '../constants';
import styles from '../style';
const Stats = () => {
  return (
    <section  className={`${styles.flexCenter} flex-row justify-around flex-wrap sm:mb-20 mb-6`}>
          {
            stats.map((stat,index)=>(
              <div key={stat.id} className='flex-1 flex justify-start flex-row items-center m-3'>
                   <h4 className='text-white font-bold font-poppins
                    xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>

                   <p className='text-gradient font-normal font-poppins
                    xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-1'>{stat.title}</p>
              </div>
            )
            ) 
          }
    </section>
  )
}

export default Stats