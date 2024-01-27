import { Fragment, useEffect, useState, useRef } from "react"
import ServiceSubHeading from "../services/service-subheading"
import Image from "next/image";
import { enqueueSnackbar } from 'notistack';
import img1 from "../../../public/images/phoneContact.png";
import img2 from "../../../public/images/messageContact.png";
import img3 from "../../../public/images/addressContact.png"
import ServiceParagraph from "../common/service-paragraph";
import AppButton from "../common/button";
import { BsArrowUpRight } from "react-icons/bs";

import BannerHeading from "../common/banner-heading";
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactUs() {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [recaptchKey, setRecaptchKey] = useState('');

    const recaptchaRef = useRef<any>(null);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Check if reCAPTCHA is checked
        if (!recaptchKey) {
            enqueueSnackbar(`Please complete the reCAPTCHA.`, {
                variant: 'error',
                autoHideDuration: 4000
            });
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                console.log('Email sent successfully');
                enqueueSnackbar(`Thank you! Your message has been sent. We'll get in touch with you soon.`, {
                    variant: 'success',
                    autoHideDuration: 4000
                });

            } else {
                console.error(data.message);
                enqueueSnackbar(`Error while sending message`, {
                    variant: 'error',
                    autoHideDuration: 4000
                });
            }
        } catch (error) {
            console.error('Error:', error);
            enqueueSnackbar(`Error while sending message`, {
                variant: 'error',
                autoHideDuration: 4000
            });
        }
        finally {
            setIsLoading(false);
            setRecaptchKey('');
            recaptchaRef.current.reset()
        }
    };




    return (
        <Fragment>
            <div className="companyMain py-5">
                <div className="container">
                    <BannerHeading propClasses="text-center primary-color font-oswald mt-2 mb-4" text="Contact Us" />
                    <ServiceParagraph isCenter text="Interested In Starting Your Project With Us? Just Want To Chat?" />
                    <ServiceParagraph isCenter text="Use The Form Below And We’ll Get Back To You Straight Away!" />

                </div>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-11">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="formGroup">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="formGroup">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="formGroup">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="formGroup">
                                        <label>Phone <span className="text-danger">*</span></label>
                                        <input type="text" name="phone" required value={formData.phone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="formGroup">
                                        <label>Company</label>
                                        <input type="text" name="company" required value={formData.company} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="formGroup">
                                        <label>Message</label>
                                        <textarea name="message" required value={formData.message} onChange={handleChange} ></textarea>
                                    </div>
                                </div>

                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_AUTH_RECAPTCHA_KEY || ""}
                                    onChange={(e: any) => setRecaptchKey(e)}
                                    style={{ marginBottom: "1rem" }}
                                    onExpired={() => recaptchaRef.current.reset()}
                                />

                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <AppButton type='submit' title={isLoading ? "Loading ...." : "Let's Chat"} disabled={isLoading || !recaptchKey} classes='submitBtn' />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="row mt-5 align-items-end">
                    <div className="col-md-6 contactBorder">
                        <div className="d-flex align-items-center mb-4">
                            <span>
                                <Image className="contactImage" src={img1} alt="image not found" width={34} height={34} />
                            </span>
                            <h3 className="contactText pl-5">+1(437)3667729</h3>
                        </div>

                        <div className="col-sm-6">
                            <div className="d-flex align-items-center mb-4">
                                <span>
                                    <Image className="contactImage" src={img2} alt="image not found" width={34} height={34} />
                                </span>
                                <h3 className="contactText pl-5">info@inowit.ca</h3>
                            </div>
                        </div>

                        <div className="d-flex">
                            <span>
                                <Image className="contactImage" src={img3} alt="image not found" width={34} height={34} />
                            </span>
                            <h3 className="contactText pl-5">Edmonton, Alberta-Canada</h3>
                        </div>
                    </div>

                    <div className="col-md-6 ps-lg-5 ps-md-4 ps-4 mt-4 mt-md-0">
                        <div className=" mb-4 serviceHeadingCustomResponsive">
                            <ServiceSubHeading text="Our Serving Regions" />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="contactOffices">Canada <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">USA <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">UK <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">Australia <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">New Zealand <span><BsArrowUpRight /></span></p>
                            </div>
                            <div className="col-sm-6">
                                <p className="contactOffices">Sweden <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">Saudi Arabia <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">Dubai <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">Qatar <span><BsArrowUpRight /></span></p>
                                <p className="contactOffices">Oman <span><BsArrowUpRight /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}