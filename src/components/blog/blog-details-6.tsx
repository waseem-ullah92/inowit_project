import BackButton from "../common/back-button";
import img from "../../../public/images/blog/blog5.png";
import Image from "next/image";
import style from "../../styles/blog.module.css";
import calendar from "../../../public/images/blog/calendar.png";
import time from "../../../public/images/blog/time.png";
import adminImg from "../../../public/images/blog/admin.png";

export default function BlogDetails6() {
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
                        Strategies for Success in the Digital Age
                    </h1>
                    <p>
                        In today's fast-paced and ever-changing digital landscape, success hinges on the ability to adapt and thrive. The digital age has ushered in new opportunities and challenges for individuals and businesses alike. To ensure you're on the path to success, consider these strategies tailored for the digital era:
                    </p>
                    <h2>
                        1. Embrace Change
                    </h2>
                    <p>
                        Change is the only constant in the digital age. Embrace it. Stay curious, be open to new technologies, and continuously update your skills. Flexibility and adaptability are your best allies.
                    </p>
                    <h2>
                        2. Prioritize Digital Literacy
                    </h2>
                    <p>
                        In the digital age, literacy extends beyond reading and writing; it includes digital literacy. Understand the tools, platforms, and technologies that shape our world. Invest time in learning and staying updated.
                    </p>

                    <h2>
                        3. Cultivate a Growth Mindset
                    </h2>
                    <p>
                        A growth mindset fosters resilience and a willingness to learn from failures. Embrace challenges as opportunities for growth, and view setbacks as stepping stones toward success.
                    </p>

                    <h2>
                        4. Master Data Management
                    </h2>
                    <p>
                        Data is the lifeblood of the digital age. Learn to collect, analyze, and leverage data effectively. Data-driven decision-making is a key driver of success in business and personal endeavors.
                    </p>

                    <h2>
                        5. Build a Strong Online Presence
                    </h2>
                    <p>
                        In the digital age, your online presence is often your first impression. Maintain a professional and consistent online image across social media, websites, and professional networks.
                    </p>

                    <h2>
                        6. Content is King
                    </h2>
                    <p>
                        Create valuable and engaging content. Whether it's for a personal blog or a business website, quality content attracts and retains audiences. Regularly update and refresh your content to stay relevant.
                    </p>

                    <h2>
                        7. Adapt to Remote Work
                    </h2>
                    <p>
                        Remote work is now a standard practice. Develop skills to excel in virtual environments, including effective communication, time management, and collaboration tools.
                    </p>

                    <h2>
                        8. Cybersecurity Awareness
                    </h2>
                    <p>
                        With increased digital activity comes increased cybersecurity risks. Protect your data and privacy by staying vigilant and adopting security best practices.
                    </p>

                    <h3>Conclusion</h3>
                    <p>
                        success in the digital age demands agility, adaptability, and a commitment to ongoing learning and improvement. Embrace the opportunities presented by technology while staying mindful of the potential challenges. By incorporating these strategies into your personal and professional life, you can navigate the digital age with confidence and achieve your goals.
                    </p>
                </div>
            </div>
        </div>
    )
}