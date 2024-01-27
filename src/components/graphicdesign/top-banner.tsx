import { Fragment } from "react";
import BannerHeading from "../common/banner-heading";
import BannerBreadcrumb from "../common/banner-breadcrumb";

export default function TopBanner() {
    return (
        <Fragment>
            <div className="serviceBanner">
                <BannerHeading text="graphic design" />
                <BannerBreadcrumb text1="Home" text2="Services" text3="Graphic Design" />
            </div>
        </Fragment>
    )
}