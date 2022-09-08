import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Aboutcard from '../components/aboutcard'
import Footercard from '../components/footercard'
import Icon from "../assets/phone.png"
import Icon2 from "../assets/email.png"
import Icon3 from "../assets/location.png"

import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"

export default function Contact() {
    return (
        <React.StrictMode>

            <Navbar />
            <div className="pt-36 py-8" style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>
                <div className="w-[90%] mx-auto rounded-3xl bg-white">
                    <div>
                        <Heading data={{ head: "Contact" }} />
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1'>
                        <div className='lg:pl-16 md:px-16 p-5'>

                            <Aboutcard card={{ width: "w-8", space: "py-10", logo: Icon, tittle: "Phone :", color: "bg-[#FCF4FF]", para: "+92 321 4835379" }} />
                            <Aboutcard card={{ width: "w-8", space: "py-10", logo: Icon2, tittle: "Email :", color: "bg-[#F3FAFF]", para: "adilhameed 200 @gmail.com" }} />
                            <Aboutcard card={{ width: "w-8", space: "py-10", logo: Icon3, tittle: "Address :", color: "bg-[#F2F4FF]", para: "Lahore, Pakistan" }} />

                        </div>
                        <div className='col-span-2 bg-[#F8FBFB] p-10 space-y-10 md:mx-16 m-5'>
                            <h1 className='text-3xl'>I'm always open to discussing product</h1>
                            <strong className='text-3xl'>design work or partnerships.</strong>
                            <div>
                                <input type="text" placeholder='Name*' className='border-b-2   border-gray-500 w-full py-5 placeholder-black  my-3  bg-[#F8FBFB] focus:ring-red-500 ' />
                                <input type="text" placeholder='Email*' className='border-b-2  border-gray-500 w-full py-5 placeholder-black  my-3  bg-[#F8FBFB]' />
                                <input type="text" placeholder='Message*' className='border-b-2  border-gray-500 w-full py-5 placeholder-black  my-3  bg-[#F8FBFB]' />
                           </div>
                            <button className='border-2 border-gray-500 font-bold rounded-xl py-2 px-6 '>Submit</button>
                        </div>


                    </div>
                    <div>
                        <Footercard foot={{para:"© 2022 All Rights Reserved by Adil Hameed"}}/>
                    </div>


                </div>
            </div>
        </React.StrictMode>
    )
}