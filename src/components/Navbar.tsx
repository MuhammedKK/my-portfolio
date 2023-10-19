import { useState } from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
// @ts-ignore
import { menu, close } from '../assets'


const Navbar = () => {

  // STATES
  const [active, setActive] = useState<string>("")
  const [isToggle, setIsToggle] = useState<boolean>(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link className='flex items-center gap-2' to="/" onClick={() => {
          setActive("");
          window.scrollTo()
        }}>
          <p className='text-white text-[18px] font-bold cursor-pointer'><span className='text-purple-500/90'>MK</span>halid</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* @ts-ignore */}
          {navLinks.map((link:{id:number, title:string}) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-white'
                : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`
              }
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={isToggle ? close : menu} 
              alt="menu" 
              className="w-[28px] h-[28px] object-contain cursor-pointer" 
              onClick={() => setIsToggle(!isToggle)} 
            />
            <div className={`${!isToggle ? 'hidden' : 'flex'} p-6 black-gredient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {/* @ts-ignore */}

                {navLinks.map((link:{id:number, title:string}) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                      ? 'text-white'
                      : 'text-secondary'
                      } hfont-poppins font-medium cursor-pointer tex-[16px]`
                    }
                    onClick={() => {
                      setActive(link.title);
                      setIsToggle(!isToggle)
                    }}
                  >
                    <a href={`#${link.title}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar