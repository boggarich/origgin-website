import React from "react";
import '../assets/sass/solutions.scss';

export default class Solutions extends React.Component {

    render() {

        return(

            <div className="main-content solutions">

                <section className="page-hero">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div>
                                <h1 className="page-hero-header no-transform">Fight fraud with the strength of the Stripe network</h1>
                                <div className="button-group btn-grid-2 link">
                                    <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary">Get Started<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>
                            </div>
                            <div className="position-relative">
                                <div className="img-container-shadow page-hero-img"></div>
                            </div>
                        </div>
                         
                    </div>
                    <div className="page-hero-bg"></div>
                </section>

                <section className="section-1">
                    <div className="layout-width">
                        <div className="grid-4">
                        <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/dart.svg" } />
                                    </div>
                                    <h4 className="sub-header">Use ML that actually works</h4>
                                    <p>

                                        Radar detects and blocks fraud using machine learning that trains on data across millions of global companies.

                                    </p>
                                </div>
                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/user-check.svg" } />
                                    </div>
                                    <h4 className="sub-header">Stop blocking legitimate customers </h4>
                                    <p>

                                        Old ways of combating fraud were never designed for modern internet businesses and can lead to lower acceptance rates and lost revenue. Radar helps you distinguish fraudsters from customers and apply Dynamic 3D Secure to high-risk payments.

                                    </p>
                                </div>
                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/repeat-2.svg" }/>
                                    </div>
                                    <h4 className="sub-header">Get protection that adapts to you</h4>
                                    <p>

                                     Our machine learning infrastructure lets us retrain models—including ones customized for your business—every day. Radar’s algorithms quickly adapt to shifting fraud patterns and to your unique business.

                                    </p>
                                </div>
                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/arrow-right-2.svg" }  style={{ height: '70px', width: '70px', marginTop: '-0.75rem' }} />
                                    </div>
                                    <h4 className="sub-header">No integration required</h4>
                                    <p>

                                        Radar is built into Stripe—get started from day one with zero code. And it’s seamlessly integrated with other products, like Checkout, so you can access the full Stripe platform.

                                    </p>
                                </div>
                        </div>
                    </div>
                </section>

                <section className="section-2">
                    <div className="layout-width">
                        <div className="d-flex justify-content-between flex-wrap">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                        </div>
                    </div>
                </section>

                <section className="section-3">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div>

                                <div className="grid-3-row">
                                    <h4 className="sub-header main">
                                        Radar
                                    </h4>
                                    <h1 className="header-xxl no-transform">Trained with hundreds of billions of data points</h1>
                                    <p>Stripe processes payments from 197 countries for every industry, company size, and business model. Even if a card is new to your business, there’s an 91% chance it’s been seen before on the Stripe network.</p>
                                </div>
                                
                                <div className="grid-3-row has-icon">
                                    <div><img src={ process.env.PUBLIC_URL + "/img/dart.svg" } /></div>
                                    <h4 className="sub-header">Strength in numbers</h4>
                                    <p>By learning from millions of global businesses processing billions in payments each year, Radar can assign risk scores to every payment and automatically block many high-risk payments.</p>
                                </div>

                                <div className="grid-3-row has-icon">
                                    <div><img src={ process.env.PUBLIC_URL + "/img/credit-card-search.svg" } /></div>
                                    <h4 className="sub-header">Better ML outcomes with Stripe-scale data</h4>
                                    <p>Radar scans every payment using thousands of signals from across the Stripe network to help detect and prevent fraud—even before it hits your business</p>
                                </div>

                            </div>

                            <div className="position-relative">
                                <img src={ process.env.PUBLIC_URL + "/img/geometry.svg" } />
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-4">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div className="grid-3-row">
                                <h2 className="header-lg">Smarter fraud protection with machine learning</h2>
                                <p>Effective systems should identify fraud without blocking legitimate payments. Read our primer on how machine learning can produce predictive models of fraud from large sets of data.</p>
                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary large">Read Guide<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                            <div>
                                <div className="d-grid rectangular-stack">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-5">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header main">Radar for Fraud Teams</h4>
                                    <h1 className="header-xxl">Powerful tools to support fraud-fighting professionals</h1>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Optimized reviews</h4>
                                    <p>Surface the most relevant data for more efficient and accurate manual reviews.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Robust insights</h4>
                                    <p>See rich analytics on fraud performance and dispute rates.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Custom rules</h4>
                                    <p>Set precise rules to flag, block, or dynamically apply 3D Secure to certain transactions.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">Block and allow lists</h4>
                                    <p>Sync existing lists of trusted or blocked users.</p>
                                </div>

                                <div className="grid-2-row">
                                    <h4 className="sub-header">A unified fraud model </h4>
                                    <p>Use Stripe Data Pipeline to consolidate your own fraud data with Radar’s in your data warehouse.</p>
                                </div>

                            </div>
                            <div className="position-relative">
                                <div className="img-container-shadow grey"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-6">
                    <div className="layout-width">
                        <div className="grid-2">

                            <div>
                                <div className="grid-3-row">
                                    <h1 className="header-lg">Radar is built into Stripe</h1>
                                    <p>
                                    Radar’s advanced machine learning is available to every Stripe account.
                                    </p>
                                    <div className="button-group btn-grid-2 link">
                                        <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary x-large">Try it out<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                        <a href="javascript:void(0);" className="btn btn-link-primary">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2"> 
                            
                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/security.svg" } />
                                    </div>
                                    <h4 className="sub-header">3D Secure 2</h4>
                                    <p>

                                    Additional authentication can help separate customers from fraudsters. Read our guide on how the new version of 3D Secure can reduce fraud without compromising on user experience.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Read the guide<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/tag-2.svg" } />
                                    </div>
                                    <h4 className="sub-header">Always know what you pay</h4>
                                    <p>

                                    Integrated per-transaction pricing with no hidden fees.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Pricing Details<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                
            </div>



        );

    }

}