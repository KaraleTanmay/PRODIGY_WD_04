import { Cyclone, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Navbar() {

    const handleProjectLink = () => {

        window.scrollBy(0, 620)
    }
    const handleTechnologyLink = () => {

        window.scrollBy(0, 2010)
    }
    const handleaboutLink = () => {

        window.scrollBy(0, 2450)
    }

    return (
        <div className='w-full text-white flex min-h-12 items-center sm:justify-between lg:justify-around sm:py-1 lg:py-4'>
            <div className='flex items-center gap-x-5 text-4xl'>
                <Cyclone fontSize="inherit"></Cyclone>
                <span>Portfolio</span>
            </div>
            <div className='sm:hidden lg:flex'>
                <div className='flex gap-20 text-lg'>
                    <div className='cursor-pointer' onClick={handleProjectLink}>Projects</div>
                    <div className='cursor-pointer' onClick={handleTechnologyLink}>Technologies</div>
                    <div className='cursor-pointer' onClick={handleaboutLink}>About me</div>
                </div>
            </div>
            <div className='flex gap-x-5 px-2'>
                <a href='https://github.com/KaraleTanmay'>
                    <GitHub className='cursor-pointer'></GitHub>
                </a>
                <a href="https://www.linkedin.com/in/tanmay-karale-73b09422a/">
                    <LinkedIn className='cursor-pointer'></LinkedIn>
                </a>
                <a href="https://www.instagram.com/mr_tanmay_karale/">
                    <Instagram className='cursor-pointer'></Instagram>
                </a>
            </div>
        </div>
    )
}
