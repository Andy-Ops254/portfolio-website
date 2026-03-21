import React from 'react'
import { ExternalLink, Folder, Github } from 'lucide-react'

function Projects() {
    const project = [
        {
            title: "Bible chat",
            description:
            "A bible devotion app that sends daily readings to the user and enables a user to chat with a chatbot that returns verses based on user fellings",
            tech: ['React', 'python','flask', 'PostgreSQL', 'Bible.Api'],
            github: "https://github.com/Andy-Ops254/bible_chat"
        },

        {
            title: "Mental Wellness App",
            description:
            "The App is a full-stack web application designed to help users set goals, track progress, and receive support for their personal growth and mental well-being.",
            tech:['React', 'CSS', 'Flask', 'Flask-SQLAlchemy', 'postgreSQL'],
            github:"https://github.com/Andy-Ops254/group-7-project?tab=readme-ov-file",
            live:"https://group-7-project-2.onrender.com"
        },

        {
            title: "Baskteball Program manager",
            description: 
            "A command-line interface (CLI) application for managing basketball teams, players, and managers",
            tech: ["python", "SQLalchemy"],
            github:"https://github.com/Andy-Ops254/Basketball_program_manager_Project_p3"
        }
    ]
  return (
    <div className='max-w-6xl mx-auto mb-32'>
        <div>
            <h1 className='font-bold tracking-tight '>
                <span className='font-mono text-[#049778] text-sm '>
                    03.
                </span>
                <span className='font-serif md:text-4xl lg:text-5xl text-white '>
                    Projects
                </span>
            </h1>

            <p className='text-gray-400 my-12 sm:text-lg leading-relaxed max-w-2xl'>
                These are some of the projects i have worked on. <br />
                Each has taught me valuable software engineering skills.
            </p>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {project.map((item, index) => (
            <div
            className='group relative overflow-hidden rounded-xl border 
            border-gray-400 hover:border-[#049778]/30 p-6 bg-[#0a0a0a]'
            key={index}>
            <div className='flex items-center mb-4 justify-between'>
            <Folder className='h-6 w-6 text-gray-400 text-bold group-hover:text-[#049778]' />
            <div className='flex gap-3'>
                {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer noopener">
                    <Github className="h-5 w-5 text-gray-400" />
                </a>
                )}
                {item.live && (
                <a href={item.live} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="h-5 w-5 text-gray-400" />
                </a>
                )}
            </div>
            </div>

            <h3 className='text-white font-semibold text-xl group-hover:text-[#049778]'>
                {item.title}
            </h3>

            <p className='text-gray-400 mt-3'>
                {item.description}
            </p>

            <div className='flex flex-wrap gap-3 mt-6'>
                {item.tech?.map((t, idx) => (
                <span key={idx} 
                className="rounded-md bg-[#262626] px-2.5 py-1 font-mono text-xs text-gray-300">
                    {t}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
)
}

export default Projects