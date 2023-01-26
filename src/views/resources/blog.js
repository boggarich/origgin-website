import React from "react";
import "../../assets/sass/blog.scss";
import { Link } from 'react-router-dom';
import { setupTabNavigation } from "../helpers/common-obj";
import Slider from "react-slick";

const reactSliderSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
};

export default class Blog extends React.Component {

    componentDidMount() {

        setupTabNavigation();

    }

    render() {

        return(
            <div className="main-content blog">

                <section className="page-hero">

                    <div className="layout-width">
                        <div className="img-container-shadow grey">
                            <div className="grid-2">
                                <div>
                                    <div className="grid-4-row">
                                        <h4 className="sub-header main">Engineering</h4>
                                        <h1 className="header-xxl no-transform">
                                        How Stripe builds interactive docs with Markdoc
                                        </h1>

                                        <div>
                                            <div className="grid-2 profile">
                                                <img src={ process.env.PUBLIC_URL + "/img/profile-picture-1.png" } />
                                                <div>
                                                    <p>Ryan Paul</p>
                                                    <p>Docs Product</p>
                                                </div>
                                            </div>

                                            <h4 className="sub-header">
                                            Markdoc delivers a good user experience without compromising the authoring experience. It enables writers to express interactivity and simple page logic without mixing code and content.
                                            </h4>
                                        </div>

                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="page-hero-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-hero-bg"></div>
                </section>

                <section className="section-1">
                    <div className="layout-width">

                        <div className="page-sub-nav flex-grow-0">
                            <nav>
                                <ul>
                                
                                    <li>
                                        <a
                                            class="tab-nav active"
                                            data-tab-id="all"
                                        >
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="corporate"
                                        >
                                            Corporate
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="engineering"
                                        >
                                            Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="tab-nav"
                                            data-tab-id="product"
                                        >
                                            Product
                                        </a>
                                    </li>
                                
                                </ul>
                            </nav>
                        </div>

                        <div className="tab-content-wrapper">

                            <div className="tab-content sub-nav-wrapper active fade-in" id="all">

                                <div className="spacing">

                                    <div className="grid-2 three-by-one">

                                        <div className="grid-2-row">
                                            <h4 className="sub-header main">Product</h4>
                                            <h1 className="header-xxl">
                                            Streamline in-person payments with recent Stripe Terminal upgrades
                                            </h1>
                                        </div>

                                        <div className="grid-2x2">
                                            <p>August 4, 2022</p>
                                            <div className="grid-2 profile">
                                                <img src={ process.env.PUBLIC_URL + "/img/profile-picture-1.png" } />
                                                <div>
                                                    <p>Ryan Paul</p>
                                                    <p>Docs Product</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                    <div className="grid-2 three-by-one">
                                        <div className="grid-2-row">

                                            <p>
                                            We’re continuously working on improving Terminal to help businesses better serve their customers, and we’re excited to share the latest updates that enable our users to reach more customers globally, start accepting in-person payments faster, and deliver a frictionless checkout experience for more use cases.
                                            </p>
                                            <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                        </div>
                                    
                                    </div>

                                </div>
                                
                                <div className="spacing">

                                    <div className="grid-2 three-by-one">

                                        <div className="grid-2-row">
                                            <h4 className="sub-header main">Product</h4>
                                            <h1 className="header-xxl">
                                            Reimagining bank transfers
                                            </h1>
                                        </div>

                                        <div className="grid-2x2">
                                            <p>June 20, 2022</p>
                                            <div className="grid-2 profile">
                                                <img src={ process.env.PUBLIC_URL + "/img/profile-picture-2.png" } />
                                                <div>
                                                    <p>Paul Glootz</p>
                                                    <p>Product, EMEA</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                    <div className="grid-2">
                                        <div className="grid-2-row max-content">

                                            <p>
                                            Bank transfers have been at the core of global payments since Western Union added money transfers to its telegram services in 1871, giving individuals the ability to move money across distances via an electronic communication network for the first time.
                                            </p>
                                            <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                        </div>
                                        <div className="img-container-shadow"></div>
                                    
                                    </div>

                                </div>

                                <div className="spacing">

                                    <div className="grid-2 three-by-one">

                                        <div className="grid-2-row">
                                            <h4 className="sub-header main">Corporate</h4>
                                            <h1 className="header-xxl">
                                            Sessions 2022 and product highlights from the year
                                            </h1>
                                        </div>

                                        <div className="grid-2x2">
                                            <p>May 24, 2022</p>
                                            <div className="grid-2 profile">
                                                <img src={ process.env.PUBLIC_URL + "/img/profile-picture-3.png" } />
                                                <div>
                                                    <p>John Collison</p>
                                                    <p>Leadership</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid-2">
                                        <div className="grid-2-row max-content">

                                            <p>
                                            Today, we kicked off our annual user conference—Stripe Sessions. You can now watch the keynote and breakout talks on demand.
                                            </p>
                                            <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                        </div>
                                        <div className="img-container-shadow"></div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <section className="section-2">

                        <div className="layout-width pb-0">
                            <h1 className="header-xxl no-transform">Recent highlights</h1>
                        </div>

                        <div className="layout-width pt-0">

                            <Slider { ...reactSliderSettings  }>

                                <div className="slider-content-container first">
                                    <div className="grid-3-row">
                                        <div>
                                            <h4 className="header-md">New Billing analytics functionalities</h4>
                                            <p>November 9, 2022</p>
                                        </div>
                                        <p>
                                        You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format.
                                        </p>
                                        <a href="javascript:void(0);" className="btn-link-default">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                                <div className="slider-content-container second">
                                    <div className="grid-3-row">
                                        <div>
                                            <h4 className="header-md">New Billing analytics functionalities</h4>
                                            <p>November 9, 2022</p>
                                        </div>
                                        <p>
                                        You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format.
                                        </p>
                                        <a href="javascript:void(0);" className="btn-link-default">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                                <div className="slider-content-container third">
                                    <div className="grid-3-row">
                                        <div>
                                            <h4 className="header-md">New Billing analytics functionalities</h4>
                                            <p>November 9, 2022</p>
                                        </div>
                                        <p>
                                        You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format.
                                        </p>
                                        <a href="javascript:void(0);" className="btn-link-default">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                                <div className="slider-content-container fourth">
                                    <div className="grid-3-row">
                                        <div>
                                            <h4 className="header-md">New Billing analytics functionalities</h4>
                                            <p>November 9, 2022</p>
                                        </div>
                                        <p>
                                        You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format.
                                        </p>
                                        <a href="javascript:void(0);" className="btn-link-default">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>
                                <div className="slider-content-container fifth">
                                    <div className="grid-3-row">
                                        <div>
                                            <h4 className="header-md">New Billing analytics functionalities</h4>
                                            <p>November 9, 2022</p>
                                        </div>
                                        <p>
                                        You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format.
                                        </p>
                                        <a href="javascript:void(0);" className="btn-link-default">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>
                                </div>

                            </Slider>

                        </div>

                </section>

                <section className="section-3">
                    <div className="layout-width">
                        <div className="tab-content sub-nav-wrapper active fade-in">

                            <div className="spacing">

                                <div className="grid-2 three-by-one">

                                    <div className="grid-2-row">
                                        <h4 className="sub-header main">Engineering</h4>
                                        <h1 className="header-xxl">
                                        Migrating millions of lines of code to TypeScript
                                        </h1>
                                    </div>

                                    <div className="grid-2x2">
                                        <p>May 20, 2022</p>
                                        <div className="grid-2 profile">
                                            <img src={ process.env.PUBLIC_URL + "/img/profile-picture-3.png" } />
                                            <div>
                                                <p>Andrew Lunny</p>
                                                <p>Developer Productivity</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-2">
                                    <div className="grid-2-row max-content">

                                        <p>
                                        On Sunday, March 6, we migrated Stripe’s largest JavaScript codebase from Flow to TypeScript. In a single pull request, we converted more than 3.7 million lines of code. The next day, hundreds of engineers came in to start writing TypeScript for their projects.
                                        </p>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                    </div>
                                    <div className="img-container-shadow"></div>
                                
                                </div>

                            </div>

                            <div className="spacing">

                                <div className="grid-2 three-by-one">

                                    <div className="grid-2-row">
                                        <h4 className="sub-header main">Engineering</h4>
                                        <h1 className="header-xxl">
                                        Fast builds, secure builds. Choose two.
                                        </h1>
                                    </div>

                                    <div className="grid-2x2">
                                        <p>May 4, 2022</p>
                                        <div className="grid-2 profile">
                                            <img src={ process.env.PUBLIC_URL + "/img/SushainCherivirala.png" } />
                                            <div>
                                                <p>Sushain Cherivirala</p>
                                                <p>Software Engineer, Build Team</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-2 three-by-one">
                                    <div className="grid-2-row">

                                        <p>
                                        Stripe's continuous integration (CI) system is responsible for orchestrating build pipelines and executing the tens of thousands of test suites that our engineers depend on to validate their changes. We lean on a combination of open-source technologies and novel engineering to deliver a CI system that is performant, secure, and delivers a delightful developer experience.
                                        </p>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                    </div>

                                </div>

                            </div>

                            <div className="spacing">

                                <div className="grid-2 three-by-one">

                                    <div className="grid-2-row">
                                        <h4 className="sub-header main">Corporate</h4>
                                        <h1 className="header-xxl">
                                        Sessions is back on May 24
                                        </h1>
                                    </div>

                                    <div className="grid-2x2">
                                        <p>May 3, 2022</p>
                                        <div className="grid-2 profile">
                                            <img src={ process.env.PUBLIC_URL + "/img/MikeClayville.png" } />
                                            <div>
                                                <p>Mike Clayville</p>
                                                <p>Revenue</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-2">
                                    <div className="grid-2-row max-content">

                                        <p>
                                        Registration is open for Stripe Sessions—our annual user conference. Like last year, Sessions 2022 will be completely virtual, free to attend, and open to all.
                                        </p>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                    </div>
                                    <div className="img-container-shadow"></div>

                                </div>

                            </div>

                            <div className="img-container-shadow">

                                <div className="grid-2">

                                    <div className="grid-3-row">
                                        <h4 className="header-lg">Changelog</h4>
                                        <p>November 2022</p>
                                        <a href="javascript:void(0);" className="btn-link btn-link-pink">Go to changelog<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                    </div>

                                    <div className="grid-2-row">
                                        <p className="pill pill-pink">Billing</p>
                                        <p>You can now customize how Stripe calculates your MRR and churn, and export your SaaS and billing metrics in CSV format. <a href="javascript:void(0);" className="btn-link btn-link-pink">Learn more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a> </p>
                                    </div>

                                </div>
                            </div>

                            <div className="spacing">

                                <div className="grid-2 three-by-one">

                                    <div className="grid-2-row">
                                        <h4 className="sub-header main">Product</h4>
                                        <h1 className="header-xxl">
                                        Expanding global payouts with crypto
                                        </h1>
                                    </div>

                                    <div className="grid-2x2">
                                        <p>April 22, 2022</p>
                                        <div className="grid-2 profile">
                                            <img src={ process.env.PUBLIC_URL + "/img/KaranSharma.png" } />
                                            <div>
                                                <p>Karan Sharma</p>
                                                <p>Crypto</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-2">
                                    <div className="grid-2-row max-content">

                                        <p>
                                        Creators, freelancers, sellers, and solopreneurs are building and creating all over the world. While it’s easier than ever before to find customers and fans, getting paid can still be difficult, especially outside of major markets.
                                        </p>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                    </div>
                                    <div className="img-container-shadow"></div>

                                </div>

                            </div>

                            <div className="spacing">

                                <div className="grid-2 three-by-one">

                                    <div className="grid-2-row">
                                        <h4 className="sub-header main">Product</h4>
                                        <h1 className="header-xxl">
                                        More locally relevant ways to pay in Japan
                                        </h1>
                                    </div>

                                    <div className="grid-2x2">
                                        <p>April 14, 2022</p>
                                        <div className="grid-2 profile">
                                            <img src={ process.env.PUBLIC_URL + "/img/DanielHefferman.png" } />
                                            <div>
                                                <p>Daniel Heffernan</p>
                                                <p>Product, Japan</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-2">
                                    <div className="grid-2-row max-content">

                                        <p>
                                        Since we launched in Japan five years ago, our domestic and international users have told us that they want to pursue deeper, more natural relationships with their Japanese customers. Our Japan-based engineering teams have made major progress in unlocking larger portions of the economy for our users, and today we’re announcing support for Konbini payments and bank transfers (known locally as Furikomi) on Stripe.
                                        </p>
                                        <a href="javascript:void(0);" className="btn btn-link-pink">Read more<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>

                                    </div>
                                    <div className="img-container-shadow"></div>

                                </div>

                            </div>

                            <div className="spacing">
                               <a href="javascript:void(0);" className="btn btn-pill btn-pink xxx-large">View all posts<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-4">
                    <div className="layout-width">
                        <div className="grid-2">

                            <div>
                                <div className="grid-3-row">
                                    <h1 className="header-xxl">Stay connected</h1>
                                    <p>
                                    Subscribe to receive new blog posts from Stripe in your RSS reader.
                                    </p>
                                    <div className="button-group btn-grid-2 link">
                                        <a href="javascript:void(0);" className="btn btn-pill btn-custom-primary x-large">Subscribe to RSS<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="grid-2"> 

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/building.svg" } />
                                    </div>
                                    <h4 className="sub-header text-nowrap">Like this post? Join our team.</h4>
                                    <p>

                                    Stripe builds financial tools and economic infrastructure for the internet.

                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">View roles<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                                <div className="flex-4-row has-icon">
                                    <div>
                                        <img src={ process.env.PUBLIC_URL + "/img/chat.svg" } />
                                    </div>
                                    <h4 className="sub-header">Have any feedback or questions?</h4>
                                    <p>
                                    We’d love to hear from you.
                                    </p>
                                    <a href="javascript:void(0);" className="btn btn-link-primary">Contact us<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        );

    }

}