
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import OurValuesComponent from '@/components/our-values/our-values';


// ================ Utils ================
import { OURVALUES_PAGE_DESC, OURVALUES_TITLE } from '@/utils/page-info';


const PAGE_TILE = OURVALUES_TITLE;


// =====================================================================================================

const CurrentPage = () => {

    const metaData = (
        <meta name="description" content={OURVALUES_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <OurValuesComponent />

        </Page>
    )
}

export default CurrentPage;



CurrentPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}