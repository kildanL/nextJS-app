import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'Rasim Kutleev app nextJS ' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <Navbar/>
            {children}
        </>
    );
};

export default MainContainer;