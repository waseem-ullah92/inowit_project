"use-client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


// ============== Ant Components ==============
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu, Button, Layout, Affix } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';



// ============== Components ==============
import AppLink from '../common/link'
import AppButton from '../common/button'
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx"
import LogoSvg from '@/assets/logo';
import { HEADER_NAVBAR } from './header-data';



const { Sider } = Layout;


// TODO: Will be removed in future.
export const ABOUT_US_DROPDOWN: any = [
    {
        key: '1',
        label: (
            <Link rel="noopener noreferrer" href="/company"  className='dropdown-item pl-3' style={{ fontSize: '18px' }}>
                Company
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link rel="noopener noreferrer" href="/team"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Team
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link rel="noopener noreferrer" href="our-values"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Our Values
            </Link>
        ),
    }
    // {
    //     key: '4',
    //     label: (
    //         <Link rel="noopener noreferrer" href="#" className='dropdown-item  pl-3'>
    //             Careers
    //         </Link>
    //     ),
    // },
];


// TODO: Will be removed in future.
export const SERVICES_DROPWDOWN: any = [
    {
        key: '1',
        label: (
            <Link rel="noopener noreferrer" href="/webdesign"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Dynamic Web Design
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link rel="noopener noreferrer" href="/seo"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                SEO Mastery
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link rel="noopener noreferrer" href="/digitalmarketing"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Digital Marketing
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link rel="noopener noreferrer" href="/graphicdesign"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Creative Graphic Design
            </Link>
        ),
    },
    {
        key: '5',
        label: (
            <Link rel="noopener noreferrer" href="/emailmarketing"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Email Marketing
            </Link>
        ),
    },
    {
        key: '6',
        label: (
            <Link rel="noopener noreferrer" href="/contentwriting"  className='dropdown-item  pl-3' style={{ fontSize: '18px' }}>
                Content Strategy
            </Link>
        ),
    },
];





const HeaderComponent = (props:any) => {


    const {setCollapsed: setParentSidebar, closeSidebar} = props;

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);


    const [showSection, setShowSection] = useState(false);


    useEffect(() => {
        if (showSection) {
            // Disable scrolling
            document.body.classList.add('no-scroll');
        } else {
            // Enable scrolling
            document.body.classList.remove('no-scroll');
        }

        return () => {
            // Cleanup: Enable scrolling when the component unmounts
            document.body.classList.remove('no-scroll');
        };
    }, [showSection]);






    return (
        <>
            {/* {
                showSection && (
                    <div className='modal-overlay'>
                        <div className='position-absolute' style={{ zIndex: "10" }}>
                            <div className='mobileMenu p-4 position-relative primary-bg' style={{ height: "100vh", width: "300px" }}>
                                <button className='btn d-inline-flex justify-content-center align-items-center' onClick={() => setCollapsed()} style={{ position: "absolute", top: "20px", right: "20px", fontSize: "30px", backgroundColor: "#fcb642", borderRadius: "100%", width: "40px", height: "40px", zIndex: "999" }}>
                                    <RxCross1 />
                                </button>

                                <div className='text-lg relative'>
                                    <LogoSvg />
                                    <Image src="/images/power-gif.gif" alt="logo" width={33} height={45} className='absolute' style={{ top: "7px", left: "43px" }} />
                                </div>

                                <hr className='my-4' />

                                <div className='d-flex flex-column'>
                                    <ul>
                                        <li className='py-3 p-0'>
                                            <Dropdown menu={{ items: ABOUT_US_DROPDOWN }} rootClassName='dropdown-item-root ' overlayStyle={{ width: "200px", padding: 0 }}>
                                                <Link href="#" onClick={(e) => e.preventDefault()} className='p-0 navLink'>
                                                    <Space>
                                                        <span className='block'>About us</span>
                                                        <span><DownOutlined /></span>
                                                    </Space>
                                                </Link>
                                            </Dropdown>
                                        </li>
                                        <li className='py-3'>
                                            <Dropdown menu={{ items: SERVICES_DROPWDOWN }} overlayStyle={{ width: "300px" }}>
                                                <Link href="#" onClick={(e) => e.preventDefault()} className='navLink'>
                                                    <Space>
                                                        <span className='block'>Services</span>
                                                        <DownOutlined />
                                                    </Space>
                                                </Link>
                                            </Dropdown>
                                        </li>
                                        <li className='py-3 d-flex align-items-center' style={{ height: "56px" }}><Link href="/blog" title="Blogs" className='navLink'>Blogs</Link></li>
                                        <li className='py-3 d-flex align-items-center mb-3' style={{ height: "56px" }}><Link href="/contact" title="Contact us" className='navLink'>Contact Us</Link></li>
                                    </ul>
                                    <AppButton type='button' href="/consultation" title="Free Consultation" classes='text-white font-bold' hasYellowHover={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } */}
            {/* <header> */}
            <div className='d-flex justify-content-between container header-container align-items-center relative w-full  text-white h-[80px]'>
                <div className='text-lg relative'>
                    <Link href="/home">
                        <LogoSvg />
                        {/* <Image src="/images/logo.png" alt="logo" width={150} height={50} /> */}
                        <Image src="/images/power-gif.gif" alt="logo" width={33} height={45} className='absolute' style={{ top: "7px", left: "43px" }} />
                    </Link>
                </div>
                <div className='is-toggler-button'>
                    <Button
                        type='text'
                        onClick={() => setParentSidebar()}
                        className='text-base'
                        style={{
                            width: 64,
                            height: 64,
                            fontSize: "25px",
                            color: "#fcb642"
                        }}
                    >
                        <FaBars />
                    </Button>
                </div>

                <ul className={`items-center gap-4 hidden is-show-top-navbar mb-0 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <li className='px-3 p-0'>
                        <Dropdown menu={{ items: ABOUT_US_DROPDOWN }} rootClassName='dropdown-item-root ' overlayStyle={{ width: "200px", padding: 0 }}>
                            <Link href="#" onClick={closeSidebar} className='p-0 navLink'>
                                <Space>
                                    <span className=' block'>About us</span>
                                    <span><DownOutlined /></span>
                                </Space>
                            </Link>
                        </Dropdown>
                    </li>
                    <li className='px-3'>
                        <Dropdown menu={{ items: SERVICES_DROPWDOWN }} overlayStyle={{ width: "300px" }}>
                            <Link href="#" onClick={(e) => e.preventDefault()} className='navLink'>
                                <Space>
                                    <span className=' block'>Services</span>
                                    <DownOutlined />
                                </Space>
                            </Link>
                        </Dropdown>
                    </li>
                    <li className='px-3'><Link href="/blog" title="Blogs" className='navLink'>Blogs</Link></li>
                    <li className='px-3'><Link href="/contact" title="Contact us" className='navLink'>Contact Us</Link></li>
                    <li className='px-3'><AppButton type='button' href="/consultation" title="Free Consultation" classes='hover-yellow font-bold' hasYellowHover={true} /></li>
                </ul>
                {/* <Menu
                    mode="horizontal"
                    // defaultSelectedKeys={['2']}
                    style={{ background: 'transparent' }}
                    openKeys={['1']}
                >
                    {HEADER_NAVBAR?.map((item: any) => (
                        <Menu.Item key={item.key} className='p-3 mx-2 m-auto' onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
                            <Link rel="noopener noreferrer" href={`${item?.link}`} className='dropdown-item navLink' style={{ fontSize: '18px' }}>
                                <span>{item.label}</span>
                                <span>{Boolean(item.children.length) && <DownOutlined className='ml-3 py-0 my-0' />}</span>
                            </Link>
                        </Menu.Item>
                    ))
                    }
                </Menu> */}
                {/* </div> */}
                {/* </header> */}
            </div>
        </>
    )
}

export default HeaderComponent