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
          variants={textVariant()}
        > 
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p 
            variants={fadeIn("","", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit cum alias laudantium rerum soluta incidunt harum. Sed facilis dolore ullam praesentium consectetur veritatis illum. Fugit, rem. Est, consequuntur excepturi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod neque optio. Velit molestias, in doloribus atque, aut nobis vitae quisquam itaque omnis laborum ducimus blanditiis quos. Nobis, minus molestiae?
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