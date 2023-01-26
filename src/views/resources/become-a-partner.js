import React from 'react';
import '../../assets/sass/become-a-partner.scss';

export default class BecomeAPartner extends React.Component {

    render() {
        return (
            <div className='main-content become-a-partner'>

                <section className='page-hero'>

                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h1 className='header-xxl no-transform'>Partner with Stripe to accelerate growth</h1>
                                <h4 className='sub-header'>Join a global community of partners and help ambitious businesses with industry-leading payments and financial infrastructure.</h4>
                                <div className="button-group btn-grid-2 link">
                                    <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large">Get started<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    <a href="javascript:void(0);" className="btn btn-link-pink">View partner directory<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>
                            </div>
                            <div></div>
                        </div>

                    </div>

                    <div className='page-hero-bg'></div>

                </section>

                <section className='section-1'>
                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h4 className='sub-header main'>Why Stripe?</h4>
                                <h1 className='header-xxl'>Create new revenue streams with Stripe</h1>
                                <h4 className='sub-header'>Whether you’re a technology partner that’s looking to embed Stripe in your software or a consulting partner that’s expanding your practice, partner with Stripe to deliver elevated customer experiences and unlock new monetization opportunities for your own business.</h4>
                            </div>
                        </div>

                        <div className='grid-2'>
                            <div className='grid-2-row'>
                                <h1 className='header-xxl no-transform'>Technology partners</h1>
                               <div>
                                    <h4 className='sub-header'>Monetize payments and grow your SaaS revenue</h4>
                                    <ul>
                                        <li><p>Facilitate payments on your platform</p></li>
                                        <li><p>Increase your software revenue and global footprint</p></li>
                                        <li><p>Develop joint customer solutions with Stripe</p></li>
                                        <li><p>Add embedded financial services to increase customer lifetime 
                                            value</p>
                                        </li>
                                    </ul>
                               </div>
                            </div>
                            <div className='grid-2-row'>
                                <h1 className='header-xxl no-transform'>Consulting partners</h1>
                               <div>
                                    <h4 className='sub-header'>Build new practices with Stripe services</h4>
                                    <ul>
                                        <li><p>Establish new lines of business</p></li>
                                        <li><p>Capture recurring revenue beyond implementation</p></li>
                                        <li><p>Expand beyond payments with other financial services to build long-term strategic engagements</p>
                                        </li>
                                    </ul>
                               </div>
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
                        <div className="d-flex justify-content-between flex-wrap">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                        </div>
                    </div>
                </section>

                <section className='section-3'>
                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h4 className='sub-header main'>Partner benefits</h4>
                                <h1 className='header-xxl'>Develop your go-to-market plan with confidence</h1>
                                <h4 className="sub-header">
                                 Become an expert at building, marketing, and selling Stripe. As a Stripe partner, we’ll give you the tools and resources to deepen customer engagement, become more knowledgeable with Stripe solutions, and earn more revenue.
                                </h4>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid-4'>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/puzzle.svg" }/></div>
                                <h4 className='sub-header'>Build</h4>
                                <p>
                                Develop solutions and services with Stripe. Advance your mastery of payments through sales and technical training.
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/credit-card-2.svg" }/></div>
                                <h4 className='sub-header'>Market</h4>
                                <p>
                                Accelerate your marketing campaigns with prebuilt playbooks, customizable assets, and co-marketing funds.
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/tag-2.svg" }/></div>
                                <h4 className='sub-header'>Sell</h4>
                                <p>
                                Submit co-selling opportunities to help close deals faster. Receive financial rewards and discounts for performance.
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/arrow-right-2.svg" } style={{ height: '70px', width: '70px' }}/></div>
                                <h4 className='sub-header'>Engage</h4>
                                <p>
                                Stay close to our product roadmap and leadership teams as we build a longstanding partnership together.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='section-4'>
                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h4 className='sub-header main'>Partner options</h4>
                                <h1 className='header-xxl'>Access benefits tailored to your business</h1>
                                <h4 className="sub-header">
                                We don’t believe in a one-size-fits-all ecosystem. Whether you offer solutions or services, you’ll find benefits and best practices that align with your customer engagement strategy.
                                </h4>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid-2'>

                            <div className='img-container-shadow'>
                                <div className='hero-img'></div>
                                <div className="container-body grid-3-row">
                                    <h2 className='header-lg'>Technology partners</h2>
                                    <h4 className='sub-header'>
                                    Software, platform, or cloud providers that offer integrated solutions or connect with Stripe for easy deployment
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large">View technology partner requirements<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>
                            </div>
                            <div className='img-container-shadow'>
                                <div className='hero-img'></div>
                                <div className="container-body grid-3-row">
                                    <h2 className='header-lg'>Technology partners</h2>
                                    <h4 className='sub-header'>
                                    Software, platform, or cloud providers that offer integrated solutions or connect with Stripe for easy deployment
                                    </h4>
                                    <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large">View technology partner requirements<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-5">
                    <div className="layout-width">
                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h1 className='header-xxxl'>
                                Develop a Stripe App
                                </h1> 
                                <h4 className='sub-header'>
                                Offer a Stripe App to simplify common workflows, directly in the Stripe Dashboard and in third party products.
                                </h4>
                                <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large">Build a Stripe app<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>

                <section className='section-6'>
                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-4-row'>
                                <h4 className='sub-header main'>Partner specializations</h4>
                                <h1 className='header-xxl'>Gain competitive advantage with Stripe specializations</h1>
                                <p>
                                    Earn specializations to let customers know about your expertise by displaying badges across the partner directory, your website, and your marketing assets. <br></br><br></br>
                                    Stripe’s specialization program provides customers with validated and qualified partners that have demonstrated proficiency and proven customer success with Stripe solutions. Specializations are the highest designation you can earn as a partner by meeting Stripe requirements, and enable you to differentiate yourself to prospective customers.
                                </p>
                                <a href="javascript:void(0);" className="btn btn-link-pink">View specialization requirements<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid-4'>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/credit-card-2.svg" }/></div>
                                <h4 className='sub-header'>Solutions</h4>
                                <p>
                                Partners with expertise in Stripe products such as Connect and Billing
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/square-stacks.svg" }/></div>
                                <h4 className='sub-header'>Market</h4>
                                <p>
                                Partners with expertise in extending Stripe functionality across CRM and ERP systems
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                <div><img src={ process.env.PUBLIC_URL + "/img/building.svg" }/></div>
                                <h4 className='sub-header'>Sell</h4>
                                <p>
                                Partners with expertise in industries such as retail and financial services
                                </p>
                            </div>
                            <div className='flex-3-row has-icon'>
                                
                            </div>
                        </div>

                    </div>
                </section>

                <section className='section-7'>
                    <div className='layout-width'>

                        <div className='grid-2'>
                            <div className='grid-3-row'>
                                <h4 className='sub-header main'>Benefits at a glance</h4>
                                <h1 className='header-xxl no-transform'>Explore your partner benefits</h1>
                                <h4 className='sub-header'>
                                Onboard your teams to the partner portal to access an evolving and on-demand menu of benefits. Accelerate your sales, marketing, and technical capabilities while building long-term partnerships and community.
                                </h4>
                            </div>
                            <div></div>
                        </div>

                        <div className='grid-2'>

                            <div className='grid-3-row'>
                                <h1 className='header-lg no-transform'>Build with Stripe</h1>
                                <h4 className='sub-header'>
                                Establish trust and expertise with customers
                                </h4>
                                <div className='bullet-group'>
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

                                        </span>Resources to build your Stripe solution or service practice
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

                                        </span>Sales enablement and best practices
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

                                        </span>Live and on-demand instruction and webcasts
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

                                        </span>Technical trainings and certifications
                                    </div>
                                </div>
                            </div>

                            <div className='grid-3-row'>
                                <h1 className='header-lg no-transform'>Market with Stripe</h1>
                                <h4 className='sub-header'>
                                Reach new customers and improve retention
                                </h4>
                                <div className='bullet-group'>
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

                                        </span>Market development funds
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

                                        </span>Co-marketing content and campaign assets
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

                                        </span>Stripe partner directory listing
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

                                        </span>Stripe partner marks and badges
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='grid-2'>

                            <div className='grid-3-row'>
                                <h1 className='header-lg no-transform'>Sell with Stripe</h1>
                                <h4 className='sub-header'>
                                Receive monetary incentives or rewards
                                </h4>
                                <div className='bullet-group'>
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

                                        </span>Lead referral program
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

                                        </span>Co-selling support
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

                                        </span>Sales opportunity registration
                                    </div>
                                </div>
                            </div>

                            <div className='grid-3-row'>
                                <h1 className='header-lg no-transform'>Engage with Stripe</h1>
                                <h4 className='sub-header'>
                                Influence Stripe’s product roadmap and build community
                                </h4>
                                <div className='bullet-group'>
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

                                        </span>Dedicated portal and partner support
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

                                        </span>Connections with Stripe leadership
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

                                        </span>Invitations to partner networking events
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

                                        </span>Early access to betas
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-8">
                    <div className="layout-width">
                        <div className='grid-2'>
                            <div>
                                <h1 className='header-xxl no-transform'>
                                How Slalom accelerated its Stripe practice at repeatable scale
                                </h1>
                            </div>
                            <div>
                                <h4 className='sub-header'>
                                Slalom is a global consulting firm focused on strategy, technology, and business transformation in 41 markets around the world.
                                </h4>
                            </div>
                        </div>
                        <div className='grid-2'>
                            <div>
                                <div className='grid-2-row'>
                                    <h4 className='header-md'>Challenge</h4>
                                    <p>
                                        Slalom shared a goal to accelerate the development of its Stripe practice and arm its consultants with Stripe business solutions and technical expertise that would bring incremental value to customers. Slalom knew that building this on its own would require significant investment—so they looked to the Stripe Partner Ecosystem for support.
                                    </p>
                                </div>
                                <div className='grid-2-row'>
                                    <h4 className='header-md'>Solution </h4>
                                    <p>
                                    Slalom invested in its people to complete Stripe’s technical training and certifications, specifically designed for architects and developers, to provide them with real-world applications and implementation best practices from Stripe experts.
                                    </p>
                                </div>
                                <div className='grid-2-row'>
                                    <h4 className='header-md'>Impact</h4>
                                    <p>
                                    In just a few months, Slalom has trained over 26 of its implementation architects and engineers through Stripe’s training and certifications—efficiently enabling its teams to become productive and revenue generating.
                                    </p>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <div className='img-container-shadow'></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                        </div>
                    </div>
                </section>

                <section className='section-9 skewed-bg'>
                    <div className='layout-width'>
                        <div className='grid-2'>
                            <div className='grid-2-row'>
                                <h1 className='header-xxl'>
                                Interested in becoming a Stripe partner?
                                </h1>
                                <p>Tell us about yourself to start your journey to become a Stripe partner. Questions? Reach out to us at partner-support@stripe.com.</p>
                            </div>
                            <div>
                                <div className='img-container-shadow'></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-10">
                    <div className="layout-width">
                        <div className="grid-2">

                            <div>
                                <div className="grid-3-row">
                                    <h1 className="header-lg">Explore our ecosystem of partners</h1>
                                    <p>
                                    Discover how technology and consulting partners are working with Stripe.
                                    </p>
                                    <div className="button-group btn-grid-2 link">
                                        <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary x-large">View partner directory<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2"> 
                            
                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/user-check-circular.svg" } />
                                    </div>
                                    <h4 className="sub-header">Already a Stripe partner?</h4>
                                    <p>

                                    Manage your benefits in the partner portal.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary btn-link-large">Log In<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/tag-2.svg" } />
                                    </div>
                                    <h4 className="sub-header">View partner requirements </h4>
                                    <p>

                                    See what it takes to become a Stripe Partner.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary btn-link-large">View requirements<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        );
    }

}