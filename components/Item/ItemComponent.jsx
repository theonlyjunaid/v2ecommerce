import Image from 'next/image'
export default function ItemComponent(props) {
    // const [iphone, setIphone] = useState("");
    // const [iphonepic, setIphonepic] = useState("");
    // useEffect(() => {
    //     setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647')
    // }, []);

    return (
        <>
            {/* <div>
                <img src={props.phone} alt="Cinque Terre" className=' ' />

                <img src={props.image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + props.skin + ")", WebkitMaskRepeat: 'no-repeat' }} className='absolute  ' />
            </div> */}
            <div style={{ backgroundImage: "url(" + props.phone + ")", backgroundRepeat: 'no-repeat' }} className='-ml-[50%] -mr-[50%] -mb-[50%]   md:m-0 scale-[50%]  md:scale-90 -mt-[55%] border border-black'>
                <Image src={props.image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + props.skin + ")", WebkitMaskRepeat: 'no-repeat' }} className='h-[790px] md:h-[820px] md:w-[720px] ' width={720} height={820} />

            </div>

            {/* <Image src={props.phone} alt="Cinque Terre" width={500} height={500} /> */}
        </>
    )
}
