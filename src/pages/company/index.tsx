
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { COMPANY_PAGE_DESC, COMPANY_TITLE } from '@/utils/page-info';
import Company from '@/components/company/company';


const PAGE_TILE = COMPANY_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={COMPANY_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <Company />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}