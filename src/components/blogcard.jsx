
export default function Blogcard(props) {
    return (

        <div className="md:p-5">

            <div className={props.bd}>

                <div className='rounded-lg overflow-hidden mb-6'>
                    <img className="h-full rounded w-full object-cover object-center transition duration-200 ease-in-out transform hover:scale-110 cursor-pointer" src={props.src} alt="content" />

                </div>
                <h3 className="tracking-widest text-sm font-medium title-font">{props.date}</h3>

                <p className="leading-relaxed text-lg font-bold mt-4 duration-300 transform hover:text-red-600">{props.head}</p>
            </div>
        </div>
    )
}