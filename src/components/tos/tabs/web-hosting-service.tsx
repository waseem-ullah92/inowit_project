import BannerHeading from '@/components/common/banner-heading'
import ServiceParagraph from '@/components/common/service-paragraph'
import ServiceCard from '@/components/services/service-description'
import React, { Fragment } from 'react'

const WebHostingServices = () => {
  return (
    <Fragment>
      <ServiceCard>
        <BannerHeading isLeft text="WEB HOSTING SERVICES" isBlue />
        <ServiceParagraph text="Inowit Marketing Corporation" />
        <ServiceParagraph classes="has-margin-top" text="Terms of Service (“TOS”)" />
      </ServiceCard>



      <ol style={{ listStyle: "inside", listStyleType: "number" }}>
        <li className='font-bold text-xl primary-color'>PAYMENT TERMS</li>
        <ServiceParagraph classes="has-margin-top" text='The Client shall pay to Inowit a Hosting Fee on a monthly basis without deduction or set-off. Payment will be automatic credit card withdrawal within Net 15 days of the invoice for as long as Inowit provides web hosting for the Client. The Client shall also pay to Inowit any additional charges incurred which include but are not limited to technical support requests and domain renewals. ' />
        <br />
        <ServiceParagraph text='The Client shall make monthly payments as per the Agreement. Clients are required to keep a valid credit card on file with Inowit. Accounts in arrears of more than 90 days are subject to suspension of their web hosting services. ' />

        <li className='font-bold text-xl mt-5 primary-color'>SUPPLY OF SERVICES</li>
        <ServiceParagraph classes="has-margin-top" text='Inowit shall provide web hosting services pursuant to this Agreement and shall automatically renew each year as long as Inowit is providing web hosting services. Backup of servers will be kept for 45-days. ' />

        <li className='font-bold text-xl mt-5 primary-color'>ADDITIONAL SERVICES</li>
        <ServiceParagraph classes="has-margin-top" text='In the event that the Client desires additional services from Inowit that are not listed as Services in the originating Agreement, the Client shall communicate this to Inowit and Inowit shall provide a separate Quote and Agreement for additional services. Any changes to the project scope as listed in the Agreement shall be subject to additional costs.' />

        <li className='font-bold text-xl mt-5 primary-color'>PRIVACY & INDEMNIFICATION</li>
        <ServiceParagraph classes="has-margin-top" text="Information of the Client which is given to Inowit shall be used and disclosed by Inowit in accordance with its Privacy Terms and Conditions on our website at www.Inowit.ca. The Client agrees and understands that, due to the nature of digital transactions, Inowit cannot provide any such guarantee, promise or covenant that the Client ‘s information and content shall remain secure and not be publicly disclosed, accessed, distributed or hacked into in any manner or to any degree. The Client shall use Inowit’s services at their own risk. The Client " />
        <br />
        <ServiceParagraph text="agrees that it shall defend, indemnify, save and hold Inowit harmless from any and all demands, liabilities, losses, costs and claims, including reasonable legal fees asserted against Inowit, its agents, its clients, officers and employees, that may arise or result from any service provided or performed or agreed to be performed or any product/service sold the Client, its agents, employees or assigns. " />
        <br />
        <ServiceParagraph text="Due to some technological limitations with our choice domain registrar DomainsAtCost.ca, some domain information may be registered to Inowit. Inowit agrees that the Client will still own the domain. " />


        <li className='font-bold text-xl mt-5 primary-color'>SERVER USE</li>
        <ServiceParagraph classes="has-margin-top" text="Inowit reserves the right to suspend or cancel hosting services to the Client in the event of non-payment or breach of the TOS. All services provided by Inowit may only be used for lawful purposes. Transmission, storage, or presentation of any information, data, or materials in violation of any Canadian, Provincial, or local law is strictly prohibited. This includes but is not limited to: copyrighted material, trademark, intellectual property, and material that Inowit determines to be threatening or obscene. Use is prohibited to promote illegal activity or which may be damaging to Inowit’s server. Links to such materials are also prohibited. Any activity including adult content, illegal content, links to same, spamming, cracking, or hacking will result in your website being shut down without notice. All decisions regarding allowable content shall be at the sole and absolute discretion of Inowit. " />

        <li className='font-bold text-xl mt-5 primary-color'>HIGH RESOURCES </li>
        <ServiceParagraph classes="has-margin-top" text="Resources are defined as excessive disk space, utilization, and/or manipulation of Inowit’s servers. Use of Inowit’s servers and resources as a scripting test environment is strictly prohibited without express written consent and will result in immediate termination of all services under this Agreement. " />

        <li className='font-bold text-xl mt-5 primary-color'> RELEASE </li>
        <ServiceParagraph classes="has-margin-top" text="The Client acknowledges and agrees to release Inowit against any claims or demands to damages, injury, loss, death, disability, suits, debts, sums of money, indemnity, expenses, interest, costs, and claims of any and every nature. None of the Services provided by Inowit shall be construed as providing advice in respect of any legal, accounting, tax or website security matter. Although Inowit does provide reliable and robust website, email, and hosting services, the Client is encouraged to backup their own data." />

        <li className='font-bold text-xl mt-5 primary-color'>COMPLIANCE AND GOVERNANCE</li>
        <ServiceParagraph classes="has-margin-top" text="This Agreement shall be enforced in accordance with the laws of the Province of Alberta. " />

        <li className='font-bold text-xl mt-5 primary-color'>TERMINATION </li>
        <ServiceParagraph classes="has-margin-top" text="Hosting may be canceled with 30-days’ written notice to Inowit. Hosting fees paid in advance and which extend beyond the notice period are not refundable.. Transfer of service requests will not be completed until the account is up to date on payments, including charges applied for transfer services. " />

        <li className='font-bold text-xl mt-5 primary-color'>SEVERABILITY </li>
        <ServiceParagraph text="In the event that any provision of this Agreement is declared, deemed, held or adjudicated to be invalid or unenforceable, the provision shall be severed from this Agreement and such invalidity or unenforceability shall not affect the validity and enforceability of the remainder of this Agreement which shall continue in full " />
        <br />
        <ServiceParagraph text="force and effect and be construed as if this Agreement had been executed without the invalid or enforceable portion. " />


        <li className='font-bold text-xl mt-5 primary-color'>ENTIRE AGREEMENT</li>
        <ServiceParagraph text="This Agreement contains the entire agreement between the Parties. There are no other agreements, representations, warranties, guarantees, terms, covenants, in writing or verbally. By consenting to have Inowit host their website, the Client agrees to all terms and conditions herein. " />
        <br />
        <span className='mb-5 block'>
          <ServiceParagraph text="(1) Complimentary web hosting commences upon signing of the contract. Monthly billing will commence 91 days after signing. Complimentary hosting is not transferable or negotiable, it holds no cash-value, and is subject to monthly hosting Terms of Service." />
        </span>

      </ol>

      <p className='font-bold text-xl mt-5 primary-color'>General Pricing (2022) </p>
      <ServiceParagraph text="Website Hosting (Monthly, per Website) $59.00 CAD Domain Name Registration (Annually, per Domain) $40.00 CAD Help Desk / Technical Support (Hourly) $160.00 CAD Transfer of Web Hosting (Hourly) $160.00 CAD " />
      <br />
      <ServiceParagraph text="Fee to Reinstate Website (Following Suspension*) $29.00 CAD *Plus account balance " />
      <br />
      <span className='block mb-5'>
        <ServiceParagraph text="Prices are subject to change" />
      </span>


    </Fragment>
  )
}

export default WebHostingServices