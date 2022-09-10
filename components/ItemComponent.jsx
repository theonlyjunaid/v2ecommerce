import { useRouter } from 'next/router';
import React, { useState } from 'react'



export default function ItemComponent() {
    const router = useRouter()
    const fileId = router.query.slug
    console.log(fileId)

    const [image, setImage] = useState('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg');
    const [iphone, setIphone] = useState("https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max_Color__Champagne-Gold.png?v=1661601361");
    const [iphonepic, setIphonepic] = useState("https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max-back.png?v=1661601360");

    return (
        <div className='bg-gray-200'>
            <div className='flex'>
                <p className='px-2 py-1 mx-1 my-3 bg-blue-300 cursor-pointer' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/03_802d4a58-d459-40a1-af5f-a3c04178ce94_600x.jpg')}>blue</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-orange-300' onClick={() => setImage('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg')}>orange</p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-300'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647') }}
                >
                    Iphone 12
                </p>
                <p className='px-2 py-1 mx-1 my-3 cursor-pointer bg-red-600'
                    onClick={() => { setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max_Color__Champagne-Gold.png?v=1661601361'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-9-Pro-Max-back.png?v=1661601360') }}
                >Redmi</p>
            </div>
            <div className='' style={{ backgroundImage: "url(" + iphone + ")", backgroundRepeat: 'no-repeat', color: { iphone } }}>
                <div className="mask1">
                    <img src={image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + iphonepic + ")" }} className='h-[800px]' />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
