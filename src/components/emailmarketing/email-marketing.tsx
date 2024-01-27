import { Fragment } from "react";
import TopBanner from "./top-banner";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import ServiceCard from "../services/service-description";
import ServiceSubHeading from "../services/service-subheading";
import Image from "next/image";
import img from "../../../public/images/email-01.png";
import emailImg from "../../../public/images/emailService.png";
import { Accordion } from "react-bootstrap";
import ServiceContact from "../services/service-contact";
import { FAQemailMarketing } from "../constants/service-web-design";
import { emailMarketingCard } from "../constants/email-marketing-card"
import { v4 as uuidv4 } from 'uuid';
import check from "../../../public/images/emailCheck.png";
// import AppButton from "../common/button";
import Link from "next/link";

export default function EmailMarketing() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="Email Marketing Agency Services" isBlue />
                <ServiceParagraph isCenter classes="has-margin-top" text="Effortlessly and effectively engage your current customer audience through the power of email marketing" />
            </ServiceCard>

            <div className="container">
                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-5">
                        {/* <ServiceSubHeading text="E-News" /> */}
                        <ServiceParagraph classes="has-margin-top" text="Email marketing presents an economical and straightforward method to establish direct communication with both your current and potential clientele. Effortlessly dispatch messages regarding your enterprise, offerings, products, special offers, and more with just a single click! Through e-newsletters, you can seamlessly guide readers to your website and product pages, yielding a remarkable return on the resources you invest." />
                        <div className="mt-5">
                            <ServiceParagraph text="Inowit email marketing solution, E-News, ensures that your content reaches your customers' email inboxes directly. Design a personalized template that accurately represents your brand and simplifies the process of sending routine emails. Distribute information about products, services, promotions, current events, and other relevant updates effortlessly!" />
                        </div>

                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 mb-5 mt-lg-0">
                        <Image src={img} className="w-100" alt="image not found" />
                    </div>
                </div>

                <div className="serviceSpacing">
                    <div className="text-center mb-4">
                        <ServiceSubHeading text="Advantages of Our Email Service" />
                    </div>
                    <div className="row">
                        {emailMarketingCard.map((item, index) => (
                            <div key={uuidv4()} className="col-lg-3 col-md-4 col-sm-6 mt-4">
                                <div className="emailServiceCard h-100 position-relative">
                                    <Image className="emailServiceImg" src={emailImg} alt="img not found" />

                                    <div>
                                        <Image src={item.img} alt="imgeb not rendered" />
                                        <h3>{item.heading}</h3>
                                        <div className="emailCardText" key={uuidv4()}>
                                            <div className="row mb-2">
                                                <div className="col-auto pe-0">
                                                    <Image src={check} alt="img not found" className="pt-1" width={20} />
                                                </div>
                                                <div className="col">
                                                    {item.list1}
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-auto pe-0">
                                                    <Image src={check} alt="img not found" className="pt-1" width={20} />
                                                </div>
                                                <div className="col">
                                                    {item.list2}
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-auto pe-0">
                                                    <Image src={check} alt="img not found" className="pt-1" width={20} />
                                                </div>
                                                <div className="col">
                                                    {item.list3}
                                                </div>
                                            </div>

                                            {item.list4 &&
                                                <div className="row mb-2">
                                                    <div className="col-auto pe-0">
                                                        <Image src={check} alt="img not found" className="pt-1" width={20} />
                                                    </div>
                                                    <div className="col">
                                                        {item.list4}
                                                    </div>
                                                </div>
                                            }

                                            {item.list5 &&
                                                <div className="row mb-2">
                                                    <div className="col-auto pe-0">
                                                        <Image src={check} alt="img not found" className="pt-1" width={20} />
                                                    </div>
                                                    <div className="col">
                                                        {item.list5}
                                                    </div>
                                                </div>
                                            }
                                            {/* <p>{item.list1}</p>
                                            <p>{item.list2}</p>
                                            <p>{item.list3}</p>
                                            {item.list4 && <p>{item.list4}</p>}
                                            {item.list5 && <p>{item.list5}</p>} */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <Link href="/consultation" className="consultationBtn">Free Consultation</Link>
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
                            {FAQemailMarketing.map((item, index) => (
                                <Accordion.Item eventKey={item.eventKey} key={index}>
                                    <Accordion.Header>{item.faqQ}</Accordion.Header>
                                    <Accordion.Body>
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
        </Fragment >
    )
}