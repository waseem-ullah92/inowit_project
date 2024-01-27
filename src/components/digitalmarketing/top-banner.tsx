import { Fragment } from "react";
import BannerHeading from "../common/banner-heading";
import BannerBreadcrumb from "../common/banner-breadcrumb";

export default function TopBanner() {
    return (
        <Fragment>
            <div className="serviceBanner">
                <BannerHeading text="Digital Marketing" />
                <BannerBreadcrumb text1="Home" text2="Services" text3="Digital Marketing" />
            </div>
        </Fragment>
    )
}