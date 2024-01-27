import React, { Fragment } from 'react'
import BannerHeading from '@/components/common/banner-heading'
import ServiceParagraph from '@/components/common/service-paragraph'
import ServiceCard from '@/components/services/service-description'

const MultiService = () => {
  return (
    <Fragment>
      <ServiceCard>
        <BannerHeading isLeft text="MULTI SERVICE " isBlue />
        <ServiceParagraph text="Inowit Marketing Corporation" />
        <ServiceParagraph classes="has-margin-top" text="Terms of Service (“TOS”)" />
      </ServiceCard>

      <ol style={{ listStyle: "inside", listStyleType: "number" }}>
        <li className='font-bold text-xl primary-color'>PAYMENT TERMS</li>
        <ServiceParagraph classes="has-margin-top" text='The Client shall pay to Inowit the agreed upon fee as scheduled in the Payment Terms of the Agreement, without deduction or set-off, within 15 net days of the invoice date. The Client shall also pay to Inowit any additional charges incurred which include but are not limited to website software, ad management, plugins, or technical support requests. ' />

        <ul style={{ listStyle: "inside", padding: "1em" }}>
          <li className='serviceParagraph'>Web projects invoiced at 25% with progress billing until launch</li>
          <li className='serviceParagraph'>Digital Marketing invoiced as per monthly contract, plus setup fee</li>
          <li className='serviceParagraph'>Strategy sessions invoiced at 100% contract value upon signing</li>
          <li className='serviceParagraph'>Design/Print work invoiced at time of Client approval </li>
          <li className='serviceParagraph'>Non-quoted work invoiced hourly </li>
          <li className='serviceParagraph'>Web Hosting payable monthly (direct debit) </li>
          <li className='serviceParagraph'>Web projects include 90-days of complimentary website hosting (1) Accounts in arrears of more than 90 days are subject to suspension. </li>
        </ul>

        <li className='font-bold text-xl mt-5 primary-color'>SUPPLY OF SERVICES</li>
        <ServiceParagraph classes="has-margin-top" text='Inowit shall have sole control and discretion in respect of the timing of, availability of and frequency with which Inowit provides the Services to the Client in accordance with the TOS of the Agreement. Inowit shall act in good faith to ensure the Agreement is fulfilled on time and within the agreed upon Fee. ' />

        <li className='font-bold text-xl mt-5 primary-color'>ADDITIONAL SERVICES</li>
        <ServiceParagraph classes="has-margin-top" text='In the event the Client desires additional services from Inowit that are not listed as Services in the originating Agreement, the Client shall communicate this to Inowit and Inowit shall provide a quote for Additional Services in addition to the originating Agreement. ' />

        <li className='font-bold text-xl mt-5 primary-color'>HOSTING – SERVER USE </li>
        <ServiceParagraph classes="has-margin-top" text='Inowit reserves the right to suspend or cancel hosting services to the Client in the event of non-payment or breach of the TOS. All services provided by Inowit may only be used for lawful purposes. Transmission, storage, or presentation of any information, data, or materials in violation of any Canadian, Provincial, or local law is strictly prohibited. This includes but is not limited to: copyrighted material, trademark, intellectual property, and material that Inowit determines to be threatening or obscene. Use is prohibited to promote illegal activity or which may be damaging to Inowit’s server. Links to such materials are also prohibited. Any activity including adult content, illegal content, links to same, spamming, cracking, or hacking will result in your website being shut down without notice. All decisions regarding allowable content shall be at the sole and absolute discretion of Inowit. ' />

        <li className='font-bold text-xl mt-5 primary-color'>HOSTING – HIGH RESOURCES </li>
        <ServiceParagraph classes="has-margin-top" text="Resources are defined as excessive disk space, utilization, and/or manipulation of Inowit’s servers. Use of Inowit’s servers and resources as a scripting test environment is strictly prohibited without express written consent and will result in immediate termination of all services under this Agreement. " />

        <li className='font-bold text-xl mt-5 primary-color'>PRIVACY</li>
        <ServiceParagraph classes="has-margin-top" text="The information of the Client given to Inowit shall be used and disclosed by Inowit in accordance with the Terms and Conditions on our website at www.Inowit.ca. Notwithstanding the aforementioned, the Client agrees and understands that, due to the nature of digital transactions, Inowit cannot provide any such guarantee, promise or covenant that the Client’s information and content shall remain secure and not be publicly disclosed, accessed, distributed or hacked into in any manner or to any degree. Inowit shall take all necessary steps to mitigate virtual access to Client’s information. The Client shall use Inowit’s services at their own risk. The Client agrees that it shall defend, indemnify, save and hold Inowit harmless from any and all demands, liabilities, losses, costs and claims, including reasonable legal fees asserted against Inowit, its agents, its clients, officers and employees, that may arise or " />
        <br />
        <ServiceParagraph classes="has-margin-top" text="result from any service provided or performed or agreed to be performed or any product/service sold the Client, its agents, employees or assigns. Due to some technological limitations with our choice domain registrar DomainsAtCost.ca, some domain information may be registered to Inowit. Inowit agrees that the Client will still own the domain." />

        <li className='font-bold text-xl mt-5 primary-color'>DISCLAIMER </li>
        <ServiceParagraph classes="has-margin-top" text="None of the Services provided by Inowit shall be construed as providing advice in respect of any legal, accounting, tax or website security matter. Although Inowit does provide reliable and robust website, email, and hosting services, the Client is encouraged to backup their own data." />

        <li className='font-bold text-xl mt-5 primary-color'>OWNERSHIP AND CONFIDENTIALITY</li>
        <ServiceParagraph classes="has-margin-top" text="The Client acknowledges and agrees that all documentation, information, designs, and processes related to the Services of Inowit (the “Confidential Information”) is the sole property of Inowit and that Inowit shall retain all rights and interests in and to the Confidential Information. The Client further acknowledges and agrees that the Confidential Information constitutes valuable trade secrets of Inowit, and the Client shall keep the Confidential Information in strict confidence and shall not, at any time during or after the Term, disclose, use or otherwise make available to anyone, either directly or indirectly, all or any part of the Confidential Information. " />

        <li className='font-bold text-xl mt-5 primary-color'> COMPLIANCE AND GOVERNANCE</li>
        <ServiceParagraph classes="has-margin-top" text="Inowit and the Client shall comply with all municipal, provincial and federal laws and regulations and all international agreements and protocols. This Agreement shall be enforced in accordance with the laws of the Province of Alberta. " />

        <li className='font-bold text-xl mt-5 primary-color'>DUTY OF THE CLIENT </li>
        <ServiceParagraph classes="has-margin-top" text="The Client shall cooperate with Inowit while Inowit is providing its Services and shall share such information about its business and website as Inowit may require in providing its Services." />

        <li className='font-bold text-xl mt-5 primary-color'>NO LIABILITY</li>
        <ServiceParagraph classes="has-margin-top" text="Inowit shall not be liable in contract, tort (including negligence or breach of any statutory duty owed) or otherwise in respect of any damages, loss or costs incurred by the Client in respect of any increased costs, expenses, or loss of profit or revenue incurred or suffered by the Agreement. In the event any court of competent jurisdiction finds that Inowit is liable in respect of any damages, loss or costs incurred by the Client, then the maximum amount of such damages, loss or costs which Inowit shall be liable for shall be fixed at the Fees paid by the Client to Inowit up to the date that the damages. " />

        <li className='font-bold text-xl mt-5 primary-color'> EVENTS OF DEFAULT </li>
        <ServiceParagraph classes="has-margin-top" text="The failure of the Client to comply with a term or condition set out in this Agreement, on a one-time or habitual basis may, at the discretion of Inowit, be deemed an Event of Default. " />

        <li className='font-bold text-xl mt-5 primary-color'>EARLY TERMINATION </li>
        <ServiceParagraph classes="has-margin-top" text="The Client may terminate this Agreement upon providing 30-days’ written notice to Inowit. During this notice period, Inowit shall continue to provide Services and any Additional Services previously requested by the Client. The Client is responsible for fees incurred through the end of the notice period, including any work in progress. Web Hosting paid in advance of the notice period is non-refundable. " />

        <li className='font-bold text-xl mt-5 primary-color'>RENEWAL</li>
        <ServiceParagraph text="Following the end of the initial Contract term, the Agreement shall continue on a monthly basis. " />


        <li className='font-bold text-xl mt-5 primary-color'>FORCE MAJEURE </li>
        <ServiceParagraph text="Inowit shall not be required or be under any obligation to perform or complete its Services or Additional Services if an event occurs which prevents Inowit from performing or completing the Services or Additional Services the cause of which is beyond the reasonable control of Inowit, including, but without restricting the generality of the foregoing, a flood, strike, earthquake, insurrection, lockout, interruption in the world wide web, war or any act of God." />


        <li className='font-bold text-xl mt-5 primary-color'>SEVERABILITY </li>
        <ServiceParagraph text="In the event that any provision of this Agreement is declared, deemed, held or adjudicated to be invalid or unenforceable, the provision shall be severed from this Agreement and such invalidity or unenforceability shall not affect the validity and enforceability of the remainder of this Agreement which shall continue in full force and effect and be construed as if this Agreement had been executed without the invalid or enforceable portion." />

        <li className='font-bold text-xl mt-5 primary-color'>ENTIRE AGREEMENT</li>
        <ServiceParagraph text="This Agreement contains the entire agreement between the Parties. There are no other agreements, representations, warranties, guarantees, terms, covenants, in writing or verbally. " />
        <br />
        <span className='mb-5 block'>
          <ServiceParagraph text="(1) Complimentary web hosting commences upon signing of the contract. Monthly billing will commence 91 days after signing. Complimentary hosting is not transferable or negotiable, it holds no cash-value, and is subject to monthly hosting Terms of Service." />
        </span>


      </ol>


    </Fragment>
  )
}

export default MultiService