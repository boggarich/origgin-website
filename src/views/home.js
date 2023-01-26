import React from "react";
import '../assets/sass/home.scss';
import { Link, NavLink, Outlet, useMatch } from 'react-router-dom';
import ipad from '../assets/img/ipad.png';
import white2 from '../assets/img/white 2.png';
import HomeScreenDashboardMockup from '../assets/img/HomeScreenDashboardMockup.png';
import HomeScreenMobileMockup from '../assets/img/HomeScreenMobileMockup.png';
import APIPng from '../assets/img/APIpng.png';
import CustomerService from '../assets/img/CustomerService.png';
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import AOS from 'aos';
import { reactSliderSettings, handleClose } from "./helpers/common-obj";
import { gradient } from '../assets/js/common';

function Section4 () {

    const homeRouteMatch = useMatch('/');
    const supportRouteMatch = useMatch('/support');
    const distributorDashboardRouteMatch = useMatch('/distributor-dashboard');

    return (
        <section className="section-4">

            <div>

                <div className="layout-width">

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="layout-img">

                                {
                                    Boolean(distributorDashboardRouteMatch) ?
                                    <img src={ white2 } alt="white 2"/> :
                                    ""
                                }
                                {
                                    Boolean(homeRouteMatch) ? 
                                    <img src={ APIPng } alt="white 2"/> : 
                                    ""
                                }
                                {
                                    Boolean(supportRouteMatch) ? 
                                    <img src={ CustomerService } alt="white 2"/> : 
                                    ""
                                }

                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h1 className="header-xxl no-uppercase">
                                API for Fintechs and Banks
                            </h1>
                            <div className="page-sub-nav">
                                <nav>
                                    <ul>
                                    
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={ ({ isActive }) => 
                                                
                                                
                                                (isActive ? "active" : undefined)
                                                
                                                }
                                                end
                                            >
                                                High Performance
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="distributor-dashboard"
                                                className={({ isActive }) =>
                                                isActive ? "active" : undefined
                                                }
                                            >
                                                Distributor Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="support"
                                                className={({ isActive }) =>
                                                isActive ? "active" : undefined
                                                }
                                            >
                                                24/7 Support
                                            </NavLink>
                                        </li>
                                        
                                    
                                    </ul>
                                </nav>
                                <div className="page-sub-nav-content">

                                    <Outlet/>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div>
                
                <div className="layout-width">
                    <section>

                        <div className="row">
                            <div className="col-lg-6">

                                <div className="sub-section">
                                    <h1 className="header-xxl no-uppercase">We are the Biggest Online Prepaid Vendor in Ghana</h1>
                                    <h4 className="sub-header">We are an accredited Electricity Prepaid Vendor by the Electricity Company of Ghana (ECG).</h4>
                                    
                                    <h4 className="sub-header sub">
                                        With efficient and highly secured technology, ability to pay digitally, reliable customer 
                                        service and multiple purchase channels, we enable tens of thousands of customers 
                                        conveniently buy electricity prepaid for their smart meters.
                                    </h4>
                                </div>
                                                                
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </section>
    );

}

export default class Home extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            modalOurMissionShow: true,
            modalBuyNowShow: false
        }

    }

    handleBuyNowModalShow = () => {

        this.setState({ modalBuyNowShow: true });
        
    }

    handleBuyNowModalClose = () => {

        this.setState({ modalBuyNowShow: false });
        
    }

    handleOurMissionModalClose = () => {

        this.setState({ modalOurMissionShow: false });

    }

    setPageHeroHeight() {

        var windowHeight = window.outerHeight;

        if(windowHeight <= 728) {

            $('.page-hero').addClass('page-728');

        }

        if(windowHeight >= 900) {

            $('.page-hero').addClass('page-900');

        }

    }

    componentDidMount() {

        gradient.initGradient("#gradient-canvas");

        AOS.init();

        $('body').addClass('modal-bg-blur');

    }

    render() {

        return (

            <div className="main-content home">

                <div className="page-container home">

                    <section className="section-1" data-aos="fade-up">

                        <div className="page-hero page-728" >
                            <div className="layout-width">

                                <div className="row">
                                    <div className="col-lg-8">
                                        <h1 className="page-hero-header">Prepaid <br></br>electricity <br></br><span className="flex-nowrap">for everyone</span></h1>
                                        <h4 className="text-lighter sub-header">
                                        Buy electricity prepaid anytime – From individuals to businesses - Use Origgin’s electricity prepaid technology to buy electricity for your smart meter and manage your smart meter usage anytime.
                                        </h4>
                                        <div className="row">
                                            <div className="col-lg-11">

                                                <div className="button-group btn-grid-2">
                                                    <a href="javascript:void(0);" className="btn btn-pill btn-pink small" onClick={this.handleBuyNowModalShow}>Buy now <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fillRule="evenodd"><path className="HoverArrow__linePath" d="M0 5h7"></path><path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="img-group position-relative">
                                            <img src={HomeScreenDashboardMockup} alt="ipad" id="layout-img-1"/>
                                            <img className="position-absolute" id="layout-img-2" src={HomeScreenMobileMockup} alt="annotation"/>

                                        </div>
                                    </div>
                                </div>

                                <div className="slider-container">
                                    
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="sub-header mb-3">CHANNELS</h4>
                                            <Slider {...reactSliderSettings}>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/zeepay logo.png"} alt="slider-img"/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/GTBank_logo.png"} alt="slider-img"  style={{ margin: '0 auto', position: 'relative', left: '-20%' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/Asset 2.png"} alt="slider-img" style={{ width: '100%', position: 'relative', left: '-6%'  }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/korba.png"} alt="slider-img" style={{ width: '55%', margin: '0 auto', position: 'relative', right: '-8%' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/G-MONEY-Logo.png"} alt="slider-img" style={{  margin: '0 auto' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/company-logos/interpay logo.png"} alt="slider-img" style={{ width: '55%' }}/>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <canvas id="gradient-canvas" className="home-page-hero-bg-4"></canvas>
                        </div>
                    </section>
                
                    <section className="why-prepaid" data-aos="fade-up">
                        <div className="layout-width">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1 className="sub-header">Why eprepaid?</h1>

                                        <h4 className="header-xl">
                                            A technology-first approach to electricity vending
                                        </h4> 
                                        <br></br>
                                        
                                        <p className="mb-0">

                                        Eprepaid provides customers the convenience to buy electricity prepaid credit for their smart meters anytime, anywhere.
                                        </p>
                                        <br></br>

                                    <ul>
                                        <li>
                                            <p>Mobile App, Web App and USSD for Consumers.</p>
                                        </li>
                                        <li>
                                            <p>API for Fintechs and Banks as Channels for Consumers.</p>
                                        </li>
                                        <li>
                                            <p>Consumer and Channel Dashboard for Transactions.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <div className="layout-img">

                                        <div className="grid-4">
                                            <div id="square-1">
                                                <h4>1.7K</h4>
                                                <p>Downloads</p>
                                            </div>
                                            <div id="square-2">
                                                <h4>3%</h4>
                                                <p>Visitors</p>
                                            </div>
                                            <div id="square-3">
                                                <h4>35+</h4>
                                                <p>Visitors</p>
                                            </div>
                                            <div id="square-4">
                                                <h4>135+</h4>
                                                <p>Visitors</p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-3" data-aos="fade-up">
                        <div className="section-bg">
                          
                            <canvas id="gradient-canvas-2" className="home-page-hero-bg-4"></canvas>
                            
                        </div>
                        <div className="layout-width">
                            <div className="row">
                                
                                <div className="col-lg-12">
                                    <h1 className="header-xxl no-uppercase text-center">
                                        Our fully integrated suites of electricity prepaid products.
                                    </h1>
                                    <h4 className="sub-header text-lighter text-center">
                                        We bring together everything that is required to make your prepaid buying
                                        experience easy and convenient. From 
                                        individuals, businessses and organizations, our suite of 
                                        electricity prepaid prducts power your daily electricity 
                                        prepaid use
                                    </h4>
                                    <div className="graphic-wall">
                                        <div className="top-left">
                                            <img src={ process.env.PUBLIC_URL + "/img/Voucher.png" } alt="voucher"/>
                                        </div>
                                        <div className="top-center">
                                            <img src={ process.env.PUBLIC_URL + "/img/DigitalInvoice.png" } alt="digital invoice"/>
                                        </div>
                                        <div className="top-right">
                                            <img src={ process.env.PUBLIC_URL + "/img/Remote.png" } alt="Remote"/>
                                        </div>
                                        <div className="bottom-left">
                                            <img src={ process.env.PUBLIC_URL + "/img/PhonewithQRcode.png" } alt="Phone"/>
                                        </div>
                                        <div className="bottom-right">
                                            <img src={ HomeScreenDashboardMockup } alt="dashboard"/>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <Section4 />

                    <section className="section-5">
                        <div className="layout-width">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-11">

                                                
                                            <h1 className="header-xxl no-uppercase w-85">
                                                Available for your Smartphones, Web and USSD
                                            </h1>
                                            <h4 className="sub-header text-lighter">
                                            Customers can dial *441# or download the E-Prepaid Mobile App for their 
                                            smartphones via Android and IOS or use our Web Platform to buy prepaid.
                                            </h4>

                                        
                                            <div className="button-group w-auto">
                                                <Link to="/app-store" className="app-store">
                                                    <img src={ process.env.PUBLIC_URL + "img/app-store.svg" } alt="app-store"/>
                                                </Link>
                                                <a href="https://play.google.com/store/apps/details?id=com.e_prepaid.android" target="_blank" className="google-play ml-0">
                                                    <img src={ process.env.PUBLIC_URL + "img/google-play.png" } alt="app-store"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-4">
                                    <div className="layout-img">

                                        <img src={HomeScreenMobileMockup} alt="white 2"/>

                                    </div>
                                </div>
                            </div>
                        </div>   
                    </section>

                    <Modal
                        show={this.state.modalOurMissionShow}
                        onHide={this.handleOurMissionModalClose}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="our-mission-modal"
                        dialogClassName="our-mission-modal-dialog"
                        >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal-content-container">
                                    <h1 className="">Our mission is to accelerate the transition of 
                                        Africa to a technology-first Continent.
                                    </h1>
                                    <p className="">To know more about our mission, <Link to="kane-mani/the-origgin-vision" reloadDocument>click here.</Link></p>
                                </div>
                            </Modal.Body>
                    </Modal>

                    <Modal
                        show={this.state.modalBuyNowShow}
                        onHide={this.handleBuyNowModalClose}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="modal-buy-now"
                        dialogClassName="modal-buy-now-dialog"
                    >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modal-content-container">
                                    <div className="button-group w-auto d-flex flex-column">
                                        {/* <h4 className="sub-header text-uppercase">Click</h4> */}
                                        <a href="https://play.google.com/store/apps/details?id=com.e_prepaid.android" target="_blank" className="google-play ml-0">
                                            <img src={ process.env.PUBLIC_URL + "img/google-play.png" } alt="app-store" style={{ height: '101px' }}/>
                                        </a>
                                        <Link to="/app-store" className="app-store ml-0">
                                            <img src={ process.env.PUBLIC_URL + "img/app-store.svg" } alt="app-store" style={{ height: '75px' }} />
                                        </Link>
                                    </div>
                                </div>
                            </Modal.Body>
                    </Modal>
                    
                </div>
            </div>

        );

    }

}