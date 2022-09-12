// import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'



export default function ItemComponent() {
    // const router = useRouter()
    // const fileId = router.query.slug
    // console.log(fileId)

    const [image, setImage] = useState('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg');
    const [iphone, setIphone] = useState("");
    const [iphonepic, setIphonepic] = useState("");
    useEffect(() => {
        setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max_Color__Champagne-Gold.png?v=1661601361'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max-back.png?v=1661601360')
    }, []);

    return (
        <div className='bg-gray-600 grid grid-cols-1 md:grid-cols-2 '>

            <div style={{ backgroundImage: "url(" + iphone + ")", backgroundRepeat: 'no-repeat' }} className='-ml-[32%] md:ml-0 scale-50 -mt-20 border'>
                <div className='w-screen/2'  >
                    <img src={image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + iphonepic + ")", WebkitMaskRepeat: 'no-repeat' }} className=' h-screen ' />
                </div>
                <div>
                </div>
            </div>
            <div className=' '>
                <p className='px-2 py-1 mx-1 my-3 bg-blue-300 cursor-pointer max-w-max' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/03_802d4a58-d459-40a1-af5f-a3c04178ce94_600x.jpg')}>blue</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300 max-w-max' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg')}>orange</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300 max-w-max' onClick={() => setImage('http://139.59.70.63/asset/about/junaid.jpeg')}>Junaid</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300 max-w-max' onClick={() => setImage('https://img.etimg.com/thumb/msid-94143702,width-650,imgsize-99274,,resizemode-4,quality-100/brahmastra-ranbir-kapoor.jpg')}>Bhramastra</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-300 max-w-max'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647') }}
                >
                    Iphone 12
                </p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-600 max-w-max'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max_Color__Champagne-Gold.png?v=1661601361'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max-back.png?v=1661601360') }}
                >Redmi</p>
            </div>
        </div>
    )
}
