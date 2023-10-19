import { motion } from 'framer-motion';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion'
import ExperienceCard from './cards/ExperienceCard';
import {experiences} from '../constants'


const Experience = () => {
  return (
    <>
        <motion.div
          variants={textVariant(0)}
        > 
          <p className={styles.sectionSubText}>Here you can know about me more</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </motion.div>
        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((exp:any, index:number) => (
                <ExperienceCard experience={exp} key={index} />
              ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper({Component: Experience, idName: 'work'})