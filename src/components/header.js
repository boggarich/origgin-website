import React, { useState } from "react";
import '../assets/sass/header.scss';
import { Link, useMatch } from 'react-router-dom';
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import pageLogoWhite from '../assets/img/ORRIGGIN-logotype.png';
import pageLogoPink from '../assets/img/ORRIGGIN-logotypeFooter.png';
import hamburgerMenuWhite from '../assets/img/hamburger-menu-white.png';
import hamburgerMenuBlack from '../assets/img/hamburger-menu-black.png';

function Navs() {

    const productsRouteMatch = useMatch("/products/:segment1/:segment2");
    const homeRouteMatch = useMatch("/");
    const solutionsRouteMatch = useMatch("/solutions");
    const companyRouteMatch = useMatch('/company/:segment2');
    const kaneManiRouteMatch = useMatch('/kane-mani/:segment2');
    const supportRouteMatch = useMatch('/support');
    const distributorDashboardRouteMatch = useMatch('/distributor-dashboard');
    const customersRouteMatch = useMatch('/company/customers');

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const hideMobileViewSubNav = (e) => {

        $('.sub-navs.active').removeClass('active');
        $(e.currentTarget).removeClass('active');

    }

    const showMobileViewSubNav = (e) => {
        
        var mainNavIndex = $(e.currentTarget).data('mobileMainNavIndex');

        $('.sub-navs').removeClass('active');
        $(`.sub-navs[data-mobile-sub-nav-index="${mainNavIndex}"]`).addClass('active');
        $('#closeMobileSubNavBtn').addClass('active');

    }

    const addEventListener = () => {

        $('#closeMobileSubNavBtn').on('click', (e) => {

            hideMobileViewSubNav(e);

        })

        $('.mobile-main-nav').on('click', (e) => {

            showMobileViewSubNav(e);

        });

    }

    return (
        <>

            <div className="hidden-md-up w-100">

                <div className="mobile-view-nav-container">
                    <div className="page-logo-wrapper position-relative">
                        <Link to="/" reloadDocument>

                            {
                                (Boolean(homeRouteMatch) || 
                                Boolean(distributorDashboardRouteMatch) ||  
                                Boolean(supportRouteMatch))  ? 
                                <img src={ pageLogoWhite } alt="page logo" className="page-logo white"/> : 
                                <img src={ pageLogoPink } className="page-logo pink" alt="page logo"/>   
                            }
                            
                        </Link>
                    </div>
                    <div className="mobile-menu-drawer">
                        <a href="javascript:void(0);" onClick={handleShow} >

                            {
                                (Boolean(homeRouteMatch) || 
                                Boolean(distributorDashboardRouteMatch) ||  
                                Boolean(supportRouteMatch)) ? 
                                <img src={ hamburgerMenuWhite } alt="page logo" className="page-logo"/> : 
                                <img src={ hamburgerMenuBlack } className="page-logo pink" alt="page logo"/>   
                            }

                        </a>
                    </div>

                    <Modal
                        show={showModal}
                        onHide={handleClose}
                        onShow={addEventListener}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        className="mobile-view-nav-modal"
                        dialogClassName=""
                        >
                            <Modal.Header closeButton>

                                <img src={ pageLogoPink } className="page-logo pink" alt="page logo"/>
                                <div id="closeMobileSubNavBtn">
                                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9L1.5 5L5.5 1" stroke="#635bff" strokeWidth="1.75"></path></svg> Back
                                </div>

                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal-content-container">
                                    <div className="mobile-main-nav-container">
                                        <nav className="main-navs">
                                            <ul>
                                                <li>Products</li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="1">Energy <svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="2">Consumer Internet<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="3">Cloud Services<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="4">Tech Education<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="5">Solutions<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="6">Corportate<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="7">Resources<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="8">Kane Mani<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                            </ul>
                                        </nav>
                                        <div className="sub-navs" data-mobile-sub-nav-index="1">
                                            <ul>
                                                <li id="mobile-eprepaid"><Link to="products/energy/e-prepaid" reloadDocument>Eprepaid</Link></li>
                                                <li id="mobile-smarthome"><Link to="products/energy/smarthome" reloadDocument>SmartHome</Link></li>
                                                <li id="mobile-easysolar"><Link to="products/energy/easysolar" reloadDocument>EasySolar</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sub-navs" data-mobile-sub-nav-index="2">
                                            <ul>
                                                <li id="mobile-waakye-locator"><Link to="products/consumer-internet/waakye-locator" reloadDocument>Waakye Locator</Link></li>
                                                <li id="mobile-printablly"><Link to="products/consumer-internet/printablly" reloadDocument>Printablly</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sub-navs" data-mobile-sub-nav-index="3">
                                            <ul>
                                                <li id="mobile-rope-crm"><Link to="products/cloud-services/rope" reloadDocument>Rope CRM</Link></li>
                                                <li id="mobile-rope-pos"><Link to="products/cloud-services/rope" reloadDocument>Rope POS</Link></li>
                                                <li id="mobile-rope-erp"><Link to="products/cloud-services/rope" reloadDocument>Rope ERP</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sub-navs" data-mobile-sub-nav-index="4">
                                            <ul>
                                                <li id="mobile-a-day-in-tech"><Link to="products/tech-education/A-day-in-tech">A Day In Tech</Link></li>
                                                <li id="mobile-kane-mani-tech-tour"><Link to="products/tech-education/Kane-Mani-tech-tour">Kane Mani Tech tour</Link></li>
                                                <li id="mobile-codebus"><Link to="products/tech-education/codebus">CodeBus</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sub-navs" data-mobile-sub-nav-index="5">
                                            <ul>
                                                <li id="mobile-education"><Link to="solutions" reloadDocument>Education</Link></li>
                                                <li id="mobile-energy"><Link to="solutions" reloadDocument>Energy</Link></li>
                                                <li id="mobile-financial-services"><Link to="solutions" reloadDocument>Financial Services</Link></li>
                                                <li id="mobile-healthcare"><Link to="solutions" reloadDocument>Healthcare</Link></li>
                                                <li id="mobile-hospitality"><Link to="solutions" reloadDocument>Hospitality</Link></li>
                                                <li id="mobile-retail"><Link to="solutions" reloadDocument>Retail</Link></li>
                                                <li id="mobile-manufacturing"><Link to="solutions" reloadDocument>Manufacturing</Link></li>
                                                <li id="mobile-media"><Link to="solutions" reloadDocument>Media</Link></li>
                                            </ul>
                                        </div>

                                        <div className="sub-navs" data-mobile-sub-nav-index="6">
                                            <ul>
                                                <li id="mobile-about"><Link to="company/about-us" reloadDocument>About</Link></li>
                                                <li id="mobile-history"><Link to="company/history" reloadDocument>History</Link></li>
                                                <li id="mobile-team"><Link to="company/team" reloadDocument>Executive Team</Link></li>
                                                <li id="mobile-board-of-directors"><Link to="company/board-of-directors" reloadDocument>Board of Directors</Link></li>
                                                <li id="mobile-partners"><Link to="company/partners" reloadDocument>Partners</Link></li>
                                                <li id="mobile-customers"><Link to="company/customers" reloadDocument>Customers</Link></li>
                                                <li id="mobile-careers"><Link to="company/careers" reloadDocument>Careers</Link></li>
                                            </ul>
                                        </div>

                                        <div className="sub-navs" data-mobile-sub-nav-index="8">
                                            <ul>
                                                <li id="mobile-the-origgin-mission"><Link to="kane-mani/the-origgin-vision" reloadDocument>The Origgin Mission</Link></li>
                                                <li id="mobile-the-origgin-masterplan"><Link to="kane-mani/the-origgin-masterplan" reloadDocument>The Origgin Masterplan</Link></li>
                                                <li id="mobile-a-100-billion-company"><Link to="kane-mani/a-$100-billion-company" reloadDocument>A $100 Billion Company</Link></li>
                                            </ul>
                                        </div>

                                        <div className="sub-navs" data-mobile-sub-nav-index="9">
                                            <ul>
                                                <li id="mobile-signup-individual"><Link to="sign-up/individual" reloadDocument>Individual</Link></li>
                                                <li id="mobile-signup-business"><Link to="sign-up/business" reloadDocument>Business</Link></li>
                                            </ul>
                                        </div>

                                        <div className="sub-navs" data-mobile-sub-nav-index="10">
                                            <ul>
                                                <li id="mobile-login-individual"><Link to="login/individual" reloadDocument>Individual</Link></li>
                                                <li id="mobile-login-business"><Link to="login/business" reloadDocument>Business</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                               
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="modal-footer-container">

                                    <div className="mobile-main-nav-container">
                                        <nav className="main-navs">
                                            <ul>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="9">Sign Up<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                                <li><button className="mobile-main-nav" data-mobile-main-nav-index="10">Log In<svg fill="none" viewBox="0 0 16 16" width="16" height="16"><path fill="var(--navItemFontColor)" fillRule="evenodd" d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z" clipRule="evenodd"></path></svg></button></li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </Modal.Footer>
                    </Modal>

                </div>

            </div>
        
            <nav className="header-nav w-100">

                <div className="page-logo-wrapper position-relative hidden-md-up">
                    <Link to="/" reloadDocument>

                        {
                           (Boolean(homeRouteMatch) || 
                            Boolean(distributorDashboardRouteMatch) ||  
                            Boolean(supportRouteMatch))  ? 
                            <img src={ pageLogoWhite } alt="page logo" className="page-logo"/> : 
                            <img src={ pageLogoPink } className="page-logo pink" alt="page logo"/>   
                        }

                        
                    </Link>
                </div>

                <div className="d-flex justify-content-between">

                    <div className="page-logo-wrapper position-relative">
                        <Link to="/" reloadDocument>

                            {
                                ( Boolean(homeRouteMatch) ||
                                Boolean(distributorDashboardRouteMatch) ||  
                                Boolean(supportRouteMatch))  ? 
                                <img src={ pageLogoWhite } alt="page logo" className="page-logo"/> : 
                                <img src={ pageLogoPink } className="page-logo pink" alt="page logo"/>   
                            }
                            
                        </Link>
                    </div>

                    <ul className="d-flex align-items-center header-nav-list main-header-nav m-0 p-0 flex-1">
                        <li className="header-nav-item" data-nav-item-index="1" data-menu-section-width="630" data-menu-section-height="283">
                            <button className={ "header-nav-item-link " + 
                            ( Boolean(productsRouteMatch) ? "active" : "" ) + 
                            ( Boolean(homeRouteMatch) ? "white" : "" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) +
                            ( Boolean(customersRouteMatch) ? "white" : "" ) }>Products</button>
                        </li>
                        <li className="header-nav-item" data-nav-item-index="3" data-menu-section-width="470" data-menu-section-height="273">
                            <button className={ "header-nav-item-link " + 
                            ( Boolean(solutionsRouteMatch) ? "active" : "" ) + 
                            ( Boolean(homeRouteMatch) ? "white" : "" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) +
                            ( Boolean(customersRouteMatch) ? "white" : "" ) }>Solutions</button>
                        </li>
                        <li className="header-nav-item" data-nav-item-index="4" data-menu-section-width="470" data-menu-section-height="228">
                            <button className={ "header-nav-item-link " + 
                            ( Boolean(companyRouteMatch) ? "active" : "" ) + 
                            ( Boolean(homeRouteMatch) ? "white" : "" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) }>Corporate</button>
                        </li>
                        <li className="header-nav-item" data-nav-item-index="6" data-menu-section-width="420" data-menu-section-height="228">
                            <button className={ "header-nav-item-link " + 
                            ( Boolean(homeRouteMatch) ? "white" : "" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) + 
                            ( Boolean(customersRouteMatch) ? "white" : "" ) }>Resources</button>
                        </li>
                        <li className="header-nav-item" data-nav-item-index="5" data-menu-section-width="420" data-menu-section-height="185">
                            <button className={ "header-nav-item-link " + 
                            ( Boolean(kaneManiRouteMatch) ? "active" : "" ) + 
                            ( Boolean(homeRouteMatch) ? "white" : "" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) +
                            ( Boolean(customersRouteMatch) ? "white" : "" ) }>Kane Mani</button>
                        </li>

                        <div className="header-menu-container">
                            <div className="site-header-arrow"></div>
                            <div className="site-menu site-header-menu" style={{ pointerEvents: 'auto' }} >
                            
                                <div className="site-menu-card">
                                    
                                    <div className="site-menu-section active" data-site-menu-section-index="1">
                                        
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu">

                                                    <div className="site-sub-menu-nav">
                                                        <div>
                                                            
                                                            <button className="site-sub-nav-item" data-sub-nav-index="1"><strong className="site-sub-nav-item-label">Energy</strong></button>
                                                            <button className="site-sub-nav-item" data-sub-nav-index="2"><strong className="site-sub-nav-item-label">Consumer Internet</strong></button>
                                                            <button className="site-sub-nav-item" data-sub-nav-index="3"><strong className="site-sub-nav-item-label">Cloud Services</strong></button>
                                                            <button className="site-sub-nav-item" data-sub-nav-index="4"><strong className="site-sub-nav-item-label">Tech Education</strong></button>
                                                            
                                                        </div>
                                                        <span className="sub-menu-nav-active">
                                                        <svg className="sub-menu-arrow" width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.29289 13.2929 0 6v16l7.29289-7.2929c.39053-.3905.39053-1.0237 0-1.4142Z" fill="#fff"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="m0 27.657 9.41421-9.4142c2.34319-2.3432 2.34319-6.1422.00001-8.48532L0 .343262V6.00012l6.58579 6.58578c.78105.7811.78105 2.0474 0 2.8284L0 22.0001v5.6569Z" fill="var(--siteSubMenuBackgroundColor, #f0f3f6)"></path>
                                                        </svg>
                                                        </span>
                                                    </div>

                                                    <div className="site-sub-menu-section-list">

                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        
                                                        <div className="sub-section active" data-menu-section-list-index="1">
                                                            <div className="sub-nav-section-overlay"></div>
                                                            <Link to="products/energy/e-prepaid" className="sub-nav-item-link" id="eprepaid" reloadDocument><strong className="site-sub-nav-item-label">Eprepaid&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/energy/smarthome" className="sub-nav-item-link" id="smarthome" reloadDocument><strong className="site-sub-nav-item-label">SmartHome</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/energy/easysolar" className="sub-nav-item-link" reloadDocument id="easysolar"><strong className="site-sub-nav-item-label">EasySolar</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            {/* <Link to="products/energy/wireman" className="sub-nav-item-link"><strong className="site-sub-nav-item-label">Wireman</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link> */}
                                                            
                                                        </div>

                                                        <div className="sub-section" data-menu-section-list-index="2">
                                                            <div className="sub-nav-section-overlay"></div>
                                                            <Link to="products/consumer-internet/waakye-locator" className="sub-nav-item-link" id="waakye-locator" reloadDocument><strong className="site-sub-nav-item-label">Waakye Locator&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/consumer-internet/printablly" className="sub-nav-item-link" id="printablly" reloadDocument><strong className="site-sub-nav-item-label">Printablly</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            
                                                        </div>

                                                        <div className="sub-section" data-menu-section-list-index="3">
                                                            <div className="sub-nav-section-overlay"></div>
                                                            <Link to="products/cloud-services/rope" className="sub-nav-item-link" id="rope-crm" reloadDocument><strong className="site-sub-nav-item-label">Rope CRM&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/cloud-services/rope" className="sub-nav-item-link" id="rope-pos" reloadDocument><strong className="site-sub-nav-item-label">Rope POS&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/cloud-services/rope" className="sub-nav-item-link" id="rope-erp" reloadDocument><strong className="site-sub-nav-item-label">Rope ERP&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            
                                                        </div>
                                                        
                                                        <div className="sub-section" data-menu-section-list-index="4">
                                                            <div className="sub-nav-section-overlay"></div>
                                                            <Link to="products/tech-education" className="sub-nav-item-link" id="a-day-in-tech" reloadDocument><strong className="site-sub-nav-item-label">A Day In Tech&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/tech-education" className="sub-nav-item-link" id="kane-mani-tech-tour" reloadDocument><strong className="site-sub-nav-item-label">Kane Mani Tech Tour</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="products/tech-education" className="sub-nav-item-link" id="code-bus" reloadDocument><strong className="site-sub-nav-item-label">CodeBus</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            
                                                        </div>

                    
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </section>
                                    </div>
                                    <div className="site-menu-section" data-site-menu-section-index="3">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">

                                                            <div className="grid-2">
                                                                <div>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="education" reloadDocument><strong className="site-sub-nav-item-label">Education&nbsp;</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="government" reloadDocument><strong className="site-sub-nav-item-label">Government</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="financial-services" reloadDocument><strong className="site-sub-nav-item-label">Financial Services</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="healthcare" reloadDocument><strong className="site-sub-nav-item-label">Healthcare</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="agriculture" reloadDocument><strong className="site-sub-nav-item-label">Agriculture</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="hospitality" reloadDocument><strong className="site-sub-nav-item-label">Hospitality&nbsp;</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="legal" reloadDocument><strong className="site-sub-nav-item-label">Legal</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="manufacturing" reloadDocument><strong className="site-sub-nav-item-label">Manufacturing</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="media" reloadDocument><strong className="site-sub-nav-item-label">Media</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="solutions" className="sub-nav-item-link" id="logistics" reloadDocument><strong className="site-sub-nav-item-label">Logistics</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="site-menu-section" data-site-menu-section-index="4">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">
                                                            <div className="grid-2">
                                                                <div>
                                                                    <Link to="company/about-us" className="sub-nav-item-link" reloadDocument id="about"><strong className="site-sub-nav-item-label">About&nbsp;</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="company/history" className="sub-nav-item-link" reloadDocument id="history"><strong className="site-sub-nav-item-label">History</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="company/team" className="sub-nav-item-link" reloadDocument id="team"><strong className="site-sub-nav-item-label">Executive Team</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="company/board-of-directors" className="sub-nav-item-link" reloadDocument id="board-of-directors"><strong className="site-sub-nav-item-label">Board of Directors</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                </div>
                                                                <div>

                                                                    <Link to="company/partners" className="sub-nav-item-link" id="partners" reloadDocument><strong className="site-sub-nav-item-label">Partners&nbsp;</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="company/customers" className="sub-nav-item-link" reloadDocument id="customers"><strong className="site-sub-nav-item-label">Customers</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    <Link to="company/careers" className="sub-nav-item-link" id="careers" reloadDocument><strong className="site-sub-nav-item-label">Careers</strong>
                                                                        <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                                    </Link>
                                                                    

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="site-menu-section" data-site-menu-section-index="5">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">

                                                            <Link to="kane-mani/the-origgin-vision" className="sub-nav-item-link" id="the-origgin-mission" reloadDocument><strong className="site-sub-nav-item-label">The Origgin Mission&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="kane-mani/the-origgin-masterplan" className="sub-nav-item-link" id="the-origgin-masterplan" reloadDocument><strong className="site-sub-nav-item-label">The Origgin Masterplan</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="kane-mani/a-$100-billion-company" className="sub-nav-item-link" id="a-100-billion-company" reloadDocument><strong className="site-sub-nav-item-label">A $100 Billion Company</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="site-menu-section" data-site-menu-section-index="6">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">

                                                            <Link to="resources/become-a-partner" className="sub-nav-item-link" id="the-origgin-mission" reloadDocument><strong className="site-sub-nav-item-label">Become a Partner&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="resources/support-center" className="sub-nav-item-link" id="the-origgin-masterplan" reloadDocument><strong className="site-sub-nav-item-label">Support Center</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="resources/customer-stories" className="sub-nav-item-link" id="a-100-billion-company" reloadDocument><strong className="site-sub-nav-item-label">Customer Stories</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="resources/blog" className="sub-nav-item-link" id="a-100-billion-company" reloadDocument><strong className="site-sub-nav-item-label">Blog</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ul>

                    <ul className="d-flex align-items-center header-nav-list auth-header-nav m-0 p-0">
                        <li className="header-nav-item auth-btn-container" data-nav-item-index="6" data-menu-section-width="220" data-menu-section-height="140">
                            <a href="javascript:void(0);"
                                 className={ "auth-btn position-relative " + 
                                 ( Boolean(homeRouteMatch) ? "" : "black" ) + 
                                 ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                                 ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) + 
                                 ( Boolean(customersRouteMatch) ? "white" : "" ) }>Sign Up 
                                <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h7"></path><path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg>
                            </a>
                        </li>
                        <li className="header-nav-item auth-btn-container"data-nav-item-index="7" data-menu-section-width="220" data-menu-section-height="140">
                            <a href="javascript:void(0);" className={ "auth-btn ml-3 login-btn " + 
                            ( Boolean(homeRouteMatch) ? "" : "black" ) + 
                            ( Boolean(supportRouteMatch) ? "white" : "" ) + 
                            ( Boolean(distributorDashboardRouteMatch) ? "white" : "" ) +
                            ( Boolean(customersRouteMatch) ? "white" : "" ) }>Log In <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h7"></path><path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                        </li> 
                        <div className="header-menu-container auth-dropdown">
                            <div className="site-header-arrow"></div>
                            <div className="site-menu site-header-menu" style={{ pointerEvents: 'auto' }} >
                            
                                <div className="site-menu-card">
                                    <div className="site-menu-section" data-site-menu-section-index="6">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">

                                                            <Link to="sign-up/individual" className="sub-nav-item-link" id="header-sign-up-btn-individual" reloadDocument><strong className="site-sub-nav-item-label">Individual&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <Link to="sign-up/business" className="sub-nav-item-link" id="header-sign-up-btn-business" reloadDocument><strong className="site-sub-nav-item-label">Business</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="site-menu-section" data-site-menu-section-index="7">
                                        <section className="h-100">
                                            <div className="site-menu-section-body">
                                                <div className="site-sub-menu has-no-nav">
                                                    
                                                    <div className="site-sub-menu-section-list">
                                                        
                                                        <div className="sub-menu-section-list-overlay"></div>
                                                        <div className="sub-section belongs-no-navs">

                                                            <Link to="login/individual" className="sub-nav-item-link" id="header-login-btn-individual" reloadDocument ><strong className="site-sub-nav-item-label">Individual&nbsp;</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </Link>
                                                            <a href="https://distributor.origgin.net" className="sub-nav-item-link" id="header-login-btn-individual"  target="_blank" ><strong className="site-sub-nav-item-label">Business</strong>
                                                                <svg className="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h6.5"></path><path className="HoverArrow__tipPath" d="M1 1.5l3.25 3.5-3.25 3.5"></path></g></svg>
                                                            </a>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>

                </div>

                
            </nav>

        </>
    );
}

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    showAuthDropDown (e) {

        var menuSection = $(`.site-menu-section[data-site-menu-section-index="${$(e.currentTarget).data().navItemIndex}"]`);

        var authDropdown = $('.header-menu-container.auth-dropdown').addClass('dropdown-active');

        authDropdown.find('.site-header-arrow').css('left', $(e.currentTarget)[0].offsetLeft + 56);

        authDropdown.find('.site-menu').css({'width': $(e.currentTarget).data().menuSectionWidth, 'height' : $(e.currentTarget).data().menuSectionHeight});
        authDropdown.find('.site-menu-section').removeClass('active');

        menuSection.addClass('active').prev().find('.sub-section.belongs-no-navs').css('transform', 'translateX(-100px)');
        menuSection.next().find('.sub-section.belongs-no-navs').css('transform', 'translateX(100px)');
        menuSection.find('.sub-section.belongs-no-navs').css('transform', 'translateX(0px)');

    }

    showNavDropDown (e) {

        $('body').addClass('header-dropdown-active');

        var menuSection = $(`.site-menu-section[data-site-menu-section-index="${$(e.currentTarget).data().navItemIndex}"]`);

        var navDropdown = $('.header-menu-container:not(.auth-dropdown)').addClass('dropdown-active');

        navDropdown.find('.site-header-arrow').css('left', $(e.currentTarget)[0].offsetLeft + 56);

        navDropdown.find('.site-menu').css({'width': $(e.currentTarget).data().menuSectionWidth, 'height' : $(e.currentTarget).data().menuSectionHeight});
        navDropdown.find('.site-menu-section').removeClass('active');

        menuSection.addClass('active').prev().find('.sub-section.belongs-no-navs').css('transform', 'translateX(-100px)');
        menuSection.next().find('.sub-section.belongs-no-navs').css('transform', 'translateX(100px)');
        menuSection.find('.sub-section.belongs-no-navs').css('transform', 'translateX(0px)');

    }

    hideNavDropDown () {

        var navDropdown = $('.header-menu-container:not(.auth-dropdown)').removeClass('dropdown-active');
        navDropdown.find('.site-header-arrow').css('opacity', 0);
        navDropdown.find('.site-menu-section').removeClass('active');

        setTimeout(function() {

            navDropdown.find('.site-header-arrow').css('opacity', 0);
            navDropdown.find('.site-header-arrow').css('transform', 'rotate(45deg) translateY(12px)');

        });

    }

    hideAuthDropDown () {

        var authDropdown = $('.header-menu-container.auth-dropdown').removeClass('dropdown-active');
        authDropdown.find('.site-header-arrow').css('opacity', 0);
        authDropdown.find('.site-menu-section').removeClass('active');

        setTimeout(function() {

            authDropdown.find('.site-header-arrow').css('opacity', 0);
            authDropdown.find('.site-header-arrow').css('transform', 'rotate(45deg) translateY(12px)');

        });

    }

    componentDidMount () {

        $('.site-sub-nav-item').on('mouseover', function() {

            var subNavIndex = $(this).data().subNavIndex;

            $('.sub-menu-nav-active').css('top', $(this)[0].offsetTop);
            $('.site-sub-menu-section-list > div').removeClass('active');
            $(`.sub-section[data-menu-section-list-index="${subNavIndex}"]`).addClass('active').prev().css('transform','translateY(-40px)').next().css('transform', 'translateY(40px)');

           
        });

        $('.header-nav-item:not(.has-no-dropdown)').on('mouseenter', (e) => {

            if($(e.currentTarget).hasClass('auth-btn-container')) {

                this.showAuthDropDown(e);

            }

            else {

                this.showNavDropDown(e);

            }
  
            

        });

        $('.header-nav-item.has-no-dropdown').on('mouseenter', () => {

            this.hideNavDropDown();

        });

        $('.header-nav .auth-header-nav ').on('mouseleave', () => {

            this.hideAuthDropDown();

        });

        $('.header-nav .main-header-nav ').on('mouseleave', () => {

            this.hideNavDropDown();

        });


    }

    render() {

        return(
            <header className="site-header position-absolute w-100 top-0">
                <div className="header-container">
                    <div className="d-flex nav-container w-100">
                        
                        <Navs />

                    </div>
                </div>
                
            </header>
        );

    }

}