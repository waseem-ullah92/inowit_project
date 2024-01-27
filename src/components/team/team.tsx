import React, { Fragment } from 'react'
import ServiceCard from '../services/service-description'
import BannerHeading from '../common/banner-heading'
import ServiceParagraph from '../common/service-paragraph'
import Link from 'next/link'

import { v4 as uuidv4 } from "uuid";
import Image from 'next/image'
import { TEAM_MOCK_DATA } from './team-data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import ServiceSubHeading from '../services/service-subheading'

const TeamComponent = () => {



    return (
        <Fragment>
            <ServiceCard>
                <BannerHeading propClasses="font-oswald" isBlue text="Meet Our Team" />
                <ServiceSubHeading propClasses="text-center primary-color font-oswald mt-2 mb-4" text="Unlocking Success with Passionate Hearts" />
                <ServiceParagraph isCenter text="We pride ourselves on being a versatile team with expertise across a wide spectrum of marketing disciplines, aiming to excel in each one. Our team comprises individuals who are specialists in various facets of marketing, enabling us to maintain a comprehensive suite of services in-house. Whether it's web, development, SEO services, digital marketing, content creation, or any other aspect of marketing, we have dedicated experts ready to collaborate and breathe life into your projects." classes="has-margin-top" />
            </ServiceCard>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-10 col-lg-11'>
                        <div className='row'>
                            {TEAM_MOCK_DATA.map((item: any) => (
                                <div className='col-md-4 col-sm-6 mb-4' key={uuidv4()}>
                                    <div className="teamCard">
                                        <Image src={item.img} alt={item.name} className='rounded w-100' />
                                        <div className="bg-white h-[80px] rounded-[43px] px-1 text-center mt-[-2rem] flex flex-col pt-[10px] pb-[15px] justify-around items-center">
                                            <div className='h-[100%]'>
                                                <h2 className='text-center lh-[24px] text-black font-semibold text-lg'>{item.name}</h2>
                                                <p className='text-[#057EFF] text-[15px] text-center lh-[24px]'>{item.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row m-auto justify-center mx-3 lg:w-[50%] xxl:w-[60%]"> */}

            {/* <div className='lg:mx-[10rem] xl:mx-[20rem] xxl:mx-[30rem] mb-5'>
                <Swiper
                    // pagination={{
                    //     dynamicBullets: true,
                    //     clickable: true,
                    // }}
                    pagination={false}
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                            // spaceBetween: 20,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            // spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            // spaceBetween: 50,
                        },
                    }}
                >
                    {TEAM_MOCK_DATA.map((item: any) => (
                        <SwiperSlide className='' key={uuidv4()}>
                            <div className="teamCard w-full p-[0.5rem] flex flex-col ">
                                <Image src={item.img} alt={item.name} height={200} width={200} className='rounded' />
                                <div className="bg-white h-[80px] rounded-[43px] px-1 text-center mt-[-2rem] flex flex-col pt-[10px] pb-[15px] justify-around items-center">
                                    <div className='h-[100%]'>
                                        <h2 className='text-center lh-[24px] text-black font-semibold text-lg'>{item.name}</h2>
                                        <p className='text-[#057EFF] text-[15px] text-center lh-[24px]'>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div> */}

            {/* </div> */}
        </Fragment>
    )
}

export default TeamComponent