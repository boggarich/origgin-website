import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/sass/smarthome.scss';
import AOS from 'aos';
import r from '../../assets/img/r.png';

export default class SmartHome extends React.Component {

    componentDidMount() {

        AOS.init();

    }

    render() {

        return (
            <>
                <div className="main-content">
                    <div className="page-container smarthome">

                        <section data-aos="fade-up">
                            <div className="page-hero page-728">
                                <div className="layout-width">

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h1 className="page-hero-header">we built <span className="text-blue">smarthome</span> so you control your power</h1>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Mae
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-11">

                                                    <div className="button-group">
                                                        <a href="javascript:void(0);" className="btn btn-pill btn-pink small fit-content f-16" onClick={this.handleBuyNowModalShow}>Request now <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="img-group position-relative">

                                                <div className="img-container-shadow">

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="page-hero-bg"></div>
                            </div>
                        </section>

                        <section className="section-1" data-aos="fade-up">
                            <div className="layout-width">
                                <div className="grid-2">
                                    <div>
                                        <h2 className="header-xl">INCREASE SALES WITH A BETTER PAYMENTS EXPERIENCE</h2>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h4>
                                    </div>
                                    <div className="position-relative">
                                        <div className="img-container-shadow"></div>
                                    </div>
                                </div>
                                <div className="grid-2">
                                    <div>
                                        <h2 className="header-xl">DESIGNED TO REGULATE YOUR POWER</h2>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h4>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h4>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow"></div>
                                    </div>
                                </div>
                                <div className="grid-2">
                                    <div>
                                        <h2 className="header-xl">CONNECT ANY ELCTRICAL DEVICE</h2>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h4>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow">
                                            <img src={ r } alt="phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-2">
                                    <div>
                                        <h2 className="header-xl">BUILT FOR GLOBAL CUSTOMERS</h2>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h4>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="rectangular-gradient-bg"></div>
                        </section>

                        <section className="section-2" data-aos="fade-up">
                            <div className="layout-width">

                                <h2 class="header-lg text-pink main-header">Security</h2>
                                <h2 className="header-xl">Built-in fraud prevention and compliance</h2>

                                <div className="grid-2">
                                    <div>
                                        <h6 className="header-md">Powerful fraud protection</h6>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis</h4>
                                    </div>
                                    <div>
                                        <h6 className="header-md">Compliance made easy</h6>
                                        <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis</h4>
                                    </div>
                                </div>

                                <h2 class="header-lg text-pink main-header">Pricing</h2>
                                <h2 className="header-xl">
                                    Know what you'll pay
                                </h2>

                                <div className="grid-3">
                                    <div>
                                        <h2 class="header-lg">Pay-as-you-go</h2>
                                        <p className="text-pink">Pricing details</p>
                                    </div>
                                    <div>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea 
                                        </p>
                                    </div>
                                    
                                </div>

                                <div className="grid-3">
                                    <div>
                                        <h2 class="header-lg">Pay-as-customised</h2>
                                    </div>
                                    <div>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea 
                                        </p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </section>

                        <section className="section-3" data-aos="fade-up">
                            <div className="layout-width">

                                <div  className="grid-3">

                                    <div>

                                        <h2 className="header-lg">
                                         READY TO GET STARTED? GET IN TOUCH OR CREATE AN ACCOUNT
                                        </h2>
                                        
                                        <div className="button-group">

                                            <div className="button-group">
                                                <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large fit-content f-16">Sign up <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                            </div>
                                        
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className="header-sm">Sell online without a website</h6>
                                        <h6 className="sub-header">Share a payment link with your customers - no code required</h6>
                                       
                                    </div>
                                    <div>
                                        <h6 className="header-sm">Design your own form instead</h6>
                                        <h6 className="sub-header">To create your payments form, use our rich embeddable UI components</h6>
                                        
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