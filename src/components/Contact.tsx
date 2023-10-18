import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {slideIn} from '../utils/motion'
import Input from '../shared/Input'
import  EarthCanvas  from './canvas/Earth'
import { toast } from 'react-toastify'

interface IForm {
  name: string;
  email: string;
  message: string;
}


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    if(form.name === "") {
      toast.warn('please fill the name')
      setLoading(false);
      return;
    } else if(form.name !== "" && form.email === "") {
      toast.warn('please fill the email');
      setLoading(false);
      return;
    } else if(form.name !== "" && form.email !== "" && form.message === "") {
      toast.warn('please fill the message');
      setLoading(false);
      return;
    } else {
      emailjs.send(
        'service_kuu5988',
        'template_53lrz8j',
        {
          from_name: form.name,
          to_name: "Muhammed Khalid",
          from_email: form.email,
          to_email: 'm.k.saadtech@gmail.com',
          message: form.message
        },
        'PzBPc6SCUtGFxQBWr'
      ).then(() => {
        setLoading(false);
        toast.success(`Thank you for contact me i'll response ASAP <3`);
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }).catch((err) => {
        toast.error(`Something was wrong please try again`)
      })
    }
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form ref={formRef.current} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <Input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='whats your name?'
              inputText='Your Name'
            />
            <Input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='whats your email?'
              inputText='Your Email'
            />
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7} 
                name="message" 
                value={form.message} 
                placeholder='whats your message'
                onChange={handleChange}
                className='bg-tertiary py-4 px-6 placeholder:text-secondaty text-white rounded-lg outlined-none border-none font-medium'
              >
              </textarea>
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
              onClick={handleSubmit}
            >
              {loading ? 'sending' : 'send' }
            </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div> 
    </div>
  )
}

export default SectionWrapper({Component: Contact, idName:""})