
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import PrivacyPolicyComponent from '@/components/privacy-policy/privacy-policy';


const PAGE_TILE = "Privacy Policy";


// =====================================================================================================

const PrivacyPolicy = () => {

    // const metaData = (
    //     <meta name="description" content={} />
    //     // MORE SEO META TAGS HERE
    // )


    return (
        <Page
            title={PAGE_TILE}
            // meta={metaData}
        >
            <PrivacyPolicyComponent />
        </Page>
    )
}

export default PrivacyPolicy;



PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}