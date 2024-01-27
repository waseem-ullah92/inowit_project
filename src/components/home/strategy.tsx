// ================== Next ==================
import Image from "next/image";

// ================== Componets ==================
import Paragraph from "../common/paragraph";
import SubHeading from "../common/sub-heading";
import MainHeading from "../common/main-heading";
import SectionCloud from "../common/section-cloud";
import PrimaryButton from "../common/primary-button";
import SectionCloudBottom from "../common/section-cloud-bottom";


// ================== Constants and Packages ==================
import { v4 as uuidv4 } from 'uuid';
import { ourStrategy } from "../constants/strategy";



export default function OurStrategy() {
    return (
        <div className="mainSection">
            {/* <SectionCloud /> */}
            <MainHeading text="our strategy" data-aos="fade-up" />
            <div className="container">
                {
                    ourStrategy.map((item) => (
                        <div key={uuidv4()} className="row">

                            <div className="col-lg-5 mt-lg-5" data-aos="fade-right">
                                <SubHeading text={item.heading} />
                                <Paragraph text={item.text} classes="mt-3 mb-4 primary-color" />
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <PrimaryButton href={item.btnLink} text={item.btnText} />
                                </div>
                            </div>
                            <div className="col-lg-7 mt-3 mt-sm-0" data-aos="fade-left">
                                <Image src={item.sectionImg} alt="image not found" />
                            </div>
                        </div>

                    ))
                }
                {/* <SectionCloudBottom /> */}
            </div>
        </div>
    )
}