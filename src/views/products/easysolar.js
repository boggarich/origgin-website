import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/sass/easysolar.scss';
import r2 from '../../assets/img/r2.png';
import AOS from 'aos';
import Slider from "react-slick";

export default class EasySolar extends React.Component {

    componentDidMount() {

        AOS.init();

    }

    render() {

        const reactSliderSettingsSection2 = {
            autoplay: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false
        };

        const reactSliderSettingsSection7 = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <>
                <div className="main-content">
                    <div className="page-container easysolar">

                        <section data-aos="fade-up">
                            <div className="page-hero page-728">
                                
                                <div className="layout-width">

                                    <div className="row">
                                        <div className="col-lg-5">
                                            <h1 className="page-hero-header">Build your pixel-perfect solar experience</h1>
                                            <h4 className="text-lighter sub-header">
                                            Power your home with Solar and have cost saving electricity supply to your home with Origgin’s powerful solar system and software solutions designed to help you have access to more power and save money.
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-11">

                                                     <div className="button-group">
                                                        <a href="javascript:void(0);" className="btn btn-pill btn-pink small fit-content f-16" onClick={this.handleBuyNowModalShow}>Request now <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-7">

                                            <div className="img-group position-relative">

                                                    <div className="img-container-border">

                                                    </div>

                                                    <div className="img-container-shadow">

                                                    </div>

                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="page-hero-bg"></div>

                                </div>
                                
                            </div>
                        </section>

                        <section className="section-1">
                            <div className="layout-width">
                                <div className="grid-4">
                                    <div>
                                        <h6 className="header-sm">Solar for Everyone</h6>
                                        <p>

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellent
                                        </p>
                                    </div>      
                                    <div>
                                        <h6 className="header-sm">
                                            Get your home or business off the local grid
                                        </h6>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dict
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="header-sm">
                                            No upfront cost, pay as you use
                                        </h6>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id le
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="header-sm">
                                            Different packages for different users
                                        </h6>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-2">

                            <div className="layout-width">

                                <h2 className="header-lg text-pink">
                                    Partners
                                </h2>
                                <div className="slider-container">
                                    <div className="d-flex flex-wrap">

                                        <img className="letshego-logo" src={ process.env.PUBLIC_URL+ "/img/logos/logo_0.png"} alt="slider-img" style={{ marginRight: '5rem' }}/>

                                        <img className="sps-logo" src={ process.env.PUBLIC_URL+ "/img/logos/sps+logo.png"} alt="slider-img"/>        

                                    </div>
                                </div>
                                <h1 className="header-xxl no-uppercase">
                                    Quality Solar Solutions to help everyone get reliable and 
                                    renewable energy easily at source any day anytime.
                                </h1>
                                <h4 className="sub-header">Use our suite of optimized and modular solar system to seamlessly collect payment details, customer addresses, offer mobile wallets, and more.</h4>
                            </div>
                        </section>

                        <section className="section-3">
                            <div className="layout-width">
                                <div className="grid-2">
                                    <div>
                                        <h2 className="header-xxl no-uppercase">
                                            Built-in metering structure.
                                        </h2>
                                        <ul>
                                            <li><p>Prepaid metering system.</p></li>
                                            <li><p>Purchase of Power</p></li>
                                            <li><p>Consumption Tracking</p></li>
                                            <li><p>Off the Grid</p></li>
                                        </ul>
                                        <p>Buy power for your solar system directly from the app anywhere, anytime.</p>
                                        <div className="grid-2">
                                            <div>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellentesque 
                                                </p>
                                            </div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellentes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-4">
                            <div className="layout-width">
                                <div className="grid-2">
                                    <div>

                                        <div className="grid-3-row">
                                            <h1 className="header-xxl">Boost conversion at checkout with Link</h1>
                                            <p>Link autofills your customers’ payment and shipping details to deliver an easy and seamless checkout experience.</p>
                                            <a href="#" className="arrow-link">Explore Docs <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#6A7EE7"/></svg></a>
                                        </div>

                                        <div className="grid-2-row">
                                            <h2 className="header-lg">How it works</h2>
                                            <p>Customers can choose to save their payment details at any Link-supported site across the Stripe network, and Link autofills those details for future purchases. When customers use Link on a new site or new device, they receive a one-time code to verify their identity.</p>
                                        </div>

                                        <div className="grid-2">
                                            <div>
                                                <div className="grid-3-row has-icon">
                                                    <div><img src={ process.env.PUBLIC_URL + "/img/mountain.svg" } /></div>
                                                    <h4 className="sub-header">Increase conversion</h4>
                                                    <p>Create a frictionless checkout—our global checkout study showed that Link increases conversion rates by over 7% for logged-in Link customers.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="grid-3-row has-icon">
                                                    <div><img src={ process.env.PUBLIC_URL + "/img/arrow-right.svg" } style={{ height: "70px", width: "70px", marginTop: "-0.7rem" }} /></div>
                                                    <h4 className="sub-header">Speed up checkout</h4>
                                                    <p>Enable your customers to check out in just 6 seconds with the optimized Link experience, 9x faster than non-Link customers.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <img src={r2} alt="phone" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-5">
                            <div className="layout-width">
                                <h1 className="header-xxl no-transform">Meet our other Elements</h1>
                                <div className="grid-2 position-relative">
                                    <div>
                                        <div className="img-container-shadow curved default"></div>
                                        <p>Dynamic mobile wallets</p>
                                        <p>Stripe’s Wallet Button Element provides a single component for Apple Pay, Google Pay, and cards stored in the browser.</p>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow curved default"></div>
                                        <p>Effortless address collection</p>
                                        <p>Stripe’s Shipping Address Element makes it easier to collect and validate your customers’ addresses. This lets your customers check out faster and reduces the risk of collecting and shipping goods to the wrong address.</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-6">
                            <div className="layout-width">
                                <div className="grid-3-row">
                                    <h4 className="sub-header main">Built by us, designed by you</h4>
                                    <h1 className="header-xxl">Control every facet of the experience</h1>
                                    <p>Our versatile APIs and libraries let you combine the simplicity of prebuilt components with the freedom of custom UIs. Use React or JavaScript to build your ideal web integration or our iOS, Android, or React Native SDKs to design a streamlined mobile flow.</p>
                                </div>
                                <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary x-large">Explore the docs<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                <div className="glass-effect">
                                    <div className="d-flex justify-content-end position-relative">
                                        
                                        <div className="img-container-shadow default position-relative"></div>   
                                        
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-7">
                            <div className="layout-width">

                                <div className="slider-container dashed-navs full-width">

                                    <Slider {...reactSliderSettingsSection7}>
                                        
                                        <div className="slider-content-container">
                                            <div className="grid-2">
                                                <div className="grid-2-row-paragraph">
                                                    <p>We migrated to Stripe Elements in less than a day with a single developer. Since then, we’ve seen a 6% increase in conversion at checkout.</p>
                                                    <p>Liam Mclaney, Co-founder, OnJam</p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <img src={ process.env.PUBLIC_URL + "/img/Onjam.svg" } alt="boy" />
                                                </div>
                                           </div>
                                        </div>

                                        <div className="slider-content-container">
                                            <div className="grid-2">
                                                <div className="grid-2-row-paragraph">
                                                    <p>We migrated to Stripe Elements in less than a day with a single developer. Since then, we’ve seen a 6% increase in conversion at checkout.</p>
                                                    <p>Liam Mclaney, Co-founder, OnJam</p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <img src={ process.env.PUBLIC_URL + "/img/Onjam.svg" } alt="boy" />
                                                </div>
                                           </div>
                                        </div>

                                        <div className="slider-content-container">
                                            <div className="grid-2">
                                                <div className="grid-2-row-paragraph">
                                                    <p>We migrated to Stripe Elements in less than a day with a single developer. Since then, we’ve seen a 6% increase in conversion at checkout.</p>
                                                    <p>Liam Mclaney, Co-founder, OnJam</p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <img src={ process.env.PUBLIC_URL + "/img/Onjam.svg" } alt="boy" />
                                                </div>
                                           </div>
                                        </div>

                                        <div className="slider-content-container">
                                            <div className="grid-2">
                                                <div className="grid-2-row-paragraph">
                                                    <p>We migrated to Stripe Elements in less than a day with a single developer. Since then, we’ve seen a 6% increase in conversion at checkout.</p>
                                                    <p>Liam Mclaney, Co-founder, OnJam</p>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <img src={ process.env.PUBLIC_URL + "/img/Onjam.svg" } alt="boy" />
                                                </div>
                                           </div>
                                        </div>

                                    </Slider>

                                </div>

                                <div className="slider-container">
                                    <div className="d-flex flex-wrap">

                                        <img className="letshego-logo" src={ process.env.PUBLIC_URL+ "/img/logos/logo_0.png"} alt="slider-img" style={{ marginRight: '5rem' }}/>

                                        <img className="sps-logo" src={ process.env.PUBLIC_URL+ "/img/logos/sps+logo.png"} alt="slider-img"/>        

                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-9">
                            <div className="layout-width">
                                <div className="grid-3-row">
                                    <h2 className="sub-header main">Pricing</h2>
                                    <h1 className="header-xxl">Know what you’ll pay</h1>
                                </div>
                                <div className="grid-3">
                                    <div>
                                        <h2 className="header-md">Pay-as-you-go</h2>
                                        <a href="javascript:void(0);" class="btn link btn-link-primary">Explore Docs<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                    <div>
                                        <p>Stripe Elements are included in Stripe’s integrated pricing and let you accept credit cards, debit cards, mobile wallets and more.</p>
                                    </div>
                                    <div>
                                        <h2 className="header-md">included</h2>
                                        <p>with Stripe Payments</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-10">
                            <div className="layout-width">
                                <div className="grid-2">
                                    <div className="grid-3-row">
                                        
                                        <h4 className="sub-header main">More integration options</h4>
                                        <h1 className="header-xxl">Explore our other payment integrations</h1>
                                        <p>If Elements doesn’t seem right for you, consider Stripe Checkout to get started even faster or our API-only integration for full control.</p>
                                    </div>
                                </div>
                                <div className="grid-2"> 
                            
                                    <div className="flex-4-row has-icon">
                                        <div>
                                            <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                        </div>
                                        <h4 className="sub-header">Stripe Checkout</h4>
                                        <p>

                                        Get started in minutes using our prebuilt, hosted payment page optimized for conversion.

                                        </p>
                                        <a href="javascript:void(0);" className="btn link btn-link-primary">Learn More<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>

                                    <div className="flex-4-row has-icon">
                                        <div>
                                            <img src={ process.env.PUBLIC_URL + "/img/terminal.svg" } />
                                        </div>
                                        <h4 className="sub-header">API-only</h4>
                                        <p>

                                        Design your custom UI from scratch and use our javascript library or just our APIs to power the payments.

                                        </p>
                                        <a href="javascript:void(0);" className="btn link btn-link-primary">Contact Us<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="section-11">
                            <div className="layout-width">
                                <div>
                                    <div className="grid-3-row">
                                        <h1 className="header-lg">Ready to get started? Get in touch or create an account</h1>
                                        <p>
                                            Create an account and start accepting payments—no contracts or banking details required. Or, contact us to design a custom package for your business.
                                        </p>
                                        <div className="button-group btn-grid-2 link">
                                            <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary x-large">Try it out<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                            <a href="javascript:void(0);" className="btn btn-link-primary">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </>
        );

    }

}