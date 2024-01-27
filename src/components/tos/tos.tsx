import React, { useState, Fragment } from 'react'
import { Tabs } from 'antd';
import ServiceParagraph from '../common/service-paragraph';
import { TERMS_OF_SERVICE } from './tos-data';
import GeneralService from './tabs/general-service';
import MultiService from './tabs/multi-service';
import WebHostingServices from './tabs/web-hosting-service';
import BannerHeading from '../common/banner-heading';
import BannerBreadcrumb from '../common/banner-breadcrumb';

const TOSComponent = () => {


    const [childTabName, setChildTabName] = useState<any>(TERMS_OF_SERVICE);

    const onChange = (key: string) => {
        let filteredData = TERMS_OF_SERVICE.find(
            (item: any) => item.label === key
        );
        setChildTabName(filteredData);
    };


    return (
        <Fragment>
            <div className="serviceBanner">
                <BannerHeading text="Terms of Service" />
                <BannerBreadcrumb text1="Home" text2="Terms of Service " />
            </div>
            <div className='container'>

                <Tabs
                    className="wrapper-tabs"
                    defaultActiveKey="1"
                    type='card'
                    items={TERMS_OF_SERVICE.map((item: any) => {
                        return {
                            label: item.label,
                            key: item.key,
                            children: item.label === "Website & General Serices" ? <GeneralService /> : item.label === "Multi Service" ? <MultiService /> : <WebHostingServices />
                        };
                    })}
                    onChange={onChange}
                />
            </div>
        </Fragment>
    )
}

export default TOSComponent