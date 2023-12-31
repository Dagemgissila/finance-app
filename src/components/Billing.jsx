import {apple , bill ,google} from "../assets";
import styles,{layout} from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
               <img src={bill}  alt="bill" className="w-[100%] h-[100%] relative z-[0]" />
        </div>
        <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
         <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing 
          ultrices ametodio aenean neque. Fusce ipsum orci rhoncus 
          aliporttitor integer platea placerat.</p>
              <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                      <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                      <img src={google} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
              </div>
        </div>
    </section>
  )
}

export default Billing
