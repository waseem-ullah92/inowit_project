import { Fragment } from "react";
import TopBanner from "./top-banner";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import ServiceCard from "../services/service-description";
import Image from "next/image";
import img from "../../../public/images/contentBloggingh.png";
import { Accordion } from "react-bootstrap";
import { FAQcontentwriting } from "../constants/service-web-design";
import ServiceContact from "../services/service-contact";
import ContentWritingCard from "./content-writing-card";
import { contentCard, contentMain } from "../constants/content-writing-card";
import ServiceSubHeading from "../services/service-subheading";
import { v4 as uuidv4 } from 'uuid';

export default function ContentWriting() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="Content writing with Inowit" isBlue />
                <ServiceParagraph isCenter classes="has-margin-top" text="We believe that content should not only inform but also build lasting connections. Our writers meticulously research, strategically structure, and artfully articulate each piece to align with your brand's voice and goals. From enhancing your website's SEO to establishing your authority in the field, our content drives engagement and fosters growth." />
            </ServiceCard>

            <div className="container">
                <div className="row align-items-center serviceSpacing column-reverse">
                    <div className="col-lg-7">
                        {contentMain.map((item, index) => (
                            <div key={uuidv4()} className="row">
                                <div className="col-auto pe-0">
                                    <span className="countContent">{item.count}</span>
                                    {index < contentMain.length - 1 &&
                                        <div className="leftContentBorder mx-auto"></div>
                                    }

                                </div>
                                <div className="col pb-4 pb-sm-5">
                                    <p className="serviceParagraph contentParagraph"><span>{item.spanText}</span> {item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-5 mb-5 mt-lg-0">
                        <Image src={img} className="w-100" alt="image not found" />
                    </div>

                </div>

                <div className="row serviceSpacing">
                    <div className="text-center mb-4">
                        <ServiceSubHeading text="Copywriting and Content Marketing Services" />
                    </div>
                    {contentCard.map((item, index) => (
                        <div key={uuidv4()} className="col-xl-3 col-md-4 col-sm-6 mb-4">
                            <ContentWritingCard text={item.content} />
                        </div>
                    ))}
                </div>

                <div className="row justify-content-center serviceSpacing">
                    <div className="col-xl-10 col-lg-11">
                        <div className="text-center mb-4">
                            <ServiceSubHeading text="Frequently Asked Questions (FAQ)" />
                        </div>
                        <div className="mb-5 text-center w-100">
                            <ServiceParagraph isCenter text="Improve conversion rate, including copy writers and beautiful design just a few things our clients love!" />
                        </div>
                        <Accordion className="accordain-main">
                            {FAQcontentwriting.map((item, index) => (
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
        </Fragment>
    )
}