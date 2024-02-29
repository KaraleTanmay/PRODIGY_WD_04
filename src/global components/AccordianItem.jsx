import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { useState } from 'react'
import AccordianSubItem from './AccordianSubItem'

export default function AccordianItem(props) {

    const [view, setView] = useState(false)

    const handleViewChange = () => {
        setView(!view)
    }

    return (
        <div className="w-4/5 m-auto">
            <div className='flex justify-between items-center pb-2 transition-all ease-in'>
                <span className='text-2xl'>{props.section.name}</span>
                <div onClick={handleViewChange}>
                    {view ? <KeyboardArrowUp fontSize='large'></KeyboardArrowUp> : <KeyboardArrowDown fontSize='large'></KeyboardArrowDown>}
                </div>
            </div>
            <div className={`${view ? "grid" : "hidden"}`}>
                {
                    props.section.info.map((element, i) => {
                        return (
                            <AccordianSubItem key={i} info={element}></AccordianSubItem>
                        )
                    })
                }

            </div>
            <div className='w-full h-[1px] bg-slate-600'></div>
        </div>
    )
}
