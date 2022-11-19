import React,{useState, useEffect} from 'react';
import {FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import {getCategories} from '../services'

const Sidebar = ({show,hideSidebar}) =>{
    const [categories, setCategories] = useState([])
    useEffect(() => {
       getCategories().then((newCategories)=>setCategories(newCategories))
    }, [])
    return(
     <>
        <div>
        <div className={`transition-all ease-in-out duration-500 container transform -translate-x-full ${show && `transform translate-x-0`} fixed z-50 w-[100%] h-[100%] top-0 bottom-0 bg-blue-200 mx-auto flex mb-8`}>
        <div className='border-b w-full inline-block border-blue-100 py-8'>
        <div className='flex flex-row align-center px-10'>
      <div className='md:float-left block '>
      <Link href='/'>
      <span onClick={hideSidebar} className='cursor-pointer font-bold text-4xl text-white drop-shadow-lg'>
         Derah Blog
      </span>
      </Link>
      </div>
      <FaTimes 
      onClick={hideSidebar}
      className='float-right md:hidden block align-middle text-red-800 ml-auto font-semibold text-4xl cursor-pointer drop-shadow-lg'/>
      </div>
      {/*<h1 className='text-white text-4xl mt-[1cm] mb-[0.5cm] font-bold text-center'>Categories</h1>*/}
      <div className= 'flex flex-col mt-[1cm]'>
           {categories.map((category)=>{
             return(
                 <Link key={category.slug} href={`/category/${category.slug}`}>
                 <span onClick={hideSidebar} className={`mt-2 align-middle mx-10 pb-[0.25cm] hover:bg-blue-300 text-white text-xl font-semibold cursor-pointer drop-shadow-lg`}>
                 {category.name}
                     </span></Link>
             )
           })}
          </div>
      </div>
      </div>
      </div>
     </>
    )
}

export default Sidebar;