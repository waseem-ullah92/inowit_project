import { Fragment } from "react"
import Image from "next/image";
import img from "../../../public/images/consultation.png";
import BannerHeading from "../common/banner-heading";
import ServiceSubHeading from "../services/service-subheading";
import ConsultationParagraph from "./consultationParagraph";
import ServiceParagraph from "../common/service-paragraph";
import AppButton from "../common/button";
import { countryData } from "./country-mock";

import { v4 as uuidv4 } from "uuid"

export default function Consultation() {
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <BannerHeading isBlue isLeft text="Get a FREE Digital Marketing Consultation" />
                        </div>
                        <ServiceParagraph text="Our team is ready to review your business and suggest improvements to help you get more visitors, more leads, more sales and increase revenue through digital marketing channels." />
                    </div>
                    <div className="col-lg-6">
                        <Image src={img} className="w-100" alt="image not found" />
                    </div>
                </div>
                <div className="mt-5">
                    <ServiceSubHeading text="About You" />
                    <ServiceParagraph classes="mt-5" text="Provide your basic contact info for us to reach you regarding your query. You may have already provided some of this contact information. We request you to add this again for a record in our database." />

                    <form className="my-5">
                        <div className="row align-items-baseline flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <ConsultationParagraph text="Please add your full name here." />
                            </div>
                        </div>

                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="text" placeholder="Contact Number" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <ConsultationParagraph text="A number where we can reach you. Please add your country and area code as well." />
                                <ConsultationParagraph text="An email ID where we'll communicate everything with you." />
                            </div>
                        </div>

                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="text" placeholder="Business/Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="url" placeholder="Website URL" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <ConsultationParagraph text="Business/Company Name" />
                                <ConsultationParagraph text="Business/Company Website Link" />
                            </div>
                        </div>

                        <div className="row align-items-baseline flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <input type="text" placeholder="Business Address" />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <ConsultationParagraph text="Detailed Business address" />
                            </div>
                        </div>

                        <div className="row align-items-baseline">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <input type="text" placeholder="Street Address" />
                                </div>
                            </div>
                        </div>


                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <input type="text" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="formGroup">
                                            <select>
                                                {countryData?.map((item: any) => (
                                                    <option key={uuidv4()}>{item?.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <ConsultationParagraph text="A number where we can reach you. Please add your country and area code as well." />
                                <ConsultationParagraph text="An email ID where we'll communicate everything with you." />
                            </div>
                        </div>

                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <textarea placeholder="Describe your business"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <ConsultationParagraph classes="fw-bold primary-color" text="More details regarding your business." />
                                <ConsultationParagraph text="Following information is required before we can provide you any consultation. Kindly provide as much information as you can." />
                            </div>
                        </div>

                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <textarea placeholder="Describe your product/services"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <ConsultationParagraph text="Please describe the product(s) or service(s) you are offering." />
                            </div>
                        </div>

                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <label>I’m Interested In:</label>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-1" name="value-1" value="Dynamic Web Design" />
                                        <label htmlFor="value-1"><span className="custom-checkBox-text ms-3">Dynamic Web Design</span></label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-2" name="value-2" value="SEO Mastery" />
                                        <label htmlFor="value-2"><span className="custom-checkBox-text ms-3">SEO Mastery</span></label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-3" name="value-3" value="Digital Marketing" />
                                        <label htmlFor="value-3"><span className="custom-checkBox-text ms-3">Digital Marketing</span></label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-4" name="value-4" value="Email Marketing" />
                                        <label htmlFor="value-4"><span className="custom-checkBox-text ms-3">Email Marketing</span></label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-5" name="value-5" value="Content Strategy" />
                                        <label htmlFor="value-5"><span className="custom-checkBox-text ms-3">Content Strategy</span></label>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="custum-safety-checkbox" type="checkbox" id="value-6" name="value-6" value="Creative Graphic Design" />
                                        <label htmlFor="value-6"><span className="custom-checkBox-text ms-3">Creative Graphic Design</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <ConsultationParagraph text="Please Select the check Box of services you interested in." />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="formGroup">
                                    <textarea placeholder="Project Description"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-sm-start">
                            <AppButton type='submit' title="Submit" classes='submitBtn' />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}