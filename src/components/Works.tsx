import {motion} from 'framer-motion'
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import {projects} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import ProjectCard from './cards/ProjectCard'
const Works = () => {
  return (
    <>
        <motion.div
          variants={textVariant(0)}
        > 
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p 
            variants={fadeIn("","", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Explore a curated selection of impactful projects that showcase my expertise as a Frontend Engineer. From e-commerce platform transformations to real-time collaboration tools, each project represents a unique journey of innovation, problem-solving, and a commitment to delivering exceptional user experiences. Dive into the details of these endeavors to witness firsthand the fusion of cutting-edge technologies and creative solutions in the realm of frontend development
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project:any, index:number) => (
            <ProjectCard key={index} index={index} {... project} />            
          ))}
        </div>
    </>
  )
}

export default SectionWrapper({Component: Works, idName: 'projects'})