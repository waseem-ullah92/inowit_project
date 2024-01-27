
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import TOSComponent from '@/components/tos/tos';


const PAGE_TILE = "Terms of Service";


// =====================================================================================================

const TOS = () => {

    // const metaData = (
    //     <meta name="description" content={} />
    //     // MORE SEO META TAGS HERE
    // )


    return (
        <Page
            title={PAGE_TILE}
            // meta={metaData}
        >
            <TOSComponent />
        </Page>
    )
}

export default TOS;



TOS.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}