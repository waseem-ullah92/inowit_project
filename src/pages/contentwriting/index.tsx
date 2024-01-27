
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { CONTENT_WRITING_TITLE, CONTENT_WRITING_PAGE_DESC } from '@/utils/page-info';
import ContentWriting from '@/components/contentwriting/content-writing';


const PAGE_TILE = CONTENT_WRITING_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={CONTENT_WRITING_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <ContentWriting />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}