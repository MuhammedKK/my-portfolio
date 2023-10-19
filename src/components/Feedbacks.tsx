import {motion} from 'framer-motion';
import { styles } from '../styles';
import {textVariant} from '../utils/motion';
import {testimonials} from '../constants'
import { SectionWrapper } from '../hoc';
import FeedbackCard from './cards/FeedbackCard';

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant(0)}>
          <p className={`${styles.sectionSubText}`}>What others say about me</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial:any, index:number) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper({Component: Feedbacks, idName: ""})