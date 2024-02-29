import React from 'react'

export default function Button(props) {
    return (
        <>
            <button className='my-3 px-5 min-w-[100px] bg-gradient-to-r from-button1 to to-button2 sm:min-h-[30px] lg:min-h-[40px] sm:rounded-md lg:rounded-xl'>{props.text}</button>
        </>
    )
}
