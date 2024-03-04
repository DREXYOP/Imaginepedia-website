import React from 'react'
import { robot2 } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={robot2}
          alt='robot2'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>What Do We Do?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We test, evaluate, build and work on new ways to use AI/ML in different fields of science, technology and other stuff. Contact Us for more info.
        </p>
      </div>  
    </section>
  )
}

export default Billing
