import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import ServiceCard from './cards/ServiceCard'
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Intro</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I believe in this quote very much "Success is not a destination , Success is a journey" . So I'll keep learning every day till my soul leave my body

        Frontend Engineer with over 1 year of experience in creating engaging and responsive web applications. Proficient in HTML, CSS, and JavaScript, Bootstrab, MaterialUI, Tailwinds, React, with a passion for crafting seamless user experiences. Committed to staying updated on industry trends and leveraging strong problem-solving skills to deliver innovative solutions. Open to collaboration and eager to contribute to dynamic development teams.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service:any, index:number) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper({Component: About, idName: 'about'})