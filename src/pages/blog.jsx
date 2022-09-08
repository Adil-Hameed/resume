import React from 'react'
import Image1 from "../assets/bg.54122ef3ac6eced211d3.jpg"
import Blogcard from '../components/blogcard'
import img1 from "../assets/1.5da97bc494017804e9df.jpg"
import img2 from "../assets/4.0e4876b305a3d30ecf1e.jpg"
import img3 from "../assets/2.2a5042442f4461042991.jpg"
import img4 from "../assets/5.jfif"
import img5 from "../assets/3.ae63564f65191dfc9373.jpg"
import img6 from "../assets/6.9229deffb156cdcbfd61.jpg"
import Navbar from "../components/Navbar"



export default function Blog() {
    return (
        <React.StrictMode>
            <Navbar />
            <div className='pt-36 py-8' style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100% 100%" }}>
                <div className=' bg-white w-[90%]   mx-auto rounded-tl-3xl rounded-tr-3xl p-10 space-y-5'>
                    <div className='flex items-center'>
                        <h1 className='text-4xl font-bold'>Blogs </h1>
                        <hr className='bg-red-500 h-[0.1rem] border-none w-60 ml-5' />
                    </div>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        <div className=''>
                            <Blogcard src={img1} date="177 April . Inspiration" head="How to Own Your Audience by Creating an Email List." bd="bg-gray-100 p-6 rounded-lg bg-blue-100" />
                        </div>
                        <div>
                            <Blogcard src={img2} date="000 April . Inspiration" head="Everything You Need to Know About Web Accessibility." bd="bg-gray-100 p-6 rounded-lg bg-yellow-100" />
                        </div>
                        <div>
                            <Blogcard src={img3} date="21 April . Web Design" head="The window know to say beside you" bd="bg-gray-100 p-6 rounded-lg bg-indego-100" />
                        </div>
                        <div className=''>
                            <Blogcard src={img4} date="27 April . Inspiration" head="Top 10 Toolkits for Deep Learning in 2021." bd="bg-gray-100 p-6 rounded-lg bg-red-100" />
                        </div>
                        <div>

                            <Blogcard src={img5} date="27 April . Inspiration" head="How to Own Your Audience by Creating an Email List." bd="bg-gray-100 p-6 rounded-lg bg-pink-100" />
                        </div>
                        <div>
                            <Blogcard src={img6} date="27 April . Web Design" head="Everything You Need to Know About Web Accessibility." bd="bg-gray-100 p-6 rounded-lg bg-green-100" />
                        </div>
                    </div>

                </div>
                <div className='bg-[#F8FBFB] w-[90%] rounded-bl-3xl rounded-br-3xl mx-auto py-5 text-center text-gray-600'>
                    <p>© 2022 All Rights Reserved by Adil Hameed</p>

                </div>
            </div>
        </React.StrictMode>
    )
}
