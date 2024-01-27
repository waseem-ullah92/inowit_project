import { useState } from "react";



// ================== Next ==================
import Image from "next/image";



// ================== Components ==================
import FormInput from "../common/formInput";
import Paragraph from "../common/paragraph";
import SubHeading from "../common/sub-heading";

import footerImg from '../../../public/images/footer.png'

// ================== Styles ==================
import styles from '../../styles/home.module.css';
import img from "../../../public/images/contact.png"
import AppButton from "../common/button";



export default function Contact() {


    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");


    const contactFormHandler = (event: any) => {
        event.preventDefault();

        console.log("First Name: =====> ", firstname);
        console.log("Last Name: =====> ", lastname);
        console.log("Email: =====> ", email);
    }

    return (
        <div className={styles.contactMain}>
            <div className="container pt-5 pb-5 position-relative" style={{ zIndex: '1' }}>
                <div className="row align-items-center justify-between">
                    <div className="col-lg-5" data-aos="fade-right">
                        <SubHeading text="Get Our Latest News!" />
                        <Paragraph text="Sign up for our email to receive special offers and marketing updates." />
                        <form onSubmit={contactFormHandler}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <FormInput
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={firstname}
                                        onChange={(e: any) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <FormInput
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={lastname}
                                        onChange={(e: any) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <FormInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-12">
                                    {/* <AppButton type="submit" className="submitBtn">Submit</AppButton> */}
                                    <div className="d-flex justify-content-center justify-content-sm-start">
                                        <AppButton type='submit' title="Submit" classes='submitBtn' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5 mt-3 mt-sm-0" data-aos="fade-left">
                        <Image src={img} className="mx-auto" alt="image not found" />
                    </div>
                </div>
            </div>

        </div >
    )
}