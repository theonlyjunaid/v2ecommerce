
import Image from 'next/image'
import React, { useState, useEffect } from 'react'



function Populated(props) {
    const [state, setstate] = useState('');
    useEffect(() => {
        setstate(props.image)
    }, []);
    return (
        <div style={{ backgroundImage: "url(" + props.phone + ")", backgroundRepeat: 'no-repeat' }} className='scale-[100%]  md:scale-100 w-[620px] h-[800px] border border-black'>
            <Image src={state} style={{ webkitMaskImage: "url(" + props.skin + ")", WebkitMaskRepeat: 'no-repeat' }} layout='fill' />
            {/* <Image src={/bac} layout='fill' / > */}
        </div>
    )
}

export default Populated