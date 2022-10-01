import '../styles/globals.css'
import Head from 'next/head'
import { useState, createContext, useContext } from 'react'
import { ItemState } from '../context/ItemState'
import { ItemContext } from '../context/Itemcontext'


function MyApp({ Component, pageProps }) {

  return (<ItemState>
    <Head>
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
    </Head>
    <Component {...pageProps} />
  </ItemState>)
}

export default MyApp
