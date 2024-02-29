import { FiberManualRecordOutlined } from '@mui/icons-material'
import React from 'react'

export default function AccordianSubItem(props) {
    return (
        <div className='py-2 w-4/5 m-auto flex'>
            <div><FiberManualRecordOutlined></FiberManualRecordOutlined></div>
            <div>
                <div className='text-xl'>{props.info.name}</div>
                <div className='text-lg'>{props.info.from}</div>
                <div className='text-md'>{props.info.time}</div>
            </div>
        </div>
    )
}
