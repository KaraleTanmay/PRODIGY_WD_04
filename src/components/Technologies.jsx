import React from 'react'
import Tag from '../global components/Tag'

const techs = [
    {
        name: "Front-end",
        stack: ["React Js", "Tailwind CSS", "BootStrap"]
    },
    {
        name: "Back-end",
        stack: ["Node Js", "Express Js", "MongoDB", "Postman"]
    },
    {
        name: "Languages",
        stack: ["Python", "C & C++", "JavaScript"]
    },
    {
        name: "Designing",
        stack: ["Photoshop", "Blender 3D"]
    }
]

export default function Technologies() {

    return (
        <div className='text-white mt-4 mb-8'>
            <h1 className='text-6xl my-4'>Technologies</h1>
            <p className='text-lg my-2'>I have experience in many modern technologies and have created many projects with them.</p>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                {techs.map((element, i) => {
                    return (
                        <Tag technology={element} key={i}></Tag>
                    )
                })}
            </div>
        </div>
    )
}
