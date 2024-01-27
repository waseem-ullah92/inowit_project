import BackButton from "../common/back-button";
import img from "../../../public/images/blog/blog4.png";
import Image from "next/image";
import style from "../../styles/blog.module.css";
import calendar from "../../../public/images/blog/calendar.png";
import time from "../../../public/images/blog/time.png";
import adminImg from "../../../public/images/blog/admin.png";

export default function BlogDetails4() {
    return (
        <div className="container my-5">
            <div className="blogDetailsMain bg-white p-4">
                <BackButton />
                <div className="my-4">
                    <Image src={img} alt="image not found" className="w-100" style={{ height: "450px", objectFit: "cover" }} />
                </div>

                <div className="row">
                    <div className="col-lg-7 mb-3 mb-sm-0">
                        <span className="topBadge">Content Marketing</span>
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
                        Exploring its Significance in Modern Communication
                    </h1>
                    <p>
                        In the era of digital communication, where words alone often fall short, emojis have emerged as a universal language that transcends borders and languages. These tiny pictorial symbols have become a staple in our messages, emails, and social media interactions. In this blog, we'll delve into the significance of emojis in modern communication and how they have transformed the way we express ourselves.
                    </p>
                    <h2>
                        1. Universal Expression
                    </h2>
                    <p>
                        Emojis break down language barriers, allowing people from different linguistic backgrounds to convey emotions, reactions, and sentiments effectively.
                    </p>
                    <h2>
                        2. Emotional Depth
                    </h2>
                    <p>
                        Emojis add emotional nuance to text-based communication. They help convey tone and mood, preventing misunderstandings and misinterpretations.
                    </p>

                    <h2>
                        3. Visual Storytelling
                    </h2>
                    <p>
                        Emojis enable concise and creative storytelling. They can replace entire sentences with a single image, making messages more engaging and memorable.
                    </p>

                    <h2>
                        4. Personalization and Identity
                    </h2>
                    <p>
                        Emojis allow individuals to personalize their communication style. People often develop unique emoji combinations that reflect their personality and identity.
                    </p>

                    <h2>
                        5. Enhancing Engagement
                    </h2>
                    <p>
                        In marketing and advertising, emojis are used to grab attention and enhance engagement. They make content more appealing and relatable to a broader audience.
                    </p>

                    <h2>
                        6. Social and Cultural Significance
                    </h2>
                    <p>
                        Emojis reflect cultural and societal changes. The addition of diverse skin tones and culturally specific emojis acknowledges and celebrates diversity.
                    </p>

                    <h2>
                        7. Psychological Impact
                    </h2>
                    <p>
                        Studies show that emojis can have a positive psychological impact, promoting empathy, and making conversations more enjoyable.
                    </p>

                    <h2>
                        8. Future Trends
                    </h2>
                    <p>
                        The role of emojis in communication is evolving. Augmented reality (AR) emojis and animated emojis are emerging trends, taking expression to a new level.
                    </p>

                    <h3>Conclusion</h3>
                    <p>
                        Emojis have transformed the way we communicate in the digital age. They go beyond being mere embellishments and have become essential tools for conveying emotions, enriching messages, and bridging gaps in our increasingly globalized world. Embrace the power of emojis, and you'll find that they add depth, richness, and a touch of fun to your everyday conversations.
                    </p>
                </div>
            </div>
        </div>
    )
}