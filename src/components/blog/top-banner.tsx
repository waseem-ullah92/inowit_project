import { Fragment } from "react";
import BannerHeading from "../common/banner-heading";

export default function TopBanner() {
    return (
        <Fragment>
            <div className="serviceBanner">
                <BannerHeading text="Blogs" />
            </div>
        </Fragment>
    )
}