import { motion } from 'framer-motion'
import {Typewriter} from 'react-simple-typewriter'
import image from '../../assets/images/launching.svg'

const Hero = () => {

  const iconVariants = {
    hidden: {y: -10},
    show: {
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1
      }
    }
  }

  const imageVariants = {
    hidden: {scale: 1, y: -10},
    show: {
      scale: 1.1,
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1
      }
    }
  }
  
  return (
    <div className="header__hero">

      <motion.h1
        initial={{y: '-100vh'}}
        animate={{y: 0}}
        transition={{
          duration: 1,
          ease: 'backOut'
        }}
      >Luis Fernando Perez Varajas</motion.h1>

      <motion.h2
        initial={{y: '-150vh'}}
        animate={{y: 0}}
        transition={{
          duration: 1,
          ease: 'backOut',
        }}
      >Desarrollador Front End
        <br />
        <Typewriter 
            words={[' Html', ' Css', ' JavaScript', ' React', 'Redux', ' Bootstrap', 'Tailwind', ' Responsive']}
            loop
            cursor
            cursorStyle="|"
            deleteSpeed="100"
            typeSpeed="99"
        />
      </motion.h2>

      <a
        className="header__hero__button-cv"
        href='../cv.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >Ver cv</a>

      <motion.img 
        src={image}
        variants={imageVariants}
        initial='hidden'
        animate='show'
      />



      <div className="header__hero__arrow-down">
        <a
          href='#sobre-mi'
        ><motion.i 
          className="fas fa-arrow-alt-circle-down"
          variants={iconVariants}
          initial='hidden'
          animate='show'
          ></motion.i>
        </a>
      </div>

    </div>
  )
}

export default Hero