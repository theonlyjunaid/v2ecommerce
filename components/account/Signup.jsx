import React from 'react'
import Link from 'next/link'

function Signup() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold">Signup</h1>
                    <form className="flex flex-col items-center justify-center w-full h-full">
                        <input type="text" placeholder="Full Name" className="w-80 h-10 px-2 my-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                        <input type="text" placeholder="Username" className="w-80 h-10 px-2 my-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                        <input type="password" placeholder="Password" className="w-80 h-10 px-2 my-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                        <input type="password" placeholder="Confirm Password" className="w-80 h-10 px-2 my-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                        <button className="w-80 h-10 my-2 bg-blue-500 rounded-lg text-white">Signup</button>
                        <Link href="/account/login"><a > <button className="w-80 h-10 my-2 bg-green-500 rounded-lg text-white">Already Have an Account</button></a></Link>
                    </form>
                </div>
            </div>
            <div></div>

        </>
    )
}

export default Signup