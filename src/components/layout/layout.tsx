import React, { useEffect, useState, useRef } from "react";

// ============== Ant Components ==============
import { Affix, Layout, Menu, Space, Dropdown } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";

// ============== Components ==============
import HeaderComponent, {
  ABOUT_US_DROPDOWN,
  SERVICES_DROPWDOWN,
} from "./header";
import ScrollToTopButton from "../common/scroll-to-top";

import AOS from "aos";
import FooterMain from "./footer-main";
import LogoSvg from "@/assets/logo";
import Link from "next/link";
import AppButton from "../common/button";
import Image from "next/image";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

export default function AppLayout({ children, ...other }: any) {
  const { hasDarkBg } = other;

  const router = useRouter();

  const sidebarRef: any = useRef(null);
  const [collapsed, setCollapsed] = useState(true);

  const handleSidebarToggle = () => {
    setCollapsed(!collapsed);
    console.log("collapsed");
  };

  const handleCloseSidebar = () => {
    setCollapsed(true);
  };

  // Close sidebar on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setCollapsed(true);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        duration: 1000,
        offset: 100,
        easing: "ease-in-out",
        disable: window.innerWidth < 1200,
      });
    };

    initializeAOS();

    return () => {
      AOS.refreshHard(); // This might be necessary to clear AOS styles on unmount.
    };
  }, []);

  return (
    <Layout className={`${hasDarkBg ? "dark-body-bg" : "main-bg"} text-white`}>
      <Sider
        breakpoint="xl"
        collapsedWidth="0"
        width={260}
        trigger={null}
        defaultCollapsed={true}
        collapsed={collapsed}
        style={{ position: "fixed", zIndex: 1000, height: "100vh" }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        ref={sidebarRef}
      >
        <div className="mobileMenu p-4 position-relative primary-bg h-full">
          <Link href="/home" className="text-lg relative">
            {/* <Image src="/images/logo.png" alt="logo" width={150} height={50} /> */}
            <LogoSvg />
            <Image
              src="/images/power-gif.gif"
              alt="logo"
              width={33}
              height={45}
              className="absolute"
              style={{ top: "7px", left: "43px" }}
            />
          </Link>

          <hr className="my-4" />

          <div className="d-flex flex-column">
            <ul>
              <li className="py-3 p-0">
                <Dropdown
                  menu={{ items: ABOUT_US_DROPDOWN }}
                  rootClassName="dropdown-item-root "
                  overlayStyle={{ width: "200px", padding: 0 }}
                  trigger={["click"]}
                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="p-0 navLink"
                  >
                    <Space>
                      <span className="block">About us</span>
                      <span>
                        <DownOutlined />
                      </span>
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li className="py-3">
                <Dropdown
                  menu={{ items: SERVICES_DROPWDOWN }}
                  overlayStyle={{ width: "300px" }}
                  trigger={["click"]}

                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="navLink"
                  >
                    <Space>
                      <span className="block">Services</span>
                      <DownOutlined />
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li
                className="py-3 d-flex align-items-center"
                style={{ height: "56px" }}
              >
                <Link href="/blog" title="Blogs" className="navLink">
                  Blogs
                </Link>
              </li>
              <li
                className="py-3 d-flex align-items-center mb-3"
                style={{ height: "56px" }}
              >
                <Link href="/contact" title="Contact us" className="navLink">
                  Contact Us
                </Link>
              </li>
            </ul>
            <AppButton
              type="button"
              href="/consultation"
              title="Free Consultation"
              classes="text-white font-bold"
              hasYellowHover={true}
            />
          </div>
        </div>
      </Sider>
      <Layout style={{ position: "relative" }}>
        <div className="primary-bg w-full main-bg">
          <Affix offsetTop={0} className="relative ">
            <Header
              className="layout-headerr primary-bg p-0 h-[80px] sticky top-0"
              style={{ lineHeight: 0 }}
            >
              <HeaderComponent
                setCollapsed={handleSidebarToggle}
                closeSidebar={handleCloseSidebar}
              />
            </Header>
          </Affix>
        </div>
        <Content style={{ minHeight: "calc(100vh - 134px)" }}>
          {children}
        </Content>
        <Footer
          className=" p-0"
          style={{ background: hasDarkBg ? "#057EFF" : "#E6F2FE" }}
        >
          <ScrollToTopButton />
          <FooterMain />
        </Footer>
      </Layout>
    </Layout>
  );
}
