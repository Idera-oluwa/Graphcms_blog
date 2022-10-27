import React,{useState} from 'react'
import {Header, Sidebar} from './'

const Layout = ({children}) => {
    const [show, setShow] = useState(false)
    const showSidebar = ()=>{
        setShow(true)
    }
    const hideSidebar = ()=>{
        setShow(false)
    }
    return (
        <>
                <Sidebar hideSidebar={hideSidebar} show={show}/>
           <Header showSidebar={showSidebar}/>
           {children} 
        </>
    )
}

export default Layout
