import { Fragment } from "react";
import TopBanner from "./top-banner";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import ServiceCard from "../services/service-description";
import Image from "next/image";
import img from "../../../public/images/digi.png"
import { Accordion } from "react-bootstrap";
import { FAQdigitalMarketing } from "../constants/service-web-design";
import ServiceContact from "../services/service-contact";
import ServiceSubHeading from "../services/service-subheading";
import Link from "next/link";

export default function DigitalMarketing() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="Digital Marketing with Inowit" isBlue />
                <ServiceParagraph isCenter classes="has-margin-top" text="Supercharge your online presence with our cutting-edge digital marketing services. From strategic SEO to engaging social media campaigns, we elevate your brand's visibility and drive results in the digital landscape." />
                {/* <ServiceParagraph isCenter text="From strategic SEO to engaging social media campaigns, we elevate your brand's visibility and drive results in the digital landscape." /> */}
            </ServiceCard>

            <div className="container">
                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-7">
                        <ServiceParagraph text="We’re passionate about digital marketing in Edmonton! We believe that digital marketing is for every business, and whether you’re looking to increase brand awareness or generate new leads, there’s a digital marketing plan that is right for your goals! If you’d like to push your business goals forward, you’ve come to the right place. When you work with Inowit Marketing for all your digital marketing needs, you gain access to a versatile team with a wide variety of digital marketing expertise." />
                        <ServiceParagraph text="We’re an Edmonton digital marketing agency who specializes in all aspects of online and digital marketing. We’ll work with you to establish a clear plan and strategy to meet your marketing requirements. Then, our experts will implement the strategy to ensure that every digital marketing tactic works together seamlessly. Read about some of our favourite accounts that we’ve helped grow exponentially!" />
                    </div>
                    <div className="col-lg-5 mb-5 mt-lg-0">
                        <Image src={img} className="w-100" alt="image not found" />
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
                            {FAQdigitalMarketing.map((item, index) => (
                                <Accordion.Item eventKey={item.eventKey} key={index}>
                                    <Accordion.Header>{item.faqQ}</Accordion.Header>
                                    <Accordion.Body>
                                        {item.faqA}
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