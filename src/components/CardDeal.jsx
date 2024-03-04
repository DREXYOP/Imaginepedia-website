import React from 'react'
import { robot2 } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>What Do We Do? </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We test, evaluate, build and work on new ways to use AI/ML in different fields of science, technology and other stuff. Contact Us if you need any help.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={robot2}
          alt='robot2'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
