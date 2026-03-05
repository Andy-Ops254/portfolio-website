import React from 'react'
import { ArrowBigDown, CatIcon, Download } from 'lucide-react'


function Hero() {

    function handleClick () {
        document.getElementById("about").scrollIntoView({
            behavior:"smooth"
        })
    }
  return (
    <div className='flex flex-col justify-center items-center px-6 text-center mx-auto max-w-3xl mt-32'>
        <p className=' mb-4 text-sm font-mono text-[#049188] tracking-tight text-primary'>
            Hi, my name is
        </p>

        <h1 className='font-bold text-white text-6xl sm:text-6xl lg:text-7xl text-balance tracking-tight font-serif'>
            Andrew Rimongi.
        </h1>

        <h2 className='font-semibold text-gray-400 text-3xl tracking-tight text-pretty sm:text-4xl lg:text-5xl mt-3'>
            I solve problems using code.
        </h2>

        <h3 className='text-base text-pretty leading-relaxed text-gray-400 sm:text-lg mt-6 mx-auto max-w-xl'>
            I’m a Full-Stack Engineer dedicated to building scalable, <br />
            user-friendly applications that solve real problems. <br />
            I specialize in turning complex ideas into intuitive digital experiences, <br />
            focusing on performance, reliability, and long-term growth. <br />
            My work is driven by a passion for creating products that make a meaningful impact.
        </h3>
        <div className='flex flex-row gap-4 mt-10 items-center justify-center' >
            <button className='text-white px-6 py-3 border border-gray-400 
            bg-gray-700 text-sm font-medium rounded-lg hover:border-[#049188] hover:text-[#049188] transition-all inline-flex gap-2'>
                <CatIcon className='h-4 w-4' />
                GitHub
            </button>

            <button className='bg-[#049188] px-6 py-3 text-sm font-medium rounded-lg hover:text-white
            transition-all hover:opacity-80 inline-flex gap-2 justify-center align-middle
            '>
                <Download  className='h-4 w-4'/>
                Download CV
            </button>
        </div>
        ,<button  onClick={handleClick}>
            <ArrowBigDown className='h-5 w-5 bg-black text-gray-400 
            mt-28 animate-bounce ease-in-out duration-1000' />
        </button>
    </div>
  )
}

export default Hero