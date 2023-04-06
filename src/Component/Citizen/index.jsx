import React from 'react'
// import "./index.css"

export default function Citizen() {
    return (
        <div className="hot-properties-bg--video" id="new-turkish-citi" style={{ background: '#e5e4d5' }}>
            <div className="new-citizen container-fluid">
                <div className="about-pt flex flex-direction-column margin-bottom-4">
                    <a data-fancybox data-src="#contactus-form" href="javascript:;"><img alt="<b>Turkish Citizenship</b>" className="margin-right-3 citizenship-Icon-ar pulse-animation lazyload" src="https://www.propertyturkey.com/front/image/images2019/Icons/CitizenshipAppFee_Icon.svg" width={90} /></a>
                    <p className="aboutpt-header title-lined abhaya line-h-1" style={{ marginBottom: '.5rem' }}>
                        <b>Turkish Citizenship</b>
                    </p>
                    <p className="aboutpt-header title-lined abhaya line-h-1 font-24" style={{ fontStyle: 'italic', marginTop: 0 }}>
                        by Investment Programme
                    </p>
                    <p className="hot-properties-subtitle col-md-10 text-center padding-top-1">
                        You can apply for Turkish citizenship by investment once you have invested a minimum of $400,000 in
                        residential or commercial property in Turkey. Your spouse &amp; your children under the age of 18
                        will also be eligible for Turkish nationality. Please contact us for further details, legal advice
                        and a list of properties in Turkey that are pre-approved for the citizenship by investment program.
                    </p>
                    <a className="about-pt--btn btn rednew-border bg-transparent" >Discover
                        More</a>
                </div>
            </div>
        </div>

    )
}
