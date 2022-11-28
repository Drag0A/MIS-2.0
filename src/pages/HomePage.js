import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNavbar from '../components/MainNavbar';
import SideBar from '../components/SideBar';

export default function Home() {
    return (
        <div>
            <Header></Header>
            <MainNavbar></MainNavbar>
            <SideBar>
            </SideBar>
            <Footer></Footer>
        </div>

    );
}
