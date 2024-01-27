import { Fragment } from "react";
import TopBanner from "./top-banner";
import ServiceCard from "../services/service-description";
import BannerHeading from "../common/banner-heading";
import ServiceParagraph from "../common/service-paragraph";
import Image from "next/image";
import img2 from "../../../public/images/seoImg1.png";
import ServiceSubHeading from "../services/service-subheading";
import img3 from "../../../public/images/seoImg2.png";
import { FAQseo } from "../constants/service-web-design";
import { Accordion } from "react-bootstrap";
import ServiceContact from "../services/service-contact";
import arrow from "../../../public/images/seoArrow.png"
import { seoCard } from "../constants/seo";
import AppButton from "../common/button";
import imgNeed from "../../../public/images/whyneed.png";

export default function SEO() {
    return (
        <Fragment>
            <TopBanner />
            <ServiceCard>
                <BannerHeading text="SEO Services can improve your website’s reach and impact!" isBlue />
                <ServiceParagraph isCenter text="SEO is more than just keywords, though, and includes hundreds of factors such as page-load time, mobile responsiveness, links, and proper layout, as well as using the right keywords in the right way." classes="has-margin-top" />
            </ServiceCard>

            <div className="container">
                <div className="row serviceSpacing column-reverse">
                    <div className="col-lg-5">
                        <ServiceSubHeading text="SEO Services can improve your website’s reach and impact!" />
                        <ServiceParagraph classes="has-margin-top" text="When potential customers are searching for items related to your business, 65% of users will only click on the five five results, and 25% of users will click on the top result and that’s it. Even if your business is perfect for what someone is looking for, if you aren’t on the first page of Google the majority of users will never find you. That’s why you need SEO services for your business! Optimizing your website for search engines is the only way to get on that first page of Google and ensure as much organic traffic to your site as possible." />
                        <div className="seoMainAccordion">
                            <Accordion>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h4 className="d-flex align-items-center my-2 seoSubheading"><span><Image src={arrow} alt="img not found" /></span> Organic Search</h4>
                                    </Accordion.Header>
                                    <Accordion.Body className="px-0">
                                        <ServiceParagraph text="Organic search refers to when a user searches for something related to your business, and Google acknowledges that your website addresses their query. Our approach involves employing a range of SEO techniques and strategies to maximize your business's visibility. We utilize both on-page and off-page SEO methods to enhance your search engine rankings, thereby increasing your website's traffic and generating more leads. SEO entails more than just keywords; it encompasses aspects like page layout, metadata, link building, content updates, and more. Our team of Edmonton SEO professionals will engage with you to understand your business, identify relevant information and keywords, and consistently work on your website to enhance its rankings. SEO services are an ongoing process, meaning we'll continuously make adjustments month after month to ensure your business achieves the best possible SEO outcomes. With our experienced Edmonton SEO team, you can trust us to optimize your website for search and achieve remarkable results, as demonstrated by our successful track record of helping clients reach the top of Google and substantially increase their revenue." />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 mb-5 mt-lg-0">
                        <Image src={img2} className="w-100" alt="image not found" />
                    </div>
                </div>

                <div className="row align-items-center serviceSpacing">
                    <div className="row serviceSpacing column-reverse">
                        <div className="col-lg-5">
                            <ServiceSubHeading text="SEO Client Results" />
                            <ServiceParagraph classes="has-margin-top" text="We’ve worked with hundreds of clients to improve their website’s SEO. With over a decade in business, our clients have seen year over year improvements in organic search traffic, leads, and revenue!" />
                            <ServiceParagraph classes="has-margin-top" text="Across the board, we’ve seen a 148% increase in traffic to our SEO clients. Clients are more than doubling the number of users that come to their websites. Studies have shown that prioritizing website traffic is one of the most effective tools in increasing conversions and sales. Conversion rates tend to sit at around 4% and it can be costly and time consuming to change that, so prioritizing an increase in traffic is an effective way to more than double your conversions!" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 mb-5 mt-lg-0">
                            <Image src={img3} className="w-100" alt="image not found" />
                        </div>
                    </div>
                </div>

                <div className="sectionSpacing">
                    <div className="text-center">
                        <ServiceSubHeading text="Professional Inowit SEO Services for best ROI" />

                        <div className="row mt-5">
                            {seoCard.map((item) => (
                                <div className="col-lg-4 col-sm-6 mb-4">
                                    <div className="seoMainCard px-4 py-2 text-center">
                                        <span>
                                            <Image src={item.img} alt="img not found" />
                                        </span>
                                        <h3>{item.heading}</h3>
                                        <ServiceParagraph text={item.desc} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <AppButton href="/contact" type='button' title="Request a website Audit" classes='submitBtn' />
                    </div>
                </div>

                <div className="spacingSection">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ServiceSubHeading text="Why You Need SEO" />
                            <div className="row mt-5">
                                <div className="col-sm-6 mb-4">
                                    <div className="contentWritingCard justify-content-center">
                                        <h6 className="text-white">1. MORE TRAFFIC</h6>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="contentWritingCard justify-content-center">
                                        <h6 className="text-white">2. CUSTOMERS FIND YOU</h6>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="contentWritingCard justify-content-center">
                                        <h6 className="text-white">3. BRAND RECOGNITION</h6>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-4">
                                    <div className="contentWritingCard justify-content-center">
                                        <h6 className="text-white text-center">4. MORE BUSINESS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <Image src={imgNeed} className="w-100" alt="Image not found" />
                        </div>
                    </div>
                </div>

                <div className="serviceSpacing">
                    <ServiceSubHeading text="SEO Services can improve your website’s reach and impact!" />
                    <div className="mt-4">
                        <ServiceParagraph text="Optimizing your website for search engines is the most effective way to increase your organic reach for your website. SEO allows search engines to better ‘read’ your webpages and serve your website to a wider audience. Websites with poor SEO and organic traffic have far less conversions and sales than websites that focus on organic search traffic. If your website is not on the first page of Google for your primary keywords, your website isn’t being viewed by 90% of people who could greatly benefit from your business. Bringing the majority of your web traffic through ads is costly and less effective than organic search. Organic traffic converts at a much higher rate than ad traffic. If you optimize your site for high volume, impactful keywords, you’ll find far greater results than simply increasing your ad budget." />
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
                            {FAQseo.map((item, index) => (
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