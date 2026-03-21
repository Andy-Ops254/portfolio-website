import React from 'react'
import {CodeXml, Layers, Zap} from 'lucide-react'



function About() {
    const highlights = [
      {
        icon: CodeXml,
        title: "Clean Code",
        description: "Writing maintainable, well-documented code that scales. I believe in pragmatic engineering over clever hacks.",
      },
      {
        icon: Layers,
        title: "Full-Stack",
        description: "From database design to pixel-perfect UIs, I work across the entire stack to deliver cohesive products.",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed and accessibility. Every millisecond matters when building for real users.",
      },
    ]
  return (
    <section id='about'>
    <div className='mx-auto max-w-6xl mt-40'>
        <h2 className='font-bold tracking-tight text-balance sm-text-4xl'>
            <span className='font-mono text-[#049188] text-sm'>
                01.
            </span>
         
            <span className='text-white text-4xl md:text-4xl lg:text-5xl font-serif'>
                About Me
            </span>
        </h2>

{/* this will be the main text for the section */}
        <div className='flex flex-row justify-between gap-12 mt-14'>
            <div className='lg:grid-cols-3'>
                <p className='text-pretty leading-relaxed text-gray-400 sm:text-lg'>

                    I am a Full-Stack Engineer with a strong passion for building scalable applications that solve real-world problems. <br />
                    I enjoy transforming ideas into reliable, user-focused digital experiences that are both efficient and impactful. <br />
                    My approach to development is grounded in writing clean, maintainable code while keeping long-term scalability and performance in mind. <br />

                    <br/>
                    Beyond coding, I actively explore emerging technologies and study how they can be thoughtfully integrated into my designs. <br />
                    Every opportunity I encounter is a chance to learn, refine my craft, and grow as an engineer. <br />
                    I am committed to continuous improvement, constantly sharpening my skills to deliver solutions that make a meaningful difference. <br />
                </p>
            </div>

            {/* the side cards for this section */}
            <div className='flex flex-col gap-6 lg:col-span-2'>
                {
                    highlights.map((item) => (
                        <div key={item.title} 
                        className='flex gap-4 rounded-xl border border-gray-600 p-5 transition-colors group hover:border-[#00bc7d]/30 bg-[#0a0a0a]'>
                        <div className='flex h-10 w-10 rounded-lg items-center justify-center shrink-0 bg-[#00bc7d]/10 text-[#00bc7d]'>
                            <item.icon  className='h-5 w-5'/>
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold text-white group-hover:text-[#04'>
                                {item.title}
                            </h3>
                            <p className='mt-1 text-sm text-gray-400 leading-relaxed'>
                                {item.description}
                            </p>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </section>
  )
}

export default About