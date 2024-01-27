
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import WebDesign from '@/components/webdesign/webdesign';


// ================ Utils ================
import { EMAIL_MARKETING_TITLE, EMAIL_MARKETING_PAGE_DESC } from '@/utils/page-info';
import EmailMarketing from '@/components/emailmarketing/email-marketing';


const PAGE_TILE = EMAIL_MARKETING_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={EMAIL_MARKETING_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <EmailMarketing />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}