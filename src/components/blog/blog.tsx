import { Fragment } from "react";
import TopBanner from "./top-banner";
import { BlogData2, BlogsData1 } from "../constants/blogs";
import Image from "next/image";
import style from "../../styles/blog.module.css";
import calendar from "../../../public/images/blog/calendar.png";
import time from "../../../public/images/blog/time.png";
import Link from "next/link";
import AppButton from "../common/button";
import { v4 as uuidv4 } from "uuid";

export default function Blog() {
    let cardCount = -1;
    return (
        <Fragment>
            <TopBanner />
            <div className="container">
                <div className="row mb-5">
                    <div className={`${style.blogBorder} col-lg-7`}>
                        <div className={`${style.blogsMain}`}>
                            {BlogsData1.map((item) => (
                                <div className={`${style.blogCard} p-4 h-100 bg-white mb-4`} key={uuidv4()}>
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <Image src={item.img} alt="image not found" className={`${style.mainBlogImage} w-100 h-100`} style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="col-sm-7 mt-2 mt-sm-0">
                                            <span className="topBadge">{item.topBadge}</span>
                                            <h1 className={style.blogHeading}>{item.heading}</h1>
                                            <div className="row">
                                                <div className="col-12 mb-2 col-sm mb-sm-0  border-end">
                                                    <div className="d-flex">
                                                        <Image src={item.adminPic} alt="image not found" width={22} />
                                                        <h6 className={`${style.adminText} ps-2 mb-0`}>{item.adminText}</h6>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm mb-2 mb-sm-2 border-end">
                                                    <span className={`${style.adminText} d-flex`}>
                                                        <Image src={calendar} alt="image not found" width={15} height={15} style={{ objectFit: "contain" }} />
                                                        &nbsp; {item.date}</span>
                                                </div>
                                                <div className="col-12 col-sm">
                                                    <span className={`${style.adminText} d-flex`}>
                                                        <Image src={time} alt="image not found" width={15} height={15} style={{ objectFit: "contain" }} />
                                                        &nbsp; {item.time}</span>
                                                </div>
                                            </div>
                                            <p className={`${style.bolgDesc} mb-3`}>{item.desc}</p>
                                            <Link href={item.buttonLink} className={style.blogButton}>{item.buttonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center">
                        <div className={`${style.blogLine} h-100`}></div>
                    </div>
                    <div className="col-lg-4">
                        {BlogData2.map((item) => (
                            <Link href={item.link} key={uuidv4()}>
                                <div className="row mb-4">
                                    <div className="col-sm-4">
                                        <Image src={item.img} alt="image not found" className={`${style.mainBlogImage} w-100 h-100`} style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="col-sm-8">
                                        <span className="sidetopBadge">{item.topBadge}</span>
                                        <h1 className={style.sideblogHeading}>{item.heading}</h1>
                                        <div className="row">
                                            <div className="col border-end">
                                                <div className="d-flex">
                                                    <Image src={item.adminPic} alt="image not found" width={22} />
                                                    <h6 className={`${style.adminText} ps-2 mb-0`}>{item.adminText}</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <span className={`${style.adminText} d-flex`}>
                                                    <Image src={time} alt="image not found" width={15} height={15} style={{ objectFit: "contain" }} />
                                                    &nbsp; {item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        <div className={`${style.blogForm} mt-5`}>
                            <h1 className="mb-4">
                                Sign Up to Our
                                Newsletter!
                            </h1>
                            <form>
                                <div className="formGroup">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="formGroup">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <AppButton type='submit' title="Subscribe" classes='submitBtn w-100' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}