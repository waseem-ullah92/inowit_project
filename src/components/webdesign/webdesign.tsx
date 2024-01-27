import { Fragment } from "react";
import TopBanner from "./top-banner";
import ServiceCard from "../services/service-description";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import Image from "next/image";
import img from "../../../public/images/compiters.png";
import img2 from "../../../public/images/services/customize-web-design.png";
import ServiceSubHeading from "../services/service-subheading";
import img3 from "../../../public/images/services/engagin-design.png";
import { FAQWebDesign } from "../constants/service-web-design";
import { Accordion } from "react-bootstrap";
import ServiceContact from "../services/service-contact";
import Link from "next/link";

export default function WebDesign() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="Elevate Your Online Presence with Inowit Web Development" isBlue />
                <ServiceParagraph isCenter text="We firmly believe that your online presence speaks volumes about your brand. Your website isn't just a digital platform – it's a pivotal cornerstone of your entire marketing strategy. Imagine every paid advertisement, every organic search, and every potential lead converging on a single point – your website. This is where the magic happens." />
                {/* <ServiceParagraph isCenter text="Our expert team is here to transform your digital aspirations into stunning, functional websites that leave a lasting impact" /> */}
            </ServiceCard>

            <div className="container">
                <div className="row align-items-center serviceSpacing">
                    <div className="col-lg-6">
                        <Image src={img} className="w-100" alt="image not found" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <ServiceSubHeading text="Responsive Websites" />
                        <ServiceParagraph classes="has-margin-top" text="we specialize in crafting immersive digital experiences through our top-notch Responsive Website Design services. In today's dynamic online landscape, a responsive website is no longer an option, but a necessity. Our expert team of designers and developers work collaboratively to create websites that adapt seamlessly across various devices and screen sizes, ensuring a consistent and engaging user experience." />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-5">
                        <ServiceSubHeading text="Customized Website Design" />
                        <ServiceParagraph classes="has-margin-top" text="At Inowit, we specialize in delivering specialized and inventive Customized Website Design services that suit to your company's specific demands and goals. Our talented developers and designers collaborate closely with you to comprehend your brand's identity, target demographic, and unique goals. With a focus on creating an engaging user experience, we craft visually captivating websites that seamlessly blend aesthetics with functionality." />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <Image src={img2} className="w-100" alt="image not found" />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing">
                    <div className="col-lg-6">
                        <Image src={img3} className="w-100" alt="image not found" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <ServiceSubHeading text="Aesthetically Engaging Design" />
                        <ServiceParagraph classes="has-margin-top" text="The quality of a website begins with its visual appeal. A well-designed website employs a harmonious blend of colors, typography, and imagery that aligns with your brand identity. It creates a lasting first impression, capturing visitors' attention and conveying professionalism. An aesthetically engaging design enhances user experience and encourages visitors to explore further." />
                    </div>
                </div>

                <div className="row justify-content-center serviceSpacing">
                    <div className="col-xl-10 col-lg-11">
                        <div className="text-center mb-4">
                            <ServiceSubHeading text="Frequently Asked Questions (FAQ)" />
                        </div>
                        <div className="mb-5 text-center w-100">
                            <ServiceParagraph isCenter text="Improve conversion rate, including copy writers and beautiful design just a few things our clients love!" />
                        </div>
                        <Accordion>
                            {FAQWebDesign.map((item, index) => (
                                <Accordion.Item eventKey={item.eventKey} key={index} style={{ marginTop: "0.875rem" }}>
                                    <Accordion.Header>{item.accordianHead}</Accordion.Header>
                                    <Accordion.Body>
                                        {item.accordianBody}
                                        {item.link && <Link className="ms-2 FAQlink" href={item.link}>Learn More</Link>}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>

                <div className="row serviceSpacing">
                    <div className="col-12">
                        <ServiceContact />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}