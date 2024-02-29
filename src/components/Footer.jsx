import { Copyright } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
    return (
        <div className='text-slate-600 text-center pt-1'>
            <div className='w-full h-[1px] bg-slate-400'></div>
            <div className='flex items-center justify-center pt-1'><Copyright></Copyright> all rights are reserved</div>
            <div>2022</div>
        </div>
    )
}
