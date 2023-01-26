import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/sass/waakyelocator.scss';
import AOS from 'aos';

export default class WaakyeLocator extends React.Component {

    componentDidMount() {

        AOS.init();

    }

    render() {

        return (
            <>
                <div className="main-content">
                    <div className="page-container waakye-locator">

                        <section data-aos="fade-up">
                            <div className="page-hero page-728">
                                <div className="layout-width">

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2 className="header-xl">Waakye Locator</h2>
                                            <h1 className="page-hero-header">Easily find and buy Waakye from the nearest vendors.</h1>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie ero
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-11">

                                                    <div className="button-group">
                                                        <a href="javascript:void(0);" className="btn btn-pill btn-pink small fit-content f-16" onClick={this.handleBuyNowModalShow}>Order now <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="position-relative">

                                                <div className="img-container-shadow">

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            <div className="page-hero-bg"></div>
                        </section>

                        <section className="section-1" data-aos="fade-up">
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="header-xl">How it works</h2>
                                        <h1 className="header-xl text-uppercase">The fastest and easiest way to get your favourite waakye</h1>
                                        <h4 className="text-lighter sub-header">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                        </h4>
                                        

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="img-group position-relative">

                                            <div className="img-container-shadow">

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-2" data-aos="fade-up">
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column justify-content-center h-100">
                                            <h2 className="header-xl">HUNDREDS OF VENDORS ON THE PLATFORM</h2>
                                            
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                            </h4>
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
                        </section>

                        <section className="section-3" data-aos="fade-up">
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="h-100 d-flex flex-column justify-content-end">
                                            <h2 className="header-xl">SHARE WITH YOUR WAAKYE BUDDIES</h2>
                                            <h1 className="sub-header mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="img-group position-relative">

                                            <div className="img-container-shadow">

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                    <   h3 className="header-md">Fast Delivery to Anywhere</h3>
                                        <h4 className="text-lighter sub-header">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                        </h4>
                                    </div>
                                    <div className="col-lg-6">
                                    <   h3 className="header-md">Find Waakye Anywhere</h3>
                                        <h4 className="text-lighter sub-header">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                        </h4>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-4" data-aos="fade-up">
                            <div className="layout-width">
                                <h2 className="header-xl">For Vendors</h2>
                                <div className="row">
                                    <div className="col-lg-6">

                                        <div className="h-100 d-flex flex-column justify-content-end">
                                            <h1 className="header-xl text-uppercase">ON-BOARD YOUR BUSINESS IN MINUTES</h1>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                            </h4>
                                            <h1 className="header-xl text-uppercase">ACCEPT PAYMENTS EASILY</h1>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                            </h4>
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
                        </section>


                    </div>
                </div>
            </>
        );

    }

}