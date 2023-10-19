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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore dolorum iure itaque laboriosam vitae ipsum. Quos dolore itaque debitis saepe eaque sed, culpa provident ut corporis voluptatibus officia quisquam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia pariatur voluptates cupiditate ut adipisci illo explicabo provident, et sint dolor minima deserunt recusandae, vero temporibus officiis a debitis. Dignissimos.
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