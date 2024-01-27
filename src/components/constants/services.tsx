// ================== Assets ==================
import img1 from './../../../public/images/graphic.png';
import img2 from "../../../public/images/seo.png";
import img3 from "../../../public/images/digital.png";
import img4 from "../../../public/images/web.png";
import img5 from "../../../public/images/email.png";
import img6 from "../../../public/images/content.png";
import WebDesignSvg from '@/assets/web-design';
import SEOSvg from '@/assets/seo';
import DigitalMarketing from '@/assets/digital-marketing';
import DynamicWebSvg from '@/assets/dynamic-web';
import EmailMarketingSvg from '@/assets/email-marketing';
import ContentStrategySvg from '@/assets/content-strategy';



export const servicesData: any = [
    {
        cardImg: <DynamicWebSvg />,
        cardHead: "Dynamic Web Design",
        text: "Creating visually stunning websites that engage audiences and deliver impactful user experiences for your brand",
        buttonText: "LEARN MORE",
        btnLink: "/webdesign"
    },
    {
        cardImg: <SEOSvg />,
        cardHead: "SEO Mastery",
        text: "Boosting online visibility and organic growth through expert SEO strategies, enhancing your website's search engine performance.",
        buttonText: "LEARN MORE",
        btnLink: "/seo"
    },
    {
        cardImg: <DigitalMarketing />,
        cardHead: "Digital Marketing",
        text: "Through Social Media you can effectively market your business in an enjoyable and interactive manner, ultimately boosting your brand's visibility.",
        buttonText: "LEARN MORE",
        btnLink: "/digitalmarketing"
    },
    {
        cardImg: <WebDesignSvg />,
        cardHead: "Creative Graphic Design",
        text: "Fostering creativity via cutting-edge graphic design to artistically convey your brand's distinctive narrative with style.",
        buttonText: "LEARN MORE",
        btnLink: "/graphicdesign"
    },
    {
        cardImg: <EmailMarketingSvg />,
        cardHead: "Email Marketing",
        text: "Effortlessly transmit communications regarding your enterprise, offerings, products, special offers, and promotional campaigns with a simple click of a button.",
        buttonText: "LEARN MORE",
        btnLink: "/emailmarketing"
    },
    {
        cardImg: <ContentStrategySvg />,
        cardHead: "Content Strategy",
        text: "Developing a comprehensive content strategy will enhance the cohesion and effectiveness of your overall marketing approach, fostering synergy across all elements.",
        buttonText: "LEARN MORE",
        btnLink: "/contentwriting"
    }
]