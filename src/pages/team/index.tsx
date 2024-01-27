
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';
import WebDesign from '@/components/webdesign/webdesign';


// ================ Utils ================
import { TEAM_TITLE, TEAM_PAGE_DESC } from '@/utils/page-info';
import TeamComponent from '@/components/team/team';


const PAGE_TILE = TEAM_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={TEAM_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <TeamComponent />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}