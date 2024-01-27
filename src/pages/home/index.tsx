
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import HomeComponent from '@/components/home/home';


// ================ Utils ================
import { HOME_PAGE_DESC, HOME_PAGE_TITLE } from '@/utils/page-info';


const PAGE_TILE = HOME_PAGE_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={HOME_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <HomeComponent />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}