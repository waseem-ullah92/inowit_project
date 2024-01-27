// ================== Next ==================
import Image from "next/image";


// ================== Components ==================
import Paragraph from "../common/paragraph";
import SubHeading from "../common/sub-heading";
import MainHeading from "../common/main-heading";
import SectionCloud from "../common/section-cloud";
import PrimaryButton from "../common/primary-button";
import SectionCloudBottom from "../common/section-cloud-bottom";


// ================== Constant and Packages ==================
import { v4 as uuidv4 } from 'uuid';
import { letsChat } from "../constants/chat";



export default function LetsChat() {
    return (
        <div className="mainSection pb-5">
            {/* <SectionCloud /> */}
            <MainHeading text="Let's Chat" data-aos="fade-up" />
            <div className="container">
                {
                    letsChat.map((item) => (
                        <div key={uuidv4()} className="row">

                            <div className="col-lg-5 mt-lg-5 mb-4 mb-sm-2 mb-lg-0" data-aos="fade-right">
                                <SubHeading text={item.heading} />
                                <h3 className="chatHeading">{item.subheading}</h3>
                                <Paragraph text={item.text} classes="mt-3 mb-4 primary-color" />
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <PrimaryButton href={item.btnLink} text={item.btnText} />
                                </div>
                            </div>
                            <div className="col-lg-7 mt-4 mt-sm-0" data-aos="fade-left">
                                <Image src={item.sectionImg} alt="image not found" className="h-100" style={{ objectFit: 'contain' }} />
                            </div>
                        </div>

                    ))
                }
                {/* <SectionCloudBottom /> */}
            </div>
        </div>
    )
}