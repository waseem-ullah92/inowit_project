import BackButton from "../common/back-button";
import img from "../../../public/images/blog/blog3.png";
import Image from "next/image";
import style from "../../styles/blog.module.css";
import calendar from "../../../public/images/blog/calendar.png";
import time from "../../../public/images/blog/time.png";
import adminImg from "../../../public/images/blog/admin.png";

export default function BlogDetails3() {
    return (
        <div className="container my-5">
            <div className="blogDetailsMain bg-white p-4">
                <BackButton />
                <div className="my-4">
                    <Image src={img} alt="image not found" className="w-100" style={{ height: "450px", objectFit: "cover" }} />
                </div>

                <div className="row">
                    <div className="col-lg-7 mb-3 mb-sm-0">
                        <span className="topBadge">Digital Marketing</span>
                    </div>
                    <div className="col-12 col-sm mb-2 mb-sm-0 border-end">
                        <div className="d-flex">
                            <Image src={adminImg} alt="image not found" width={22} />
                            <h6 className={`${style.adminText} ps-2 mb-0`}>Admin</h6>
                        </div>
                    </div>
                    <div className="col-12 col-sm mb-2 mb-sm-0 border-end">
                        <span className={`${style.adminText} d-flex`}>
                            <Image src={calendar} alt="image not found" width={15} height={15} style={{ objectFit: "contain" }} />
                            &nbsp; 2 August 2023</span>
                    </div>
                    <div className="col-12 col-sm">
                        <span className={`${style.adminText} d-flex`}>
                            <Image src={time} alt="image not found" width={15} height={15} style={{ objectFit: "contain" }} />
                            &nbsp; 3 Min. Read</span>
                    </div>
                </div>

                <div className={`${style.detailsDev} mt-4`}>
                    <h1 className="my-4">
                        SEO in 2023: Staying Ahead in Search Engine Rankings
                    </h1>
                    <p>
                        In the ever-evolving landscape of digital marketing, search engine optimization (SEO) remains a critical factor for businesses aiming to succeed online. As we step into 2023, SEO is poised to undergo several significant changes and challenges. To help you stay ahead in search engine rankings and adapt to the latest trends, here are ten essential areas to focus on:
                    </p>
                    <h2>
                        1. User Experience (UX) and Core Web Vitals
                    </h2>
                    <p>
                        Enhancing user experience by optimizing Core Web Vitals like page speed, mobile-friendliness, and overall website performance will continue to be a top priority in SEO.
                    </p>
                    <h2>
                        2. Voice Search Optimization
                    </h2>
                    <p>
                        As voice-activated devices become more prevalent, optimizing your content for voice search queries will be crucial for maintaining visibility in search results.
                    </p>

                    <h2>3. Content Quality and Relevance</h2>
                    <p>
                        High-quality, relevant, and comprehensive content will remain a cornerstone of successful SEO. Focus on creating content that genuinely addresses users' needs and concerns.
                    </p>

                    <h2>
                        4. Mobile-First Indexin
                    </h2>
                    <p>
                        With Google's mobile-first indexing as the norm, ensuring your website is mobile-responsive and offers a seamless mobile experience is paramount.
                    </p>

                    <h2>
                        5. Structured Data and Schema Markup
                    </h2>
                    <p>
                        Implementing structured data and schema markup can enhance the visibility of your content in rich snippets and featured snippets, improving click-through rates.
                    </p>

                    <h2>
                        6. Artificial Intelligence (AI) and Machine Learning
                    </h2>
                    <p>
                        AI-driven tools and algorithms are becoming more prevalent in SEO. Embrace AI for tasks like content optimization, keyword research, and competitor analysis.
                    </p>

                    <h2>
                        7. Video SEO
                    </h2>
                    <p>
                        Video content continues to gain popularity. Optimize your videos for search engines to tap into the growing audience looking for video content.
                    </p>

                    <h2>
                        8. E-A-T (Expertise, Authoritativeness, Trustworthiness)
                    </h2>
                    <p>
                        Google places a strong emphasis on E-A-T. Demonstrate your expertise, authoritativeness, and trustworthiness in your content and online presence to boost rankings.
                    </p>

                    <h3>Conclusion</h3>
                    <p>
                        SEO in 2023 is all about adapting to changes in user behavior, search engine algorithms, and technology. Staying ahead in search engine rankings requires a holistic approach that combines technical optimization, high-quality content, and a commitment to delivering an exceptional user experience. By focusing on these ten areas, you can position your website for success in the competitive online landscape of 2023 and beyond.
                    </p>
                </div>
            </div>
        </div>
    )
}