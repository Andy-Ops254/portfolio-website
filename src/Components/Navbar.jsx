import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { List } from 'lucide-react'


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

    // function to toggle mobile menu
    function toggleMobileMenu () {
        // get element by id
        const menu = document.getElementById('mobileMenu')

        // here we check if the element has class hidden if it does we remove it, if not we add it

        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden')
        }
        else {
            menu.classList.add('hidden')
        }

    }
  return (
    <div className= {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolling
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent"
    }`}>
        <nav className='flex flex-row justify-between mx-auto max-w-6xl px-6 py-4'>
            <h1 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            className='text-[#049188] font-bold font-mono text-lg tracking-wider'>
                {'<A.RIMONGI />'}
            </h1>

            <div 
            className=' hidden md:flex flex-row gap-8 justify-center text-gray-300 font-mono text-lg'>

            
                <a href='#about'
                className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                >
                    About
                </a>

                <a href='#tech'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                    TechStack
                </a>

                <a href='#projects' 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1400"
                className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                    Projects
                </a>

                <a href='#contact' 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600"
                className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                    Contact 
                </a>
            </div>
            {/* mobile menu */}
            <button 
            onClick={toggleMobileMenu}
            className='text-gray-300 md:hidden h-5 w-5 z-50'>
                <List />
            </button>

            <div
            id='mobileMenu'
            className='hidden fixed top-16 right-0 bottom-0 left-0 p-5 md:hidden z-40 bg-[#0a0a0a] opacity-70 backdrop-blur-xl'>
                <nav className='flex flex-col gap-8 justify-center items-center text-gray-300 font-mono text-lg'>
                    <a href='#about'
                    className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    >
                        About
                    </a>

                    <a href='#tech'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200"
                    className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                        TechStack
                    </a>

                    <a href='#projects' 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1400"
                    className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                        Projects
                    </a>

                    <a href='#contact' 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1600"
                    className='hover:text-[#049778]/80 transition-opacity duration-200 ease-in-out'>
                        Contact 
                    </a>
                </nav>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

