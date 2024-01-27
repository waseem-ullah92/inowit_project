// ================== Next ==================
import Image from "next/image";


// ================== Components ==================
import Paragraph from "../common/paragraph";
import SubHeading from "../common/sub-heading";
import MainHeading from "../common/main-heading";
import SectionCloud from "../common/section-cloud";
import PrimaryButton from "../common/primary-button";
import SectionCloudBottom from "../common/section-cloud-bottom";
import bannerImg from '../../../public/images/home/hero.png';


// ================== Constants and Packages ==================
import { v4 as uuidv4 } from 'uuid';
import { pickUs } from "../constants/pickus";


export default function PickUs() {
    return (
        <div className="mainSection">
            {/* <SectionCloud /> */}
            <MainHeading text="why pick us" data-aos="fade-up" />
            <div className="container">
                {
                    pickUs.map((item) => (
                        <div key={uuidv4()} className="row">

                            <div className="col-lg-5 mt-lg-5" data-aos="fade-right">
                                <SubHeading text={item.heading} />
                                <Paragraph text={item.text} classes="mt-3 mb-4 text-black" />
                                <div className="d-flex justify-content-center justify-content-sm-start mb-4">
                                    <PrimaryButton href={item.btnLink} text={item.btnText} />
                                </div>
                            </div>
                            <div className="col-lg-7 mt-3 mt-sm-0" data-aos="fade-left">
                                <Image src={bannerImg} alt="Pick up" />
                            </div>
                        </div>

                    ))
                }
            </div>
            {/* <SectionCloudBottom /> */}
        </div>
    )
}