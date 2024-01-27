
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import WebDesign from '@/components/webdesign/webdesign';


// ================ Utils ================
import { DIGITAL_MARKETING_TITLE, DIGITAL_MARKETING_PAGE_DESC } from '@/utils/page-info';
import DigitalMarketing from '@/components/digitalmarketing/digital-marketing';


const PAGE_TILE = DIGITAL_MARKETING_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={DIGITAL_MARKETING_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <DigitalMarketing />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}