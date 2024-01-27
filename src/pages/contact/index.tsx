
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { CONTACT_TITLE, CONTACT_PAGE_DESC } from '@/utils/page-info';
import ContactUs from '@/components/contact/contact-us';


const PAGE_TILE = CONTACT_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={CONTACT_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <ContactUs />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}