import { useEffect, useState } from 'react';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Banner from '../components/common/Banner';
import CTA from '../components/common/CTA';
import Contact from '../components/common/Contact';
import Footer from '../components/common/Footer';
import LogoGrid from '../components/common/LogoGrid';
import TimerApp from '../components/ui/core/Timer';
// import ExampleReviews from '../components/ui/ReviewCard';


const Home = () => {



    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem('clerk-db-jwt')) {
    //         navigate("/dashboard");
    //     }
    // });

    return (
        <div>
            <TimerApp />
            <Banner />
            <CTA />
            {/* <Contact /> */}
            <LogoGrid />
            <Footer />
        </div>
    );
}

export default Home;