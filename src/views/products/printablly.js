import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/sass/printablly.scss';
import AOS from 'aos';

export default class Printablly extends React.Component {

    componentDidMount() {

        AOS.init();

    }

    render() {

        return (
            <>
                <div className="main-content">
                    <div className="page-container printably">

                        <section data-aos="fade-up">
                            <div className="page-hero page-728">
                                <div className="layout-width">

                                    <div className="grid-2">
                                        <div className="">
                                            <h2 className="header-xl">Printably</h2>
                                            <h1 className="page-hero-header no-uppercase">Online Printing built for speed and scale</h1>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie ero
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-11">

                                                    <div className="button-group btn-grid-2">
                                                        <Link to="/sign-up" className="btn btn-pink large w-100">Get Started</Link>
                                                        <Link to="/contact-sales" className="btn btn-transparent ml-0 large w-100">Contact Us</Link>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="">
                                            <div className="img-group position-relative justify-content-start justify-content-lg-end">

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
                                        <div className="d-flex h-100 flex-column justify-content-center">
                                            <h1 className="header-xl text-uppercase">Get printing done online faster</h1>
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

                        <section className="section-2" data-aos="fade-up">
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column justify-content-center h-100">
                                            <h2 className="header-xl">EASY TO GET STARTED</h2>
                                            
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                            </h4>
                                            <h2 className="header-xl">CUSTOMIZE YOUR OWN DESIGN</h2>
                                            
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
                                            <h2 className="header-xl">SHEDULE YOUR DELIVERY</h2>
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
                                </div>

                            </div>
                        </section>

                        <section className="section-4" data-aos="fade-up">
                            <div className="layout-width">
                                <h2 className="header-xl">How it works</h2>
                                <h1 className="header-xl no-uppercase">The easiest way to get an item printed</h1>
                                <div className="row">
                                    <div className="col-lg-6">

                                        <div>
                                            
                                            <h3 className="header-md">1. Generate am item to custom design</h3>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                            </h4>
                                            
                                        </div>
                                        <div>
                                            
                                            <h3 className="header-md">2. Send a request</h3>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae mol
                                            </h4>
                                            
                                        </div>
                                        <div>
                                            
                                            <h3 className="header-md">3. Get a quote instantly</h3>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae
                                            </h4>
                                            
                                        </div>
                                        <div>
                                            
                                            <h3 className="header-md">4. Quick Delivery Anytime</h3>
                                            <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae
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

                        <section className="section-5" data-aos="fade-up">
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-6">
                                        
                                        <h2 className="header-xl">Generate an item to custom design</h2>
                                        
                                        <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                        </h4>

                                        <h2 className="header-xl">Send an Invoice today</h2>
                                        
                                        <h4 className="text-lighter sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecen
                                        </h4>
                                            

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="img-group position-relative ">

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