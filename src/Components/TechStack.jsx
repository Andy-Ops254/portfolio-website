import { Database, SoapDispenserDroplet } from 'lucide-react'
import React from 'react'

function TechStack() {
    const techStack = [
        {name:"Python", category:"Backend"},
        {name:"Javascript", category:"Frontend"},
        {name:"React",category:"Frontend"},    
        {name:"Flask", category:"Backend"},    
        {name:"SQL", category:"Database"},   
        {name:"MySQL", category:"Database"},     
        {name:"PostgreSQL", category:"Database"},
        {name:"Figma", category:"Design"},   
        {name:"Canva", category:"Design"},
        {name:"CSS", category:"Frontend"},
        {name:"Tailwind", category:"Frontend"},
        {name:"Python", category:"Language"},
        {name:"Javascript", category:"Language"},
        {name:"React", category:"Language"},
        {name:"Flask", category:"Language"}
    ]
    const categories = ["Language", "Frontend", "Backend", 'Database', "Design"]
    const categoriesColors = {
        Language: "bg-[#00bc7d]/10 text-[#00bc7d] text-semibold",
        Frontend: "bg-[#f64b2b]/10 text-[#f64b2b] text-semibold",
        Backend: "bg-[#008cf5]/10 text-[#008cf5] text-semibold",
        Database: "bg-[#d4203a]/10 text-[#d4203a] text-semibold",
        Design: "bg-[#7c28c9]/10 text-[#7c28c9] text-semibold"
    }
  return (
    <section className='px=6 py=24 lg:py-32'>
        <div className='mx-auto max-w-6xl '>
            <div className='mb-16'>
                <h2 className='font-bold tracking-tight leading-relaxed text-3xl sm:text-4xl text-white font-serif'>
                    <span className='font-mono text-sm text-[#049188]'>
                        02.
                        </span>
                    Technology Stack
                </h2>
                <p className='text-gray-400 sm:text-lg leading-relaxed mt-8'>
                    Technologies and tools i use to build scalable and reliable Applications
                </p>
            </div>
        <div>
            {categories.map((category) => {
                const items = techStack.filter((tech)=>tech.category===category)
                return (
                    <div key={category}>
                    <h3 className='text-xs tracking-widest text-gray-400 mb-4 font-semibold uppercase'>
                        {category}
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                        {items.map((tech) => (
                            <h2 className={`font-semibold text-sm px-4 py-2 inline-flex items-center rounded-lg border 
                            transition-all hover:scale-105 ${categoriesColors[category]} mb-4`}>
                                {tech.name}
                            </h2>
                        ))}
                    </div>
                    </div>
                )
            }
            )}
        </div>
        </div>

    </section>
  )
}

export default TechStack