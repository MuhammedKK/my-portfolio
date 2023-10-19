import React from 'react'
interface IInput {
    type: string;
    name: string;
    value: string;
    onChange: (e:any) => void | any;
    placeholder: string;
    inputText: string
}

const Input = ({type, name, value, onChange, placeholder, inputText}:IInput) => {
  return (
    <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>{inputText}</span>
        <input 
            type={type}
            name={name} 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            className='bg-tertiary py-4 px-6 placeholder:text-secondaty text-white rounded-lg outlined-none border-none font-medium'  
        />
    </label>
  )
}

export default Input
