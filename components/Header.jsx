import React,{uesContext, useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Link from 'next/link'
import {getCategories} from '../services'

const Header = ({showSidebar}) => {
    const [categories, setCategories] = useState([])
useEffect(() => {
   getCategories().then((newCategories)=>setCategories(newCategories))
}, [])

    return (
        <div className='bg-blue-200 w-[100%] mx-auto flex md-px-15 px-10 mb-8 items-center'>
            <div className='border-b w-full inline-block border-blue-100 py-8'>
            <div className='flex flex-row align-center'>
          <div className='md:float-left block'>
          <Link href='/'>
          <span className='cursor-pointer font-bold text-4xl text-white drop-shadow-lg'>
             Derah Blog
          </span>
          </Link>
          </div>
          <FaBars 
          onClick={showSidebar}
          className='float-right md:hidden block align-middle text-white ml-auto font-semibold text-4xl cursor-pointer drop-shadow-lg'/>
          </div>
          <div className= 'hidden md:float-left md:contents'>
           {categories.map((category)=>{
             return(
                 <Link key={category.slug} href={`/category/${category.slug}`}>
                 <span className='md:float-right -mt-4 align-middle text-white ml-4 font-semibold cursor-pointer drop-shadow-lg'>
                 {category.name}
                     </span></Link>
             )
           })}
          </div>
            </div>
        </div>
    )
}

export default Header
