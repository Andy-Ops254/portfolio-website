import React from 'react'
import { useEffect, useState, useRef } from 'react'


function Navbar() {
    const [isScrolling, setIsScrolling]=useState(false)

    const timeRef = useRef(null)

    // this effect has a function that sets state and clears previous timers and sets a new one when a user interracts with it
    useEffect(() => {
        function handScroll () {
            setIsScrolling(true)
            clearTimeout(timeRef.current)
            timeRef.current = setTimeout(() => setIsScrolling(false), 150)
        }
        window.addEventListener("scroll", handScroll)

        return (() => window.removeEventListener("scroll", handScroll))

    },[])
  return (
    <div className= {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolling
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent"
    }`}>
        <nav className='flex flex-row justify-between mx-auto max-w-6xl px-6 py-4'>
            <h1 className='text-[#049188] font-bold font-mono text-lg tracking-wider'>
                {'<A.RIMONGI />'}
            </h1>

            <div className='flex flex-row gap-8 justify-center text-gray-300 font-mono text-lg'>
                <a href='#about' 
                className='hover:opacity-60'>
                    About
                </a>

                <a href='#tech'
                className='hover:opacity-60'>
                    TechStack
                </a>

                <a href='#projects' 
                className='hover:opacity-60'>
                    Projects
                </a>

                <a href='#contact' 
                className='hover:opacity-60'>
                    Contact 
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

