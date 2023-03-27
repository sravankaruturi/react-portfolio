import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';

const MENU_LIST = [
    {
        href: "/", text: "Home"
    },
    {
        href: "/about", text: "About Me"
    },
    {
        href: "/cv", text: "CV"
    },
    {
        href: "/contact", text: "Contact Me"
    },
    {
        href: "/blog", text: "Dev Blog"
    },
]

function NavLink({to, children}){
  return (
  <a 
    href='{to}' 
    className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
    {children}
  </a>
  )
}

function MobileNavLink({to, elementText}){
  return(
    <a className="text-xl font-medium my-4" href={to} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
      {elementText}
    </a>
  )
}

function MobileNav({open, setOpen}){

  return (
<div className='z-10'>
    <div 
      className={`absolute top-0 left-0 h-screen w-screen bg-slate-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `
      }>
    <div className="flex items-center justify-center filter drop-shadow-md bg-slate-800 h-20">
      <Link href="/">
        <p className="text-xl font-semibold">Sravan Karuturi</p>
      </Link>
    </div>
    <div className="flex flex-col ml-4">
      {
        MENU_LIST.map((element, index) => {
          return (
            <MobileNavLink key={index} to={element.href} elementText={element.text} />
          )
        })
      }
    </div>  
</div>
</div>

  )

}

function Navbar(){

    const [open, setOpen] = useState(false)

    return (
      
        <nav className='flex filter drop-shadow-md bg-slate-800 px-4 py-4 h-20 items-center text-white z-10'>
          <MobileNav open={open} setOpen={setOpen} />
          <div className='w-4/12 flex items-center'>
            <a href='#'>
              <h1 className='text-2xl font-semibold' href='/'>Sravan Karuturi</h1>
            </a>
          </div>
          <div className='w-8/12 flex justify-end items-center'>
            <div 
              className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
              onClick={() => {setOpen(!open)}}
            >
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
              <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
            </div>

            <div className="hidden md:flex">
            {
              MENU_LIST.map((element, index) => {
                return (<NavLink key={index} to={element.href}>{element.text}</NavLink>)
              })
            }
          </div>

          </div>

          

        </nav>

    );

}

export default Navbar;