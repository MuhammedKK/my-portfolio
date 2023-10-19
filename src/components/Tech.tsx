import { BallCanvas } from './canvas'
import {technologies} from '../constants'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((techno:any) => (
        <div className='w-28 h-28' key={techno.name}>
          <BallCanvas icon={techno.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech