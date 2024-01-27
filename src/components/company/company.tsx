import Image from "next/image";
import img1 from "../../../public/images/company1.png";
import img2 from "../../../public/images/company2.jpg";
import img3 from "../../../public/images/company3.jpg";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import { useEffect, useRef } from "react";
// @ts-ignore
import { gsap } from "gsap/dist/gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




export default function Company() {

    const sectionRef = useRef(null);
    const sectionEndRef: any = useRef(null);
    const triggerRef: any = useRef(null);

    gsap.registerPlugin(ScrollTrigger);




    useEffect(() => {

        const sections = gsap.utils.toArray(".scroll-section");

        console.log("sections.length========> ", sections.length);
        const totalWidth = sections.reduce((acc: any, section: any) => acc + section.offsetWidth, 0);


        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-200vw",
                ease: "none",
                duration: 1,
                // xPercent: sections.length - 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 1,
                    pin: true,
                    // end: () => "+=" + (sections.length - 1)
                    // end: "+=" + (totalWidth - (window.innerWidth + 400))
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);



    return (
        <div className="scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="mt-5 scroll-section-inner">

                    <div ref={sectionRef} className="companyMain py-5 scroll-section">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <BannerHeading isHeight isBlue text="Turning digital dreams into reality with a sprinkle of pixelated magic!" />
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <Image src={img1} className="mx-auto" alt="image not found" style={{ borderRadius: "55px", maxWidth: "485px", width: "100%", maxHeight: "485px", height: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="companyMain scroll-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <BannerHeading isBlue isLeft text="Our Story" />
                                    <ServiceParagraph isHeight text="Originally envisioned as a business specializing in SEO, the company quickly expanded to include a multitude of marketing offerings, from print and web design to content writing and PPC, Inowit has developed into a marketing agency that can help clients with all aspects of their marketing needs." />
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="responsive-company-col">
                                        <Image src={img2} className="mx-auto" alt="image not found" style={{ borderRadius: "55px", maxWidth: "485px", width: "100%", maxHeight: "485px", height: "100%", transform: "scaleX(1.2)", }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="companyMain scroll-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <ServiceParagraph isHeight text="We currently serve over 500 clients that range from small startups to international corporations." />

                                    <div className="mt-5">
                                        <ServiceParagraph isHeight text="Our multifaceted team specializes in all aspects of marketing, with experience in web design and development, graphic and print design, digital marketing and SEO, as well as creating in-depth brand and marketing strategies. If you’re looking for a company that can use the latest knowledge and technology to move your business forward, give us a call" />
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="responsive-company-col">
                                        <Image src={img3} className="mx-auto" alt="image not found" style={{ borderRadius: "55px", maxWidth: "485px", width: "100%", maxHeight: "485px", height: "100%", transform: "scaleX(1.2)", }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}