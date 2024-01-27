import { Fragment } from "react";
import TopBanner from "./top-banner";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import ServiceCard from "../services/service-description";
import ServiceSubHeading from "../services/service-subheading";
import Image from "next/image";
import img from "../../../public/images/img1.png";
import img2 from "../../../public/images/services/graphic-design/brand.png";
import img3 from "../../../public/images/services/graphic-design/social-media.png";
import img4 from "../../../public/images/printDesign.png"
import penGif from "../../../public/images/pen.gif"
import { Accordion } from "react-bootstrap";
import { FAQgraphicDesign } from "../constants/service-web-design";
import ServiceContact from "../services/service-contact";

export default function GraphicDesign() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="Professional Graphic Design with inowit" isBlue />
                <ServiceParagraph isCenter classes="has-margin-top" text="Energize your brand identity with vibrant visuals and tailor-made graphics. Our exceptional team of graphic designers is adept at producing all the visuals required to establish a unified brand presence." />
                {/* <ServiceParagraph isCenter text="From image choices, colour, and fonts to tone and value systems, your brand defines who your business is and what it stands for." /> */}
            </ServiceCard>

            <div className="container">
                <div className="row align-items-center serviceSpacing">
                    <div className="col-lg-6 relative">
                        <Image src={img} className="w-100 relative" alt="image not found" />
                        <Image src={penGif} width={77} height={77} className="absolute top-[65%] right-0 sm:right-[3%] md:right-0 lg:left-[90%]" alt="pen" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <ServiceSubHeading text="Logo Design" />
                        <ServiceParagraph classes="has-margin-top" text="Your logo is the most memorable part of your brand, it’s the first thing customers see and it defines who you are. Make sure you’re defining the right parts of your brand. Our skilled design team can create a sleep, modern logo that is recognizable and distinguishes you from your competitors." />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-5">
                        <ServiceSubHeading text="Corporate Brand Package" />
                        <ServiceParagraph classes="has-margin-top" text="The image your company projects holds immense significance for your brand's essence. When your visuals and graphics remain uniform, they can enhance brand recall and foster heightened customer confidence. We possess the ability to develop a comprehensive corporate branding package that will distinguish you from your rivals and establish a robust foundation for your visual representation. This package encompasses elements like corporate color schemes, fonts, and visual style guidelines, along with templates for letterheads and brochures, and thoughtfully crafted designs for email signatures." />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 mb-5 mt-lg-0">
                        <Image src={img2} className="w-100" alt="image not found" />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing">
                    <div className="col-lg-6">
                        <Image src={img3} className="w-100" alt="image not found" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <ServiceSubHeading text="Social Media Post" />
                        <ServiceParagraph classes="has-margin-top" text="A distinct advantage of entrusting Inowit's expert team with your social media posts lies in the assurance of meticulously curated content that aligns seamlessly with your brand's ethos and resonates profoundly with your target audience. Our adept professionals bring forth a deep understanding of current industry trends and consumer behavior, enabling them to craft posts that not only captivate attention but also foster meaningful engagement. By leveraging their expertise, your social media presence gains the potential to cultivate a robust online community, enhance brand visibility, and ultimately yield tangible returns on investment." />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-5">
                        <ServiceSubHeading text="Printed Collateral" />
                        <ServiceParagraph classes="has-margin-top" text="In an era dominated by digital advancements, the significance of print materials endures. Whether your requirements encompass printed brochures, signage, trade show displays, or any other essential printed collateral, we stand ready to cater to your complete spectrum of printing needs. Our expertise extends to crafting exceptional designs and ensuring their impeccable execution through the use of premium materials, guaranteeing a superior print outcome." />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 mb-5 mt-lg-0">
                        <Image src={img4} className="w-100" alt="image not found" />
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
                            {FAQgraphicDesign.map((item, index) => (
                                <Accordion.Item eventKey={item.eventKey} key={index}>
                                    <Accordion.Header>{item.faqQ}</Accordion.Header>
                                    <Accordion.Body className="font-poppins">
                                        {item.faqA}
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