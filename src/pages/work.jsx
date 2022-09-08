import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Allcard from '../components/allslides'
import Footercard from '../components/footercard'
import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"

export default function Work() {
    return (
        <>
            <Navbar />
            <div className="pt-36 py-8 " style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>
                <div className='w-[90%] mx-auto rounded-3xl bg-white'>
                    <div>
                        <Heading data={{ head: "Portfolio" }} />
                    </div>
                    <div className='p-11'>
                        <Allcard />
                    </div>
                    <div>
                        <Footercard foot={{ para: "© 2022 All Rights Reserved by Adil Hameed" }} />
                    </div>
                </div>

            </div>
        </>
    )
}