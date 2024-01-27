import Image from "next/image";
import style from "../../styles/footer.module.css";
import logo from "../../../public/images/white-logo.png";
import Paragraph from "../common/paragraph";
import { FooterSocial, footerMenu } from "../constants/footer-main";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


export default function FooterMain() {
    return (
        <footer className={style.mainFooter}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <Image src={logo} className={style.footerImg} alt="image not found" />
                        <div className={style.footerParagraph}>
                            <Paragraph text="Inowit is a full service marketing agency based in Alberta,Canada. Our priority is to help our clients reach their fullest potential, and we do this by providing marketing plans and strategies that will help them exceed their goals." classes="text-white" />
                        </div>
                        <div className="d-flex gap-4">
                            {FooterSocial.map((item) => (
                                <Link href={item.href} key={uuidv4()} target="_blank" rel="noopener noreferrer">
                                    <Image src={item.img} alt="image not found" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    {footerMenu.map((item) => (
                        <div key={uuidv4()} className="col-lg-auto col-md-4 col-sm-6 mt-4 mt-lg-0">
                            <h5 className={style.footerHeading}>{item.mainHeading}</h5>
                            <Link className={style.footerAnchor} href={item.link1}><MdKeyboardArrowRight /> {item.menuItem1}</Link>
                            <Link className={style.footerAnchor} href={item.link2}><MdKeyboardArrowRight /> {item.menuItem2}</Link>
                            <Link className={style.footerAnchor} href={item.link3}><MdKeyboardArrowRight /> {item.menuItem3}</Link>
                            {item.menuItem4 && <Link className={style.footerAnchor} href={item.link4}><MdKeyboardArrowRight /> {item.menuItem4}</Link>}
                            {item.menuItem5 && <Link className={style.footerAnchor} href={item.link5}><MdKeyboardArrowRight /> {item.menuItem5}</Link>}
                            {item.menuItem6 && <Link className={style.footerAnchor} href={item.link6}><MdKeyboardArrowRight /> {item.menuItem6}</Link>}
                        </div>
                    ))}
                    <div className="col-lg col-md-4 col-sm-6 mt-4 mt-lg-0">
                        <h5 className={style.footerHeading}>Contact Info</h5>
                        <p className={style.footerContact}><MdKeyboardArrowRight /> <Link href='tel:+14373667729'>+1(437)366-7729</Link></p>
                        <p className={style.footerContact}><MdKeyboardArrowRight /> <Link href="mailto:Info@inowit.ca" style={{ fontSize: "18px" }}>Info@inowit.ca</Link></p>
                        <p className={style.footerContact}><MdKeyboardArrowRight /> Edmonton, Alberta-Canada</p>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <div className="col-sm">
                        <p className={style.footerEnd}>© 2023. All rights reserved.</p>
                    </div>
                    <div className="col-sm-auto">
                        <div className="d-flex">
                            <Link className={`${style.footerEnd} col-auto`} href="/tos">Terms of Service</Link>
                            <Link className={`${style.footerEnd} col-auto ms-5`} href="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}