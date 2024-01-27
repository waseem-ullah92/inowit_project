import React, { Fragment } from 'react'
import BannerHeading from '../common/banner-heading'
import BannerBreadcrumb from '../common/banner-breadcrumb'
import ServiceCard from '../services/service-description'
import ServiceParagraph from '../common/service-paragraph'

const PrivacyPolicyComponent = () => {
    return (
        <Fragment>
            <div className="serviceBanner">
                <BannerHeading text="Privacy Policy & Terms of Use" />
                <BannerBreadcrumb text1="Home" text2="Privacy Policy " />
            </div>

            <ServiceCard>
                <BannerHeading isLeft text="What Personal Information Do We Gather From Those Who Visit Our Site?" isBlue />
                <ServiceParagraph text="When you visit our website, you may provide us with two types of information: personal information you knowingly choose to disclose, and information that we automatically collect as you browse our website." />
            </ServiceCard>

            <ServiceCard noPadding>
                <BannerHeading isLeft text="Information You Voluntarily Submit" isBlue />
                <ServiceParagraph text="We collect and store any information you enter on our website, or provide to us in offline contacts we have with you. Information is collected from visitors to the website in the following areas:" />
                <ul style={{ listStyle: "inside", padding: "1em" }}>
                    <li className='serviceParagraph'><span className='font-bold'>Email Forms</span> – If you use our email forms, we will generally ask you to provide contact information.</li>
                    <li className='serviceParagraph'><span className='font-bold'>Surveys</span> – At times, you may be asked to complete survey questions that appear on the website.</li>
                    <li className='serviceParagraph'><span className='font-bold'>Client Information </span> – If you are a client, you may be asked to provide information we require to maintain your account or provide your services.</li>
                </ul>
            </ServiceCard>

            <ServiceCard noPadding>
                <BannerHeading isLeft text="Information Collected and Stored Automatically" isBlue />
                <ServiceParagraph text="When you browse our website, you and your web browser may also transmit information that we automatically collect. We do log your IP address (the Internet address of your computer), the web pages you visit and the time of your visit, and other click-stream data. This information may be combined with other personal information you have provided. The only other type of information automatically provided to us is the type of computer, operating system and browser you are using. This information is provided by your browser, which we use to improve the performance of our site." />
                <br />
                <ServiceParagraph text="We may also place small data files, called “cookies,” in the browser file of your computer’s hard drive. These cookies automatically identify your browser to our server whenever you interact with the website. We use the cookies to record website statistics. Most browsers automatically accept the cookies, but you usually can change your browser setting to prevent the acceptance of cookies. Certain web pages may not function properly if you choose not to accept cookies." />
            </ServiceCard>


            <ServiceCard noPadding>
                <BannerHeading isLeft text="How We Use Your Personal Information" isBlue />
                <ServiceParagraph text="We use your personal information to communicate with you, if and when necessary, in connection with your use of our website, to respond to your questions, or to send you material and information you request. We may use your information to:" />

                <ul style={{ listStyle: "inside", padding: "1em" }}>
                    <li className='serviceParagraph'>Consider your suggestions</li>
                    <li className='serviceParagraph'>Possibly respond directly to you for clarification</li>
                    <li className='serviceParagraph'>Process your request for materials or service if you make one</li>
                    <li className='serviceParagraph'>Try to and answer your questions if you ask them</li>
                    <li className='serviceParagraph'>Provide technical support to you if you are one of our clients</li>
                </ul>

                <ServiceParagraph text="We may also use your website information in order to help diagnose problems with our site. We may use all information we collect to analyze statistical use patterns and demographic data (basically, where our visitors come from and what demographic characteristics they have) and to improve our site to better serve our customers. We use your IP address to help diagnose problems with our servers, and to administer our website. Your IP address is used to help identify you to gather broad demographic information." />
            </ServiceCard>

            <ServiceCard noPadding>
                <BannerHeading isLeft text="Disclosing Your Personal Information To Others" isBlue />
                <ServiceParagraph text="Inowit Marketing respects your privacy. We protect your personal information and adhere to all privacy regulations. We do not rent, sell, or trade our mailing lists. The information you provide will be used to deliver services and to keep you informed and up to date on the activities of Inowit Marketing." />
            </ServiceCard>


            <ServiceCard noPadding>
                <BannerHeading isLeft text="Security" isBlue />
                <ServiceParagraph text="Since we are committed to your privacy and security, we have put in place physical, electronic, and managerial procedures to attempt to safeguard and help prevent unauthorized access, maintain data security, and correctly use the information we collect online. However, please remember that no transmission of data over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot ensure or warrant the security of any information that you transmit to us or from us, and you do so at your own risk." />
            </ServiceCard>


            <ServiceCard noPadding>
                <BannerHeading isLeft text="Linked Sites" isBlue />
                <ServiceParagraph text="The activation of certain links to this website may, under certain circumstances, cause the user to leave our website. Inowit Marketing has not reviewed all the sites linked to the Inowit.ca website and accepts no responsibility for the contents thereof or for any products, services or other offers available on them. The inclusion of a link does not imply endorsement by Inowit Marketing of the site. This also applies to websites that offer links to the Inowit.ca website." />
            </ServiceCard>


            <ServiceCard noPadding>
                <BannerHeading isLeft text="Changes In Privacy Policy & Terms Of Use" isBlue />
                <ServiceParagraph text="By using our website, you consent to our collection and the use of your personal information as described in this Privacy Policy & Terms of Use. If we change our privacy and procedures, we will post these changes on our website. You have the opportunity to review the Privacy Policy & Terms of Use each time you use the website so that you are aware of any modifications made to these policies." />
            </ServiceCard>


            <ServiceCard noPadding>
                <BannerHeading isLeft text="Choice/Opt Out" isBlue />
                <ServiceParagraph text="If at any time you wish to be removed from our database, simply contact us by phone at 437-366-7729, via e-mail at info@inowit.co and we will gladly accommodate your request." />
            </ServiceCard>

            <ServiceCard noPadding>
                <BannerHeading isLeft text="Questions About Our Privacy Policy & Terms Of Use" isBlue />
                <ServiceParagraph text="If you have questions about our website and our Privacy Policy & Terms of Use or disclaimer, please feel free to contact info@inowit.co" />
            </ServiceCard>

        </Fragment>
    )
}

export default PrivacyPolicyComponent