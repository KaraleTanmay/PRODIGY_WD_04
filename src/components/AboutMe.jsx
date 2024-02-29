import React from 'react'
import AccordianItem from '../global components/AccordianItem'

const aboutMe = [
    {
        name: "Education",
        info: [
            {
                name: "Electronics and TeleCommunication Degree",
                from: "Pune Institite of Computer Technology",
                time: "2021-2025"
            },
            {
                name: "HSC Board",
                from: "RMD english medium school and Jr. college",
                time: "2021"
            },
            {
                name: "SSC Board",
                from: "Shri Bhairavnath Vidyalaya, Awasari KH",
                time: "2019"
            }
        ]
    },
    {
        name: "Accomplishments",
        info: [
            {
                name: "Winner Of Python Hackathon 2022",
                from: "By FOSSEE, IIT Bombay",
                time: "2022"
            },
            {
                name: "1st Runner up in Game Jam 2022",
                from: "By AIT Pune",
                time: "2022"
            },
            {
                name: "2nd Place in Quiz Competition",
                from: "By IIUCA, Pune",
                time: "2019"
            },
            {
                name: "Awarded Ideal Student Award",
                from: "By Shri Bhairavnath Vidyalaya, Awasari KH",
                time: "2019"
            }
        ]
    },
    {
        name: "Position of Responsibility",
        info: [
            {
                name: "Core Team member",
                from: "GDSC Web-dev team PICT",
                time: "2022"
            }
        ]
    },
    {
        name: "Internships",
        info: [
            {
                name: "No any"
            }
        ]
    }
]

export default function AboutMe() {



    return (
        <div className='text-white'>
            <h1 className='text-6xl my-4'>About me</h1>
            {aboutMe.map((element, i) => {
                return (
                    <AccordianItem key={i} section={element}></AccordianItem>
                )
            })}

        </div>
    )
}
