import React from 'react'

function Footer() {
  return (
    <div className='border-t border-gray-400 px-6 py-8 mt-32'>
        <div className='max-w-6xl mx-auto text-center'>
            <p className='text-xs text-gray-400 font-mono mb-2'>
                &copy;2026 Andrew
            </p>
            <p className='text-xs text-gray-400 font-mono'>
                Designed by ANDREW RIMONGI
            </p>

            <a href='https://github.com/Andy-Ops254/portfolio-website'
            target='_blank'
            rel='noopenner norefferer'
            className='mt-2 font-mono text-xs hover:text-[#048779] text-gray-400'
            >
                view on Github
            </a>
        </div>
    </div>
  )
}

export default Footer