import React, { useState } from 'react'



export const brands = {
    OnePlus: {
        name: 'OnePlus',
        logo: 'https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png',
        description: 'evolve beyond speed',
        model: {
            Nord: {
                name: 'Nord',
                price: 300,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/07/OnePlus-Nord-1.jpg'
            },
            8: {
                name: '8',
                price: 500,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/04/OnePlus-8-1.jpg'

            },
            "8Pro": {
                name: '8 Pro',
                price: 600,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/04/OnePlus-8-Pro-1.jpg'
            },
            9: {
                name: '9',
                price: 700,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/03/OnePlus-9-1.jpg'
            },
            "9Pro": {
                name: '9 Pro',
                price: 800,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/03/OnePlus-9-Pro-1.jpg'
            },
            "9R": {
                name: '9R',
                price: 400,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/08/OnePlus-9R-1.jpg'
            },
        }
    },
    Samsung: {
        name: 'Samsung',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/7051px-Samsung_wordmark.svg.png',
        description: 'The Next Galaxy',
        model: {
            S20: {
                name: 'S20',
                price: 600,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-1.jpg'
            },
            S20Plus: {
                name: 'S20 Plus',
                price: 700,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Plus-1.jpg'
            },
            S20Ultra: {
                name: 'S20 Ultra',
                price: 800,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-1.jpg'
            },
            S21: {
                name: 'S21',
                price: 700,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-1.jpg'
            },
            S21Plus: {
                name: 'S21 Plus',
                price: 800,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Plus-1.jpg'
            },
        }
    },
    Apple: {
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
        description: 'Think Different',
        model: {
            iPhone12: {
                name: 'iPhone 12',
                price: 700,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/10/Apple-iPhone-12-1.jpg'
            },
            iPhone12Pro: {
                name: 'iPhone 12 Pro',
                price: 800,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-1.jpg'
            },
            iPhone12ProMax: {
                name: 'iPhone 12 Pro Max',
                price: 900,

                image: 'https://www.gizmochina.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Max-1.jpg'
            },
            iPhone13: {
                name: 'iPhone 13',
                price: 800,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/09/Apple-iPhone-13-1.jpg'
            },
            iPhone13Pro: {
                name: 'iPhone 13 Pro',
                price: 900,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-1.jpg'
            },
            iPhone13ProMax: {
                name: 'iPhone 13 Pro Max',
                price: 1000,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-1.jpg'
            }
        }
    },
    Xiaomi: {
        name: 'Xiaomi',

        logo: 'https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png',
        description: 'Redmi',
        model: {
            RedmiNote10: {
                name: 'Redmi Note 10',
                price: 300,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-1.jpg'
            },
            RedmiNote10Pro: {
                name: 'Redmi Note 10 Pro',
                price: 400,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-1.jpg'
            },
            RedmiNote10ProMax: {
                name: 'Redmi Note 10 Pro Max',
                price: 500,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Max-1.jpg'
            },
            RedmiNote10S: {
                name: 'Redmi Note 10S',
                price: 400,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/05/Xiaomi-Redmi-Note-10S-1.jpg'
            },
            RedmiNote10ProMax5G: {
                name: 'Redmi Note 10 Pro Max 5G',
                price: 600,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/05/Xiaomi-Redmi-Note-10-Pro-Max-5G-1.jpg'
            },
            RedmiNote10Pro5G: {
                name: 'Redmi Note 10 Pro 5G',
                price: 500,
                image: 'https://www.gizmochina.com/wp-content/uploads/2021/05/Xiaomi-Redmi-Note-10-Pro-5G-1.jpg'
            },
        }
    },
    Realme: {
        name: 'Realme',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg/1200px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png',
        description: 'Dare to Leap',
        model: {
            Realme7: {
                name: 'Realme 7',
                price: 300,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/09/Realme-7-1.jpg'
            },
            Realme7Pro: {
                name: 'Realme 7 Pro',
                price: 400,
                image: 'https://www.gizmochina.com/wp-content/uploads/2020/09/Realme-7-Pro-1.jpg'
            },

        }
    }
}
function Navbar() {

    const [isHover, setIsHover] = useState("hidden");
    const [isHover2, setIsHover2] = useState("hidden");
    const [isHover3, setIsHover3] = useState("hidden");
    const show = () => {
        if (isHover === "hidden") {
            setIsHover("block");
            setIsHover2("hidden")
        } else {
            setIsHover("hidden")
        }
    }
    const show2 = () => {
        if (isHover2 === "hidden") {
            setIsHover2("block");
            setIsHover("hidden")
        } else {
            setIsHover2("hidden")
        }
    }
    return (
        <div className=''>
            <nav className='flex justify-between text-3xl px-8 items-center py-3 bg-black text-white border-b border-gray-300 font-mono'>
                <div className='text-5xl'>
                    <h1>SkinWala</h1>
                </div>
                <div className='flex text-xl font-semib'>
                    <div className='item-center'
                        onMouseEnter={() => setIsHover(show)}
                        onClick={() => setIsHover(show)}
                    >
                        <a href='#' className='px-4'>Select Device <i class='bx bx-chevron-down'></i></a>

                    </div>
                    <div className='item-center'
                        onMouseEnter={() => setIsHover2(show2)}
                        onClick={() => setIsHover2(show2)}>
                        <a href='#' className='px-4'>Skin Collection <i class='bx bx-chevron-down '></i></a>
                    </div>

                    <div>
                        <a href='#' className='px-4'>FAQs</a>
                    </div>
                    <div>
                        <a href='#' className='px-4'>Device Not Found</a>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 mr-1 text-xl'>
                    <i class='bx bx-search'></i>
                    <i class='bx bx-user'></i>
                    <i class='bx bx-cart-alt' ></i>
                </div>
            </nav >
            <div className={`absolute grid grid-cols-4 gap-6 p-8 px-[11%] w-full text-white text-sm iten ${isHover} bg-black`}>
                {Object.keys(brands).map((brand) => {
                    console.log(brands[brand].name)
                    return (
                        <div className='flex'>
                            <div className=' flex items-center'>
                                <div className='mx-2 '>
                                    <img className='w-[48px] ' src={brands[brand].logo} alt="" />
                                </div>
                                <div>
                                    <p className='hover:font-semibold'
                                        onMouseEnter={() => setIsHover3(brands[brand].name)}>{brands[brand].name}</p>
                                    <p className='font-thin'>{brands[brand].description}</p>
                                </div>
                            </div>
                            <div className={`absolute bg-black text-lg font-mono font-thin px-6 w-[19%]  mt-[3.6%] ${isHover3 === brands[brand].name ? "" : "hidden"} border py-2`}>
                                <ul className='divide-y'>
                                    {Object.keys(brands[brand].model).map((model) => {
                                        return (
                                            <li className='py-2 hover:font-semibold'>{brands[brand].name + " " + brands[brand].model[model].name}</li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className={`absolute flex px-[10%] w-full bg-black text-white text-sm justify-around ${isHover2}`}>
                <div className='grid grid-cols-1  text-lg font-mono text-white font-thin my-10 py-8'>
                    <p className='font-bold border-b border-white mb-2'>Collection</p>
                    <div className='grid grid-cols-2 text-center text-gray-300'> <ul className='mr-4'>
                        <li className=' mb-[0.5em]'>Mate</li>
                        <li className=' mb-[0.5em]'>Mate</li>
                        <li className=' mb-[0.5em]'>Mate</li>
                        <li className=' mb-[0.5em]'>Mate</li>
                    </ul>
                        <ul>
                            <li className=' mb-[0.5em]'>Mate</li>
                            <li className=' mb-[0.5em]'>Mate</li>
                            <li className=' mb-[0.5em]'>Mate</li>
                            <li className=' mb-[0.5em]'>Mate</li>
                        </ul>
                    </div>
                </div>
                <div className='block w-[80%] py-2 border-l-2 pl-6 my-8'>
                    <p className='text-xl font-semibold pb-6 font-mono text-white  w-auto mb-2'>
                        Most Trending
                    </p>
                    <div className='grid grid-cols-4 gap-3'>

                        <div className='hover:border-b-2 hover:border-l-2 border-white '>
                            <img src="https://cdn.shopify.com/s/files/1/0534/7849/0267/files/WrapCart-Img-1270_Carbon_Fibre_1024x1024_crop_center_c0c74b03-e157-439f-ac5a-22103d871fcc.jpg?v=1628724759" alt="" />
                        </div>

                        <div className='hover:border-b-4 hover:border-l-4 border-white '>
                            <img src="https://cdn.shopify.com/s/files/1/0534/7849/0267/files/WrapCart-Img-1266_Glossy_1024x1024_crop_center_7edfd854-7253-479d-99f3-4c42b751ef94.jpg?v=1628724705" alt="" />
                        </div>
                        <div className='hover:border-b-4 hover:border-l-4 border-white '>
                            <img src="https://cdn.shopify.com/s/files/1/0534/7849/0267/files/WrapCart-Img-1270_Carbon_Fibre_1024x1024_crop_center_c0c74b03-e157-439f-ac5a-22103d871fcc.jpg?v=1628724759" alt="" />
                        </div>
                        <div className='hover:border-b-4 hover:border-l-4 border-white '>
                            <img src="https://cdn.shopify.com/s/files/1/0534/7849/0267/files/WrapCart-Img-1266_Glossy_1024x1024_crop_center_7edfd854-7253-479d-99f3-4c42b751ef94.jpg?v=1628724705" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar