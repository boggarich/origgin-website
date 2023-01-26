import React from "react";
import '../../assets/sass/rope.scss';
import { Link } from 'react-router-dom';

export default class Solutions extends React.Component {
    render() {
        return (
            <main className="main-content rope">

                <section className="page-hero">
                    <div>
                        <div className="layout-width">
                        
                            <div className="grid-2">
                                <div>
                                    <div>

                                        <h4 className="sub-header">SaaS Solutions</h4>
                                        <h1 className="page-hero-header">Unify payments, billing and revenue management</h1>
                                        <h4 className="sub-header">Power your home with Solar and have cost saving 
                                        electricity supply to your home with Origgin's 
                                        powerful solar system and software solutions 
                                        designed to help you have access to more power and save 
                                        money.
                                        </h4>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-11">

                                            <div className="button-group btn-grid-2 link">
                                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary">Get in touch<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                <a href="javascript:void(0);" className="btn btn-link-primary">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="img-container-shadow"></div>
                                </div>
                            </div>
                          
                        </div>
                        <div className="grid-2 rotated">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>

                <section className="section-1">
                    <div className="layout-width">
                        <div className="d-flex justify-content-between">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                        </div>
                    </div>
                </section>

                <section className="section-2">
                    <div>
                        <div className="layout-width">
                            <div className="grid-2">
                                <div>
                                    <h4 className="main sub-header">Capture more revenue</h4>
                                    <h2 className="header-xxl">Power any billing model</h2>

                                    <div className="grid-3-row">
                                        <img src={ process.env.PUBLIC_URL + "/img/arrow-right.svg" } />
                                        <h4 className="sub-header">Launch new plans and start accepting payments in minutes</h4>
                                        <p>Collect and store payment details including cards, ACH, and other popular payment methods. Easily send invoices to recurring customers, and offer discounts and free trials to drive adoption.</p>
                                    </div>
                                    <div className="grid-3-row">
                                        <img src={ process.env.PUBLIC_URL + "/img/tags.svg" } />
                                        <h4 className="sub-header">Support any pricing model </h4>
                                        <p>
                                        Billing logic for everything from per-seat pricing to metered billing is available out of the box. Automate billing and revenue recognition for upgrades, downgrades, and tax rates.
                                        </p>
                                    </div>
                                    <div className="grid-3-row">
                                        <img src={ process.env.PUBLIC_URL + "/img/settings.svg" } />
                                        <h4 className="sub-header">Launch new plans and start accepting payments in minutes</h4>
                                        <p> 
                                        Give sales teams the ability to send quotes, negotiate rates, and automate the collection process. Sync billing and payments data with your ERP and accounting systems.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="img-container-shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3">
                    <div className="layout-width">
                        <h4 className="sub-header main">Reduce engineering effort</h4>
                        <h1 className="header-xxl">Save time and resources spent on billing</h1>
                        <p>Stop compromising between billing needs and engineering bandwidth. With Stripe’s prebuilt interfaces and billing components, you can easily launch optimized billing experiences without diverting engineering resources from your core product.</p>

                        <div className="grid-2">
                            <div>
                                <h2 className="header-lg">Get paid more quickly with prebuilt invoices</h2>
                                <h4 className="sub-header">Stripe-hosted invoices get paid 3x faster than traditional invoices. Our conversion optimized invoices make it easy to charge customers around the world.</h4>
                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary-2 large">Try it out<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                            <div>
                                <h2 className="header-lg">Launch a customer portal in minutes</h2>
                                <h4 className="sub-header">Let customers change their subscription or update billing details by sharing a secure link to Stripe’s prebuilt customer portal. Tailor your customer portal with your logo and brand colors.</h4>
                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary-2 large">Try it out<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                        </div>

                        <div className="grid-2 position-relative">
                            <div className="img-container-shadow">
                                
                            </div>
                            <div className="img-container-shadow">
                                
                            </div>
                        </div>

                        <section>
                            <h1 className="header-xxl">Move faster with built-in automation</h1>

                            <div className="grid-4">

                                <div className="flex-3-row has-icon"> 
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/wifi.svg" } />
                                    </div>
                                    <h4 className="sub-header">Automate with webhooks</h4>
                                    <p>Programmatically trigger actions based on lifecycle events like upgrades, payments, and cancellations.</p>
                                </div>

                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/repeat.svg" } />
                                    </div>
                                    <h4 className="sub-header">Billing proration</h4>
                                    <p>Stripe automatically prorates billing when any plan changes occur.</p>
                                </div>

                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/settings.svg" } />
                                    </div>
                                    <h4 className="sub-header">Schedule subscriptions</h4>
                                    <p>Configure rules to easily make changes to subscriptions over time.</p>
                                </div>

                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/notification.svg" } />
                                    </div>
                                    <h4 className="sub-header">Automatic reminders</h4>
                                    <p> Maximize your chances of getting paid with email reminders for missed or overdue payments.</p>
                                </div>

                            </div>
                        </section>

                    </div>
                </section>

                <section className="section-4">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div>
                                <h2 className="header-lg">Reliably sync data across all your systems</h2>
                                <p>
                                If you already have tools to manage customers, quotes, orders, or revenue recognition, you can use our prebuilt integrations to reliably connect Stripe with dozens of common systems—from sales and marketing tools like Salesforce and Docusign to ERP and accounting platforms like NetSuite and Xero, to data warehouses like Snowflake or Redshift.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>

                <section className="section-5">
                    <div className="layout-width">
                        <h4 className="sub-header main">Why Stripe</h4>
                        <h1 className="header-xxl">Optimize revenue with the power of the Stripe platform</h1>
                        
                        <div className="grid-2">
                            
                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/wallet.svg" } />
                                    </div>
                                    <h4 className="sub-header">Offer a local experience in every market</h4>
                                    <p>

                                        Stripe supports 135+ currencies and dozens of global payment methods such as Apple Pay, ACH, BACS, iDEAL, and SEPA Direct Debit that can help increase conversion by as much as 50%. We also help you navigate tax and handle regulatory requirements like SCA by triggering 3D. Secure authentication when required.

                                    </p>
                                </div>
                                <div className="flex-3-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/repeat.svg" } />
                                    </div>
                                    <h4 className="sub-header">Reduce churn with revenue recovery tools</h4>
                                    <p>

                                        Nearly a quarter of churn is involuntary. Stripe’s dunning tools help businesses recover 41% of failed recurring payments on average. Businesses using our smart retries recover 14% more revenue than those retrying failed payments on a set schedule.

                                    </p>
                                </div>
                            
                        </div>

                        <div className="grid-2">

                            <div className="flex-3-row has-icon">
                                <div>
                                    <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                </div>
                                <h4 className="sub-header">Simplify accrual accounting with automated revenue reporting</h4>
                                <p>

                                    Automate and configure revenue recognition so you can close your books quickly and accurately. Revenue Recognition effortlessly handles even the most complex scenarios—upgrades, downgrades, prorations, refunds, and disputes.

                                </p>
                            </div>
                            <div className="flex-3-row has-icon">
                                <div>
                                    <img src={ process.env.PUBLIC_URL + "/img/globe.svg" } />
                                </div>
                                <h4 className="sub-header">Offer a local experience in every market</h4>
                                <p>

                                    The typical quote-to-cash process spans multiple tools, causing discrepancies that can undermine the customer experience. Stripe streamlines quote-to-cash, simplifying the process of creating a quote and converting it into an invoice or a subscription.
                                
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-6">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div>
                                <h2 className="header-lg">Grow your SaaS business with Stripe</h2>
                                <p>In this brief demo video, learn how to unify your payments, billing, and revenue management to streamline SaaS subscriptions and capture more revenue.</p>
                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary large">Watch now<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                            <div>
                                <img src={ process.env.PUBLIC_URL + "/img/rectangular-stack.svg" } alt="rectangles" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-7">
                    <div className="layout-width">

                        <h4 className="sub-header main">Case studies</h4>

                        <div className="grid-2">

                            <div>
                                
                                <h1 className="header-xxl">Slack uses Stripe to automate payments & billing</h1>

                                <div>
                                    <h4 className="sub-header">Challenge</h4>
                                    <p>To meet rapidly growing demand, Slack expanded to serve more 
                                        global customers and large-scale enterprises. Among other challenges, 
                                        Slack needed to support a variety of payment methods 
                                        in different regions, set up automation for a custom, usage-based invoicing system, and 
                                        let customers adjust their own plans.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="sub-header">Solution</h4>
                                    <p>
                                        In just 2 weeks, Slack worked with Stripe to launch a new system that 
                                        automated all their billing and payment collection needs across 15 countries. 
                                        It dramatically reduced engineering time spent on 
                                        maintaining an in-house system and helped their operational team
                                        spend less time responding to custom pricing request.

                                    </p>
                                    <Link to="/">Read the full story</Link>
                                </div>

                                <div>
                                    <h4 className="sub-header">Products</h4>
                                    <div className="grid-2">
                                        <div>
                                            <span className="icon-bullet">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="12" fill="#0048E5" fillOpacity="0.3"/>
                                                    <g clip-path="url(#clip0_1288_4160)">
                                                    <path d="M10.0001 14.7799L7.2201 11.9999L6.27344 12.9399L10.0001 16.6666L18.0001 8.66656L17.0601 7.72656L10.0001 14.7799Z" fill="#0048E5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1288_4160">
                                                    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>Payments
                                        </div>
                                        <div>
                                            <span className="icon-bullet">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="12" fill="#0048E5" fillOpacity="0.3"/>
                                                    <g clip-path="url(#clip0_1288_4160)">
                                                    <path d="M10.0001 14.7799L7.2201 11.9999L6.27344 12.9399L10.0001 16.6666L18.0001 8.66656L17.0601 7.72656L10.0001 14.7799Z" fill="#0048E5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1288_4160">
                                                    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>Billing
                                        </div>
                                        <div>
                                            <span className="icon-bullet">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="12" fill="#0048E5" fillOpacity="0.3"/>
                                                    <g clip-path="url(#clip0_1288_4160)">
                                                    <path d="M10.0001 14.7799L7.2201 11.9999L6.27344 12.9399L10.0001 16.6666L18.0001 8.66656L17.0601 7.72656L10.0001 14.7799Z" fill="#0048E5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1288_4160">
                                                    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>Radar
                                        </div>
                                        <div>
                                            <span className="icon-bullet">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="12" fill="#0048E5" fillOpacity="0.3"/>
                                                    <g clip-path="url(#clip0_1288_4160)">
                                                    <path d="M10.0001 14.7799L7.2201 11.9999L6.27344 12.9399L10.0001 16.6666L18.0001 8.66656L17.0601 7.72656L10.0001 14.7799Z" fill="#0048E5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1288_4160">
                                                    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>Sigma
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div>

                                <p>
                                    Slack is a channel-based messaging platform that needed help automating custom billing schedules and allowing customers to update their own plans.
                                </p>

                                <div className="gradient-img-bg">
                                    <p>“Having a billing system that lets you stay nimble to respond to customers' needs is really critical. Stripe gives you that flexibility.</p>
                                    <p>Jackie Rocca, Director of Product, Slack</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <section className="section-1">
                        <div className="layout-width">
                            <div className="d-flex justify-content-between">
                                <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                                <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                                <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" }/>
                                <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" }/>
                            </div>
                        </div>
                    </section>

                </section>

                <section className="section-8">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div>
                                
                                <h4 className="sub-header main">Professional services</h4>
                                <div className="grid-3-row">
                                    <h2 className="header-lg">Build a unified SaaS solution with help from Stripe experts</h2>
                                    <p>
                                        Our experts guide you through consolidating revenue management tools—whether you’re standing up subscriptions for the first time, moving away from homegrown billing, or navigating challenges across tax, accounting, and more.
                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary large">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>
                            <div>
                                <div className="img-container-shadow"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-9">
                    <div className="layout-width">
                        <div className="grid-2">

                            <div>
                                <div className="grid-3-row">
                                    <h1 className="header-lg">Ready to get started?</h1>
                                    <p>Explore Stripe Billing, or created an account 
                                        instantly to get started. You can also contact us 
                                        to design a custom package for your business.
                                    </p>
                                    <div className="button-group btn-grid-2 link">
                                        <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary large">Try it out<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                        <a href="javascript:void(0);" className="btn btn-link-primary">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2"> 
                            
                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                    </div>
                                    <h4 className="sub-header">Accept global payments</h4>
                                    <p>

                                        Support 135+ currencies and dozens of local payment methods with a single integration.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Read the guide<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                    </div>
                                    <h4 className="sub-header">Enable payments for your customers</h4>
                                    <p>

                                        Help your customers start accepting payments and get paid out from your platform.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Pricing Details<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </main>
        );
    }
}