
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { GRAPHIC_DESIGN_PAGE_DESC, GRAPHIC_DESIGN_TITLE } from '@/utils/page-info';
import GraphicDesign from '@/components/graphicdesign/graphic-design';


const PAGE_TILE = GRAPHIC_DESIGN_TITLE;


// =====================================================================================================

const Home = () => {

    const metaData = (
        <meta name="description" content={GRAPHIC_DESIGN_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <GraphicDesign />
        </Page>
    )
}

export default Home;



Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}