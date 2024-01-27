import React from 'react';

// ================== Components ==================
import BannerComponent from './banner'
import Services from './services'
import PickUs from './pickus'
import OurStrategy from './strategy'
import LetsChat from './letsChat'
import Contact from './contact'



const HomeComponent = () => {
    return (
        <>
            <div>
                <BannerComponent />
                <Services />
                <PickUs />
                <OurStrategy />
                <LetsChat />
                <Contact />
            </div>
        </>
    )
}

export default HomeComponent