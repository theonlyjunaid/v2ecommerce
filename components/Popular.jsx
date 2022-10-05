import { mobile } from "../data/mobilee"
import Link from "next/link"


export default function Popular() {
    return (
        <div className='mb-20'>
            <div className='pl-[8%] text-2xl mb-2 md:text-4xl md:font-semibold'>
                <p>Popular</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 w-screen items-center">

                <Link href='/apple'><a> <div className=" md:w-[320px]">
                    <img src={mobile.apple.model["iphone 14 pro max"]?.skin.plain} alt="" className="w-[280px]" />
                </div></a></Link>
                <Link href='/samsung'><a>  <div className=" md:w-[320px]">
                    <img src={mobile.samsung.model["s22 ultra"]?.skin.plain} alt="" className="w-[280px]" />
                </div> </a></Link>
            </div>
        </div >
    )
}
