
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import WebDesign from '@/components/webdesign/webdesign';


// ================ Utils ================
import { WEB_DESIGN_TITLE, WEB_DESIGN_PAGE_DESC } from '@/utils/page-info';


const PAGE_TILE = WEB_DESIGN_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={WEB_DESIGN_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <WebDesign />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}