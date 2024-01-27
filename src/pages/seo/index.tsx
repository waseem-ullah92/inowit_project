
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import WebDesign from '@/components/webdesign/webdesign';


// ================ Utils ================
import { SEO_TITLE, SEO_PAGE_DESC } from '@/utils/page-info';
import SEO from '@/components/seo/seo';


const PAGE_TILE = SEO_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={SEO_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <SEO />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}