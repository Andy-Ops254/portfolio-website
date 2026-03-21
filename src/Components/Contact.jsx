import React from 'react'
import {Github, Mail, Phone,Linkedin, MessageCircle,} from 'lucide-react'
import { href } from 'react-router-dom'

function Contact() {
    const socialLinks = [
        {
            label:"github",
            icon: Github,
            href:"https://github.com/Andy-Ops254"
        },

        {
            label:"Linkedin",
            icon:Linkedin,
            href:"https://www.linkedin.com/in/rimongi-waruiru-655614396/"
        },

        {
            label:"Gmail",
            icon:Mail,
            href:"https://mail.google.com/mail/?view=cm&fs=1&to=arimongi.com@gmail.com"
        }
    ]
  return (
    <div id='contact' className='max-w-3xl mx-auto text-center'>
        <div className='mb-16'>
            <h1 className=' gap-4'>
                <span className='font-mono text-[#049778] font-bold text-sm'>
                    04.
                </span>
                <span className='font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white '>
                    Get in Touch
                </span>
            </h1>
            <p className='text-gray-400 text-lg mt-4 text-pretty'>
                I'm always open to new opportunities and interesting projects. <br />
                Whether you have a question or just want to say hi, feel free to reach out.
            </p>
        </div>

            <div className='flex flex-row gap-4 items-center sm:justify-center sm:gap-6'>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=arimongi.com@gmail.com'
                target='_blank'
                rel='norefferer noopener'
                className='px-6 py-4 inline-flex gap-4 justify-center items-center w-full rounded-xl border 
                border-gray-600 transition-all bg-[#0a0a0a] hover:border-[#049778]/30 group hover:text-[#049778]'
                >
                    <Mail className='h-5 w-5 text-[#049778]'/>
                    <span className='text-sm font-medium text-white group-hover:text-[#049778]'> 
                        arimongi.com@gmail.com
                    </span>
                </a>

                <a href='https://wa.me/254725843316?text=Hello%20there%20,.'
                target='_blank'
                rel='noopenner noreferrer'
                className='px-6 py-4 inline-flex gap-4 justify-center items-center w-full rounded-xl border 
                border-gray-600 transition-all bg-[#0a0a0a] hover:border-[#049778]/30 group hover:text-[#049778]'
                >
                    <MessageCircle className='h-5 w-5 text-[#049778]'/>
                    <span className='text-sm font-medium text-white group-hover:text-[#049778]'>
                        +254725843316
                    </span>
                </a>
            </div>

            <div className='flex flex-row gap-5 items-center justify-center mt-10 '>
                {socialLinks.map((item)=> (
                    <a 
                    key={item.label} 
                    href={item.href}
                    target='_blank'
                    rel='noopenner noreferrer'
                    className='h-11 w-11 flex  gap-4  justify-center items-center rounded-xl border 
                border-gray-600 transition-all bg-[#0a0a0a] hover:border-[#049778]/30 group hover:text-[#049778]'
                    > 
                        <item.icon className='h-5 w-5 text-gray-400 group-hover:text-[#049778]' />
                    </a>
                ))}
            </div>
    </div>

  )
}

export default Contact