import React from 'react'
import Card from '../global components/Card'
import netflix from "../public/images/project1.png"
import tours from "../public/images/project2.png"
import text from "../public/images/project3.png"
import game from "../public/images/project4.png"

const projects = [
    {
        name: "Netflix clone",
        image: netflix,
        stack: "React Js, Express Js, MongoDB, Tailwind CSS",
        source: "https://github.com/KaraleTanmay/netflix-clone-react-frontend",
        description: "This is a full stack netflix light clone which provides functionality of watching trailers and movies according to selected genere and also has working authentication and authorizastion system"
    },
    {
        name: "Tour and Tourism API",
        image: tours,
        stack: "Express Js, MongoDB, Pug",
        source: "https://github.com/KaraleTanmay/Tour-and-tourism-API-with-backend",
        description: "This is a fully functional API which provides various tours and their information to clients and also has working authentication and authorizastion system,"
    },
    {
        name: "Text Converter",
        image: text,
        stack: "React Js",
        source: "https://github.com/KaraleTanmay/Text-converter",
        description: "This is a simple react app which performs various operations on entered text such as capitalizing words or replacing a specific word"
    },
    {
        name: "Infinity Quest-Pygame",
        image: game,
        stack: "Python, Pygame, Photoshop",
        source: "https://github.com/KaraleTanmay/Infinity-Quest",
        description: "This is a 2D game made with pygame. The game is similar to famous game super mario. This game won Python Hackathon 2022,IIT Bombay"
    }
]

export default function Projects() {



    return (
        <div className='text-white'>
            <h1 className='text-6xl my-2'>Projects</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-x-32'>
                {projects.map((element, i) => {
                    return (
                        <Card project={element} key={i}></Card>
                    )
                })}
            </div>
        </div>
    )
}
