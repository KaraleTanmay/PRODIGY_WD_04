import React from 'react'
import Button from './Button'
import Divider from './Divider'

export default function Card(props) {
    return (
        <div className='grid gap-y-3 my-8 shadow-md shadow-zinc-600'>

            <div>
                <h1 className='text-4xl mx-4'>{props.project.name}</h1>
            </div>
            <div className='mx-auto my-2'>
                <img src={props.project.image} alt="" />
            </div>
            <div className='mx-4 text-xl'>
                <h1>Tech stack :</h1>
                <h1>{props.project.stack}</h1>
            </div>
            <div className='flex justify-center'>
                <Divider className="m-auto"></Divider>
            </div>
            <div className='w-4/5 m-auto'>
                {props.project.description}
            </div>
            <div className='flex justify-around'>
                <a href={props.project.source}>
                    <Button text="Source Code"></Button>
                </a>
            </div>
        </div>
    )
}
