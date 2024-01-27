// ================== Next ==================
import Link from "next/link"
import Image from "next/image"


// ================== Components ==================
import MainHeading from "../common/main-heading";


// ================== Constants and Packages ==================
import { v4 as uuidv4 } from 'uuid';
import { servicesData } from "../constants/services"
import WebDesignSvg from "@/assets/web-design";
import tpImg from '../../../public/images/serviceTp.png';
import btImg from '../../../public/images/servicBtm.png';




export default function Services() {
    return (
        <>

            <div className="servicesBG mainSection" data-aos="fade-up">
                <MainHeading text="Our services" />
                <div className="container position-relative">
                    <Image src={tpImg} alt="img not found" className="d-none d-lg-block mx-xl-5" width={90} style={{ position: 'absolute', top: "0", left: "-75px" }} />

                    <div className="row  mx-xl-5 px-xl-1">
                        {
                            servicesData.map((item: any) => (
                                <div className="col-md-6 col-xl-4" style={{ padding: "1rem" }} key={uuidv4()}>
                                    <div className="serviceCard justify-content-between">
                                        <div className="text-center d-flex flex-column align-items-center">
                                            {item.cardImg}
                                            <h2>{item.cardHead}</h2>
                                            <p>{item.text}</p>
                                        </div>
                                        <Link href={item.btnLink}>{item.buttonText}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Image src={btImg} className="d-none d-lg-block mx-xl-5" alt="Img not found" style={{ position: 'absolute', right: "-65px", bottom: '50px' }} />
                </div>
            </div>
        </>
    )
}