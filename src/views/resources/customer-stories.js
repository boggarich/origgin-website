import React from "react";
import '../../assets/sass/customer-stories.scss';
import { NavLink, Link, Outlet, useMatch } from 'react-router-dom';
import { setupTabNavigation } from '../helpers/common-obj';
import HomeScreenDashboardMockup from '../../assets/img/HomeScreenDashboardMockup.png';

import StartUp from "./startup";
import Growth from './growth';
import Enterprise from "./enterprise";
import MarketPlace from "./marketplace";


export default class CustomerStories extends React.Component {

    componentDidMount() {

        setupTabNavigation();

    }

    render() {

        return(

            <div className="main-content customer-stories">

                <section className="page-hero skewed-bg">
                    <div className="layout-width">
                        <div className="grid-2">
                            <div className="grid-3-row">
                                <h1 className="page-hero-header no-transform">
                                The payments platform behind millions of businesses
                                </h1>
                                <h4 className="sub-header">
                                    We’re building a platform for ambitious companies around the world to make moving money as simple, borderless, and programmatic as the rest of the internet. Our teams are based in dozens of global offices and we process hundreds of billions of dollars each year for every size of business—from startups to Fortune 500s.
                                </h4>
                                <div className="button-group btn-grid-2 link">
                                    <a href="javascript:void(0);" className="btn btn-pill btn-pink large">See all Stories<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    <a href="javascript:void(0);" className="btn btn-link-pink">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>
                            </div>
                            <div className="position-relative">
                                <div className="grid-3">

                                    <div className="grid-2-row">
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1383_1289)">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1383_1289">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Watch video<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1388_1386)">
                                                        <path d="M23.9748 21.2957V2.65521C23.9748 1.17301 22.8018 0 21.3196 0H2.67914C1.19693 0 0.0239258 1.17301 0.0239258 2.65521V21.3448C0.0239258 22.827 1.19693 24 2.67914 24H21.3687C22.8509 24 24.0239 22.827 23.9748 21.2957ZM21.9822 21.2957C21.9822 21.654 21.6779 21.9583 21.3196 21.9583H2.67914C2.32086 21.9583 2.01656 21.654 2.01656 21.2957V2.65521C2.01656 2.29693 2.32086 1.99264 2.67914 1.99264H21.3147C21.673 1.99264 21.9773 2.29693 21.9773 2.65521V21.2957H21.9822Z" fill="white"/>
                                                        <path d="M17.7416 4.95117H6.30602C5.74651 4.95117 5.28516 5.41252 5.28516 5.97203C5.28516 6.53154 5.74651 6.99289 6.30602 6.99289H17.7416C18.3011 6.99289 18.7625 6.53154 18.7625 5.97203C18.7625 5.41252 18.306 4.95117 17.7416 4.95117Z" fill="white"/>
                                                        <path d="M17.7416 10.9785H6.30602C5.74651 10.9785 5.28516 11.4399 5.28516 11.9994C5.28516 12.5589 5.74651 13.0202 6.30602 13.0202H17.7416C18.3011 13.0202 18.7625 12.5589 18.7625 11.9994C18.7625 11.4399 18.306 10.9785 17.7416 10.9785Z" fill="white"/>
                                                        <path d="M17.7074 16.918H6.27184C5.71233 16.918 5.25098 17.3793 5.25098 17.9388C5.25098 18.4983 5.71233 18.9597 6.27184 18.9597H17.7074C18.2669 18.9597 18.7283 18.4983 18.7283 17.9388C18.7283 17.3793 18.2718 16.918 17.7074 16.918Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1388_1386">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Read story<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                    </div>

                                    <div className="grid-2-row">
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1388_1386)">
                                                        <path d="M23.9748 21.2957V2.65521C23.9748 1.17301 22.8018 0 21.3196 0H2.67914C1.19693 0 0.0239258 1.17301 0.0239258 2.65521V21.3448C0.0239258 22.827 1.19693 24 2.67914 24H21.3687C22.8509 24 24.0239 22.827 23.9748 21.2957ZM21.9822 21.2957C21.9822 21.654 21.6779 21.9583 21.3196 21.9583H2.67914C2.32086 21.9583 2.01656 21.654 2.01656 21.2957V2.65521C2.01656 2.29693 2.32086 1.99264 2.67914 1.99264H21.3147C21.673 1.99264 21.9773 2.29693 21.9773 2.65521V21.2957H21.9822Z" fill="white"/>
                                                        <path d="M17.7416 4.95117H6.30602C5.74651 4.95117 5.28516 5.41252 5.28516 5.97203C5.28516 6.53154 5.74651 6.99289 6.30602 6.99289H17.7416C18.3011 6.99289 18.7625 6.53154 18.7625 5.97203C18.7625 5.41252 18.306 4.95117 17.7416 4.95117Z" fill="white"/>
                                                        <path d="M17.7416 10.9785H6.30602C5.74651 10.9785 5.28516 11.4399 5.28516 11.9994C5.28516 12.5589 5.74651 13.0202 6.30602 13.0202H17.7416C18.3011 13.0202 18.7625 12.5589 18.7625 11.9994C18.7625 11.4399 18.306 10.9785 17.7416 10.9785Z" fill="white"/>
                                                        <path d="M17.7074 16.918H6.27184C5.71233 16.918 5.25098 17.3793 5.25098 17.9388C5.25098 18.4983 5.71233 18.9597 6.27184 18.9597H17.7074C18.2669 18.9597 18.7283 18.4983 18.7283 17.9388C18.7283 17.3793 18.2718 16.918 17.7074 16.918Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1388_1386">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Read story<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1388_1386)">
                                                        <path d="M23.9748 21.2957V2.65521C23.9748 1.17301 22.8018 0 21.3196 0H2.67914C1.19693 0 0.0239258 1.17301 0.0239258 2.65521V21.3448C0.0239258 22.827 1.19693 24 2.67914 24H21.3687C22.8509 24 24.0239 22.827 23.9748 21.2957ZM21.9822 21.2957C21.9822 21.654 21.6779 21.9583 21.3196 21.9583H2.67914C2.32086 21.9583 2.01656 21.654 2.01656 21.2957V2.65521C2.01656 2.29693 2.32086 1.99264 2.67914 1.99264H21.3147C21.673 1.99264 21.9773 2.29693 21.9773 2.65521V21.2957H21.9822Z" fill="white"/>
                                                        <path d="M17.7416 4.95117H6.30602C5.74651 4.95117 5.28516 5.41252 5.28516 5.97203C5.28516 6.53154 5.74651 6.99289 6.30602 6.99289H17.7416C18.3011 6.99289 18.7625 6.53154 18.7625 5.97203C18.7625 5.41252 18.306 4.95117 17.7416 4.95117Z" fill="white"/>
                                                        <path d="M17.7416 10.9785H6.30602C5.74651 10.9785 5.28516 11.4399 5.28516 11.9994C5.28516 12.5589 5.74651 13.0202 6.30602 13.0202H17.7416C18.3011 13.0202 18.7625 12.5589 18.7625 11.9994C18.7625 11.4399 18.306 10.9785 17.7416 10.9785Z" fill="white"/>
                                                        <path d="M17.7074 16.918H6.27184C5.71233 16.918 5.25098 17.3793 5.25098 17.9388C5.25098 18.4983 5.71233 18.9597 6.27184 18.9597H17.7074C18.2669 18.9597 18.7283 18.4983 18.7283 17.9388C18.7283 17.3793 18.2718 16.918 17.7074 16.918Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1388_1386">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Read story<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                    </div>

                                    <div className="grid-2-row">
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1388_1386)">
                                                        <path d="M23.9748 21.2957V2.65521C23.9748 1.17301 22.8018 0 21.3196 0H2.67914C1.19693 0 0.0239258 1.17301 0.0239258 2.65521V21.3448C0.0239258 22.827 1.19693 24 2.67914 24H21.3687C22.8509 24 24.0239 22.827 23.9748 21.2957ZM21.9822 21.2957C21.9822 21.654 21.6779 21.9583 21.3196 21.9583H2.67914C2.32086 21.9583 2.01656 21.654 2.01656 21.2957V2.65521C2.01656 2.29693 2.32086 1.99264 2.67914 1.99264H21.3147C21.673 1.99264 21.9773 2.29693 21.9773 2.65521V21.2957H21.9822Z" fill="white"/>
                                                        <path d="M17.7416 4.95117H6.30602C5.74651 4.95117 5.28516 5.41252 5.28516 5.97203C5.28516 6.53154 5.74651 6.99289 6.30602 6.99289H17.7416C18.3011 6.99289 18.7625 6.53154 18.7625 5.97203C18.7625 5.41252 18.306 4.95117 17.7416 4.95117Z" fill="white"/>
                                                        <path d="M17.7416 10.9785H6.30602C5.74651 10.9785 5.28516 11.4399 5.28516 11.9994C5.28516 12.5589 5.74651 13.0202 6.30602 13.0202H17.7416C18.3011 13.0202 18.7625 12.5589 18.7625 11.9994C18.7625 11.4399 18.306 10.9785 17.7416 10.9785Z" fill="white"/>
                                                        <path d="M17.7074 16.918H6.27184C5.71233 16.918 5.25098 17.3793 5.25098 17.9388C5.25098 18.4983 5.71233 18.9597 6.27184 18.9597H17.7074C18.2669 18.9597 18.7283 18.4983 18.7283 17.9388C18.7283 17.3793 18.2718 16.918 17.7074 16.918Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1388_1386">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>

                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Read story<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                        <div className="layered">
                                            <div className="position-absolute d-flex flex-column justify-content-between">
                                                <div className="content-header d-flex justify-content-between">
                                                    <h4 className="sub-header">Glossier.</h4>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1383_1289)">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1383_1289">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="content-footer">
                                                    <a href="javascript:void(0);" className="btn btn-link-default">Watch video<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>
                                            </div>
                                            <div className="layer-bg-img"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-1">
                    <div className="layout-width">
                        <h2 className="header-xl">We help customers achieve measurable results</h2>
                        <div className="grid-4">
                            <div className="grid-2-row">
                                <h4 className="sub-header">$70 M</h4>
                                <p>total increase in Postmates’ annual revenue</p>
                            </div>
                            <div className="grid-2-row">
                                <h4 className="sub-header">6 months faster</h4>
                                <p>for Weave to launch a new payments platform</p>
                            </div>
                            <div className="grid-2-row">
                                <h4 className="sub-header">10%</h4>
                                <p>uplift in Twilio’s payment acceptance rate</p>
                            </div>
                            <div className="grid-2-row">
                                <h4 className="sub-header">12 new countries</h4>
                                <p>Noom expansion in one month with Stripe</p>
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

                <section className="section-3">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div className="grid-2-row">
                                <h4 className="sub-header main">Customers by size</h4>
                                <h1 className="header-xxl">Companies of all sizes around the world use Stripe</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className="page-sub-nav">
                            <nav>
                                <ul>
                                
                                    <li>
                                        <a
                                            class="tab-nav active"
                                            data-tab-id="startup"
                                        >
                                            Startup
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="growth"
                                        >
                                            Growth
                                        </a>
                                    </li>
                                    <li data-tab-id="enterprise">
                                        <a
                                            class="tab-nav"
                                            data-tab-id="enterprise"
                                        >
                                            Enterprise
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="all-customer-stories"
                                            className="btn-link-pink"
                                        >
                                            All customer stories
                                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                                        </Link>
                                    </li>
                                    
                                
                                </ul>
                            </nav>
                        </div>

                        <div className="tab-content-wrapper">
                            <div className="tab-content sub-nav-wrapper active fade-in" id="startup">
                                <div className="grid-2">
                                    <div className="grid-3-row">
                                        <div className="grid-2-row">
                                            <h4 className="header-md w-85">Weeks to minutes</h4>
                                            <p>Reduction in customer onboarding time</p>
                                        </div>
                                        <div className="grid-2-row">
                                            <h4 className="header-md">2-5x faster</h4>
                                            <p>Fast reconciliation with a single report</p>
                                        </div>
                                        <div className="grid-4-row">
                                            <h4 className="header-sm">Products used</h4>
                                            <p>

                                            <span className="icon-bullet size-sm">
                                                <svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="36.4815" height="32.8334" rx="5" fill="#6F4CF5"/>
                                                    <path d="M54.7222 19.2438C54.7222 20.4476 53.7372 21.4326 52.5333 21.4326H20.4296C19.2257 21.4326 18.2407 20.4476 18.2407 19.2438V19.2255C18.2407 15.0484 21.6153 11.6738 25.7924 11.6738H47.1523C51.3294 11.6738 54.7222 15.0666 54.7222 19.2438Z" fill="#FF5996" fill-opacity="0.8"/>
                                                    <path d="M18.2407 26.3588V35.4974C18.2407 39.6746 21.6153 43.0491 25.7924 43.0491H47.1523C51.3294 43.0491 54.7222 39.6563 54.7222 35.4792V26.3588C54.7222 25.1549 53.7372 24.1699 52.5333 24.1699H20.4296C19.2257 24.1699 18.2407 25.1549 18.2407 26.3588ZM29.1852 36.9385H25.537C24.7891 36.9385 24.169 36.3183 24.169 35.5704C24.169 34.8225 24.7891 34.2024 25.537 34.2024H29.1852C29.933 34.2024 30.5532 34.8225 30.5532 35.5704C30.5532 36.3183 29.933 36.9385 29.1852 36.9385ZM41.0416 36.9385H33.7454C32.9975 36.9385 32.3773 36.3183 32.3773 35.5704C32.3773 34.8225 32.9975 34.2024 33.7454 34.2024H41.0416C41.7895 34.2024 42.4097 34.8225 42.4097 35.5704C42.4097 36.3183 41.7895 36.9385 41.0416 36.9385Z" fill="#FF5996" fill-opacity="0.8"/>
                                                </svg>
                                            </span>

                                            Billing
                                            </p>
                                            <p>

                                                <span className="icon-bullet size-sm">
                                                    <svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="36.4815" height="32.8334" rx="5" fill="#6F4CF5"/>
                                                        <path d="M54.7222 19.2438C54.7222 20.4476 53.7372 21.4326 52.5333 21.4326H20.4296C19.2257 21.4326 18.2407 20.4476 18.2407 19.2438V19.2255C18.2407 15.0484 21.6153 11.6738 25.7924 11.6738H47.1523C51.3294 11.6738 54.7222 15.0666 54.7222 19.2438Z" fill="#FF5996" fill-opacity="0.8"/>
                                                        <path d="M18.2407 26.3588V35.4974C18.2407 39.6746 21.6153 43.0491 25.7924 43.0491H47.1523C51.3294 43.0491 54.7222 39.6563 54.7222 35.4792V26.3588C54.7222 25.1549 53.7372 24.1699 52.5333 24.1699H20.4296C19.2257 24.1699 18.2407 25.1549 18.2407 26.3588ZM29.1852 36.9385H25.537C24.7891 36.9385 24.169 36.3183 24.169 35.5704C24.169 34.8225 24.7891 34.2024 25.537 34.2024H29.1852C29.933 34.2024 30.5532 34.8225 30.5532 35.5704C30.5532 36.3183 29.933 36.9385 29.1852 36.9385ZM41.0416 36.9385H33.7454C32.9975 36.9385 32.3773 36.3183 32.3773 35.5704C32.3773 34.8225 32.9975 34.2024 33.7454 34.2024H41.0416C41.7895 34.2024 42.4097 34.8225 42.4097 35.5704C42.4097 36.3183 41.7895 36.9385 41.0416 36.9385Z" fill="#FF5996" fill-opacity="0.8"/>
                                                    </svg>
                                                </span>

                                                Billing
                                            </p>
                                            <p>
                                                <span className="icon-bullet size-sm">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1394_520)">
                                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="black" fill-opacity="0.7"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_1394_520">
                                                        <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>

                                                </span>
                                                3 more
                                            </p>
                                        </div>
                                    </div>
                                    <div className="layered">
                                        <div className="layer-foreground">
                                            <div className="content-header">
                                                <h4 className="header-xl">Classy</h4>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_1388_1386)">
                                                    <path d="M23.9748 21.2957V2.65521C23.9748 1.17301 22.8018 0 21.3196 0H2.67914C1.19693 0 0.0239258 1.17301 0.0239258 2.65521V21.3448C0.0239258 22.827 1.19693 24 2.67914 24H21.3687C22.8509 24 24.0239 22.827 23.9748 21.2957ZM21.9822 21.2957C21.9822 21.654 21.6779 21.9583 21.3196 21.9583H2.67914C2.32086 21.9583 2.01656 21.654 2.01656 21.2957V2.65521C2.01656 2.29693 2.32086 1.99264 2.67914 1.99264H21.3147C21.673 1.99264 21.9773 2.29693 21.9773 2.65521V21.2957H21.9822Z" fill="white"/>
                                                    <path d="M17.7416 4.95117H6.30602C5.74651 4.95117 5.28516 5.41252 5.28516 5.97203C5.28516 6.53154 5.74651 6.99289 6.30602 6.99289H17.7416C18.3011 6.99289 18.7625 6.53154 18.7625 5.97203C18.7625 5.41252 18.306 4.95117 17.7416 4.95117Z" fill="white"/>
                                                    <path d="M17.7416 10.9785H6.30602C5.74651 10.9785 5.28516 11.4399 5.28516 11.9994C5.28516 12.5589 5.74651 13.0202 6.30602 13.0202H17.7416C18.3011 13.0202 18.7625 12.5589 18.7625 11.9994C18.7625 11.4399 18.306 10.9785 17.7416 10.9785Z" fill="white"/>
                                                    <path d="M17.7074 16.918H6.27184C5.71233 16.918 5.25098 17.3793 5.25098 17.9388C5.25098 18.4983 5.71233 18.9597 6.27184 18.9597H17.7074C18.2669 18.9597 18.7283 18.4983 18.7283 17.9388C18.7283 17.3793 18.2718 16.918 17.7074 16.918Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_1388_1386">
                                                    <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="content-footer">
                                                <h4 className="header-lg">
                                                Classy Pay, powered by Stripe, creates best-in-class fundraising experiences for modern non-profits
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="layer-bg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-2">

                            <div></div>
                            <div className="d-flex justify-content-between flex-wrap">
                                <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                                <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                                <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-4">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div className="grid-3-row">
                                <h4 className="sub-header main">Building together</h4>
                                <h1 className="header-xxl">We partner with customers to build breakthrough products</h1>
                                <p>
                                Stripe is the fastest-evolving payments platform and builds market-first functionality specifically for our customers’ needs.
                                </p>
                            </div>
                            <div></div>
                        </div>

                        <div className="grid-2">
                            <div>
                                <div className="grid-2-row">
                                    <h1 className="header-lg">How we built instant payouts with Lyft</h1>
                                    
                                    <div className="grid-3-row">

                                        <div className="grid-2-row">
                                            <h4 className="header-sm">Challenge</h4>
                                            <p>
                                            Lyft’s biggest request from drivers was the ability to get paid more frequently compared to traditional weekly payouts, which meant Lyft needed to find a way to seamlessly pay out drivers at their convenience.
                                            </p>
                                        </div>
                                        <div className="grid-2-row">
                                            <h4 className="header-sm">Solution</h4>
                                            <p>Lyft worked with Stripe to build Express Pay, providing drivers the ability to decide when they want to get paid out—typically within a few hours of a ride.</p>
                                        </div>

                                        <div className="has-bullets">
                                            <h4 className="sub-header">Products</h4>

                                            <div className="bullets-wrapper">
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

                                                    </span>Connect
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

                                                    </span>Payments
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            <div>
                                <div className="img-container-shadow"></div>
                                <div className="img-container-shadow"></div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between flex-wrap">
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/logo_0.png" } className="letshego-logo"/>
                            <img src={ process.env.PUBLIC_URL + "/img/logos/sps+logo.png" } className="sps-logo"/>
                        </div>

                    </div>
                </section>

                <section className="section-5">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div className="grid-2-row">
                                <h4 className="sub-header main">Customers by size</h4>
                                <h1 className="header-xxl">We accelerate growth for all types of businesses</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className="page-sub-nav flex-grow-0">
                            <nav>
                                <ul>
                                
                                    <li>
                                        <a
                                            class="tab-nav active"
                                            data-tab-id="marketplace"
                                        >
                                            Marketplace
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="saas"
                                        >
                                            SaaS
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="platforms"
                                        >
                                            Platforms
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="ecommerce"
                                        >
                                            Ecommerce
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="all-customer-stories"
                                            className="btn-link-pink"
                                        >
                                            All customer stories
                                            <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                                        </Link>
                                    </li>
                                
                                </ul>
                            </nav>
                        </div>
            
                        <div className="tab-content-wrapper">
                            <MarketPlace />
                        </div>

                    </div>
                </section>

                <section className="section-6">
                    <div className="layout-width">

                        <div className="grid-2">
                            <div className="grid-2-row">
                                <h4 className="sub-header main">Customers by solution</h4>
                                <h1 className="header-xxl">We obsess over payments so our customers don’t have to</h1>
                            </div>
                        </div>

                        <div className="grid-2">
                            <p>
                            Our teams agonize over the right functionality so that we can offer a powerful platform without requiring you to spend months to integrate payments capabilities.
                            </p>
                            <p>
                            That means more time to focus on your core product and customer experience and less time stitching together disparate systems or handling edge cases.
                            </p>
                        </div>

                        <div className="grid-2">
                            <div className="grid-2">
                                <div className="has-bullets">
                                    <div className="bullets-wrapper">
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

                                            </span>Accept payments
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

                                            </span>Offer flexible payouts
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

                                            </span>Reduce fraud
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

                                            </span>Increase conversion
                                        </div>
                                    </div>
                                </div>
                                <div className="has-bullets">
                                    <div className="bullets-wrapper">
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

                                            </span>Manage billing & subscriptions
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

                                            </span>Optimize checkout
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

                                            </span>Scale global payments
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

                                            </span>Embed financial services
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>

                        <div className="row">
                                
                            <div className="col-lg-12">
                            
                                <div className="graphic-wall">
                                    <div className="top-left">
                                        <img alt=""/>
                                    </div>
                                    <div className="top-center">
                                        <img alt=""/>
                                    </div>
                                    <div className="top-right">
                                        <img alt=""/>
                                    </div>
                                    <div className="bottom-left">
                                        <img alt=""/>
                                    </div>
                                    <div className="bottom-right">
                                        <img alt=""/>
                                    </div>
                                </div>
                                
                                
                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-7 skewed-bg">
                    <div className="layout-width">
                        <div className="grid-2">

                            <div>
                                <div className="grid-3-row">
                                    <h1 className="header-lg">Ready to get started?</h1>
                                    <p>
                                    Create an account and start accepting payments—no contracts or banking details required. Or, contact us to design a custom package for your business.
                                    </p>
                                    <div className="button-group btn-grid-2 link">
                                        <a href="javascript:void(0);" className="btn btn-pill btn-pink x-large">Start now<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Contact sales<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2"> 
                            
                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                    </div>
                                    <h4 className="sub-header">Always know what you’ll pay</h4>
                                    <p>

                                    Integrated per-transaction pricing with no hidden fees

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-pink">Pricing details<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/credit-card.svg" } />
                                    </div>
                                    <h4 className="sub-header">Start your integration </h4>
                                    <p>

                                    Get up and running with Stripe in as little as 10 minutes

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-pink">API references<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>

        );

    }

 }
    