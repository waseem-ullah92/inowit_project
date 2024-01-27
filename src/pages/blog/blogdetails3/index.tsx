
import React from 'react';
import type { ReactElement } from "react";


// ================ Components ================
import Page from '@/components/page';
import AppLayout from '@/components/layout/layout';


// ================ Utils ================
import { BLOG_TITLE, BLOG_PAGE_DESC } from '@/utils/page-info';
import BlogDetails3 from '@/components/blog/blog-details-3';


const PAGE_TILE = BLOG_TITLE;


// =====================================================================================================

const BlogDetailsPage = () => {

    const metaData = (
        <meta name="description" content={BLOG_PAGE_DESC} />
        // MORE SEO META TAGS HERE
    )


    return (
        <Page
            title={PAGE_TILE}
            meta={metaData}
        >
            <BlogDetails3 />
        </Page>
    )
}

export default BlogDetailsPage;



BlogDetailsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout title={PAGE_TILE}>{page}</AppLayout>
    )
}