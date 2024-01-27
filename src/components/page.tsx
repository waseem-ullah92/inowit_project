import Head from "next/head";

import { forwardRef } from "react";



// =====================================================================================================

const Page = forwardRef(
    ({ children, title = "", meta, ...other }: any, ref) => {
        return (
            <>
                <Head>
                    <title>{`${title} | Inowit`}</title>
                    {meta}
                </Head>

                <div ref={ref} {...other}>
                    {children}
                </div>
            </>
        );
    }
);

Page.displayName = "Page";

export default Page;
