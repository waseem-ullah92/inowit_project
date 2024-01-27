import React from 'react';

// ================== Next ==================
import Image from 'next/image';


// ================== Component ==================
import Paragraph from '../common/paragraph';


// ================== Assets ==================
import bannerImg from '../../../public/images/home/hero.png';
import bg2 from '../../../public/images/Union.png';
import bg1 from '../../../public/images/Union2.png';
import AppButton from '../common/button';

import img from '../../../public/images/home/pick-us.png';
import Link from 'next/link';




const BannerComponent = () => {

    const bannerDesc = 'Inowit specializes in tailored digital marketing solutions for small businesses, focusing on optimizing website landing pages for maximum engagement and conversion. We recognize the immense potential of the online environment and made early investments in crafting essential strategies to elevate our efforts in engagement, branding, and sales. Our foremost objective is to empower our clients to achieve their maximum potential, and we achieve this by offering comprehensive marketing plans and strategies that enable them to surpass their objectives.';

    return (
        // <div className='bannerBackground my-5'>
        <div className="mainSection position-relative" data-aos="fafe-down" >
            <div className="container">
                <div className="row align-items-center m-0 justify-between">
                    <div className="col-lg-5 pe-0 position-relative">
                        <Image src={bg1} alt='img not found' className='d-none d-lg-block bannerBg1' />
                        <h1 className='bannerHeading mb-4 font-oswald'>FUELING startups THROUGH <span>savvy </span> Digital marketing</h1>
                        <Paragraph text={bannerDesc} classes='banner-p text-black fw-500' />
                        <div className='d-flex justify-content-center d-sm-block'>
                            <Link href="/consultation" className='bannerBtn mt-4 mt-mb-5'>Get Started</Link>
                            <div className='position-relative'>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 px-0 mt-5 mt-lg-0'>
                        <Image src={img} alt="banner" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </div>
            <Image src={bg2} className='d-none d-lg-block bannerBg2' alt='img not found' width={140} />
        </div >
        // </div>
    )
}

export default BannerComponent;