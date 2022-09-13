// import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

import { front } from '../../public/front.png'

export default function ItemComponent(props) {
    // const router = useRouter()
    // const fileId = router.query.slug
    // console.log(fileId)

    const [image, setImage] = useState('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg');
    const [iphone, setIphone] = useState("");
    const [iphonepic, setIphonepic] = useState("");
    useEffect(() => {
        // setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647')
        setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647')
    }, []);

    return (
        <div className=' '>

            <div style={{ backgroundImage: "url(" + iphone + ")", backgroundRepeat: 'no-repeat' }} className='-ml-[50%] -mr-[50%] -mb-[50%]   md:m-0 scale-[50%]  md:scale-90 -mt-[55%] border border-black'>
                <img src={props.image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + iphonepic + ")", WebkitMaskRepeat: 'no-repeat' }} className='h-[790px] md:h-[820px] md:w-[720px] ' />
                {/* <img src={front} alt="baba" /> */}
            </div>
            {/* <div className='grid grid-cols-3 md:block` -mt-20 md:mt-0 mx-10 md:mx-0  ' >
                <p className='px-2 py-1 mx-1 my-3 bg-blue-300 cursor-pointer max-w-max h-8' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/03_802d4a58-d459-40a1-af5f-a3c04178ce94_600x.jpg')}>blue</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300 max-w-max h-8' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg')}>orange</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300 max-w-max h-8' onClick={() => setImage('https://img.etimg.com/thumb/msid-94143702,width-650,imgsize-99274,,resizemode-4,quality-100/brahmastra-ranbir-kapoor.jpg')}>Bhramastra</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-300 max-w-max h-8'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647') }}
                >
                    Iphone 12
                </p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-600 max-w-max h-8'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max_Color__Champagne-Gold.png?v=1661601361'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max-back.png?v=1661601360') }}
                >Redmi</p>
            </div> */}
        </div>
    )
}
