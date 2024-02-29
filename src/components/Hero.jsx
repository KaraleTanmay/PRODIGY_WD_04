import { Email, Phone } from '@mui/icons-material'
import React, { useState } from 'react'
import Button from '../global components/Button'
import tanmay from "../public/images/myphoto.jpeg"

export default function Hero() {

    const [contact, setContact] = useState(false)
    const handleOnClick = () => {
        console.log("clicked");
        setContact(true)
    }


    return (
        <div className='sm:grid lg:flex lg:my-10 sm:my-3'>
            <div className='sm:w-3/4 lg:w-1/3 m-auto my-2'>
                <img src={tanmay} className="rounded-md" alt='mypic' />
            </div>
            <div className='text-white sm:w-full lg:w-1/2'>
                <h1 className='text-6xl lg:my-5 sm:my-1'>Welcome !</h1>
                <h2 className='text-2xl lg:my-3 sm:my-1'>Hey, I'm Tanmay Karale</h2>
                <div>
                    <p className='my-2'>
                        I am a Full-stack developer, Game developer, Python developer as well as 3D designer.
                    </p >
                    <p className='my-2'>I'm a college student and persuing my Electronics and TeleCommunication degree and open to work.</p>
                    <p className='my-2'>From modern UI to advanced animations, single page app to multipage   E-commerce websites, I can Create anything for you</p>

                </div>
                <div onClick={handleOnClick}>
                    <Button text="Hire Me" ></Button>
                </div>
                <div className={contact ? "grid" : "hidden"}>
                    <p> <Email></Email> tanmaykarale8112@gmail.com</p>
                    <p><Phone></Phone> 9373417442</p>
                </div>
            </div>
        </div>
    )
}
