import { mobile } from "../data/mobilee"
import Link from "next/link"


export default function Popular() {
    return (
        <div className='mb-20'>
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>
                <p>Popular</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 w-screen items-center">
                <Link href='/apple'><a> <div className=" grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative ">
                    <img src={mobile.apple.model["iphone 14 pro max"]?.skin.plain} alt="" className="w-[280px]" />
                </div></a></Link>
                <Link href='/samsung'><a>  <div className="grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative ">
                    <img src={mobile.samsung.model["s22 ultra"]?.skin.plain} alt="" className="w-[280px]" />
                </div> </a></Link>
            </div>
        </div >
    )
}
