// export const mobile = {
//     'apple': {
//         name: 'Apple',
//         model: {
//             'iphone 14 pro max': {
//                 name: 'iPhone 14 Pro Max',
//                 skin: {
//                     plain: '/mobile/skin/Apple/14series/14promax/plain.webp',
//                     green: '/mobile/skin/Apple/14series/14promax/green.webp',
//                     gray: '/mobile/skin/Apple/14series/14promax/gray.webp',
//                 }
//             },
//             'iphone 14': {
//                 name: 'iPhone 14',
//                 skin: {
//                     plain: '/mobile/skin/Apple/14series/14/plain.webp',
//                     green: '/mobile/skin/Apple/14series/14/green.webp',
//                     gray: '/mobile/skin/Apple/14series/14/gray.webp',
//                 }
//             },
//         }
//     },
//     'samsung': {
//         name: 'Samsung',
//         model: {
//             's22 ultra': {
//                 name: 'S22 Ultra',
//                 skin: {
//                     plain: '/mobile/skin/Samsung/s22series/s22ultra/plain.webp',
//                     green: '/mobile/skin/Samsung/s22series/s22ultra/green.webp',
//                     gray: '/mobile/skin/Samsung/s22series/s22ultra/gray.webp',
//                 }

//             },
//             'note 20 ultra': {
//                 name: 'Note 20 Ultra',
//                 skin: {
//                     plain: '/mobile/skin/Samsung/note22series/note22ultra/plain.webp',
//                     green: '/mobile/skin/Samsung/note22series/note22ultra/green.webp',
//                     gray: '/mobile/skin/Samsung/note22series/note22ultra/gray.webp',
//                 }

//             },
//         }
//     }
// }
export default function mobile(req, res) {
    res.status(200).json({
        'apple': {
            name: 'Apple',
            model: {
                'iphone 14 pro max': {
                    name: 'iPhone 14 Pro Max',
                    skin: {
                        plain: '/mobile/skin/Apple/14series/14promax/plain.webp',
                        green: '/mobile/skin/Apple/14series/14promax/green.webp',
                        gray: '/mobile/skin/Apple/14series/14promax/gray.webp',
                    }
                },
                'iphone 14': {
                    name: 'iPhone 14',
                    skin: {
                        plain: '/mobile/skin/Apple/14series/14/plain.webp',
                        green: '/mobile/skin/Apple/14series/14/green.webp',
                        gray: '/mobile/skin/Apple/14series/14/gray.webp',
                    }
                },
            }
        },
        'samsung': {
            name: 'Samsung',
            model: {
                's22 ultra': {
                    name: 'S22 Ultra',
                    skin: {
                        plain: '/mobile/skin/Samsung/s22series/s22ultra/plain.webp',
                        green: '/mobile/skin/Samsung/s22series/s22ultra/green.webp',
                        gray: '/mobile/skin/Samsung/s22series/s22ultra/gray.webp',
                    }

                },
                'note 20 ultra': {
                    name: 'Note 20 Ultra',
                    skin: {
                        plain: '/mobile/skin/Samsung/note22series/note22ultra/plain.webp',
                        green: '/mobile/skin/Samsung/note22series/note22ultra/green.webp',
                        gray: '/mobile/skin/Samsung/note22series/note22ultra/gray.webp',
                    }

                },
            }
        }
    })
}
