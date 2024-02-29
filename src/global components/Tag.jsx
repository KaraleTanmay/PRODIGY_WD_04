import { FiberManualRecordOutlined, FiberSmartRecord } from '@mui/icons-material'
import React from 'react'

export default function Tag(props) {
    return (
        <div className='flex gap-x-8 my-1'>
            <div>
                <FiberSmartRecord fontSize="large"></FiberSmartRecord>
            </div>
            <div className='grid'>
                <div className='text-3xl'>{props.technology.name}</div>
                {props.technology.stack.map((element, i) => {
                    return (
                        <div className='gap-x-1 flex items-center' key={i}>
                            <FiberManualRecordOutlined></FiberManualRecordOutlined>
                            <div className='text-xl'>{element}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
