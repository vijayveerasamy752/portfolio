import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
   const [toggleMenu,settoggleMenu] =useState(false)
    return <header className="flex justify-between px-5 bg-thirdly py-2" id='Header'>
        <a  className="font-hero-font text-black" href="#">Hello</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>
         { toggleMenu&&<nav className="block md:hidden ">
        <ul  onClick={()=>settoggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick ={()=>settoggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
}