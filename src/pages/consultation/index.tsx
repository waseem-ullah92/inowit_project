
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { CONSULTATION_TITLE, CONSULTATION_PAGE_DESC } from '@/utils/page-info';
import TeamComponent from '@/components/team/team';
import Consultation from '@/components/consultation/consultation';


const PAGE_TILE = CONSULTATION_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={CONSULTATION_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <Consultation />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}