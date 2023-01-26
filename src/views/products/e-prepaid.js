import React from "react";
import { Link } from 'react-router-dom';
import HomeScreenDashboardMockup from '../../assets/img/HomeScreenDashboardMockup.png';
import HomeScreenMobileMockup from '../../assets/img/HomeScreenMobileMockup.png';
import '../../assets/sass/e-prepaid.scss';
import '../../assets/sass/home.scss';
import AOS from 'aos';
import Slider from "react-slick";
import { reactSliderSettings } from "../helpers/common-obj";
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';

export default class EPrepaid extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            modalBuyNowShow: false
        }

    }

    handleBuyNowModalShow = () => {

        this.setState({ modalBuyNowShow: true });
        
    }

    handleBuyNowModalClose = () => {

        this.setState({ modalBuyNowShow: false });
        
    }

    componentDidMount() {

        AOS.init();

        $('body').addClass('e-prepaid');

    }

    render() {

        return (

            <>
                <div className="main-content">
                    <div className="page-container e-prepaid">

                        <section data-aos="fade-up">
                            <div className="page-hero page-728">
                                <div className="layout-width">

                                    <div className="grid-2">
                                        <div className="">
                                            <h1 className="page-hero-header">A complete electricity prepaid platform, engineered for convenience</h1>
                                            <h4 className="text-lighter sub-header">
                                                Purchase prepaid and live in convenience globally with Stripe's powerful 
                                                APIs and software solutions designed to help you capture more revenue.
                                            </h4>
                                            <div className="row">
                                                <div className="col-lg-11">

                                                    <div className="button-group btn-grid-2">
                                                        <a href="javascript:void(0);" className="btn btn-pill btn-pink small fit-content" onClick={this.handleBuyNowModalShow}>Buy now <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="">
                                            <div className="img-group position-relative">
                                                <img src={ HomeScreenDashboardMockup } alt="ipad" id="layout-img-1"/>
                                                <img className="position-absolute" id="layout-img-2" src={ HomeScreenMobileMockup } alt="annotation"/>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="page-hero-bg"></div>
                            </div>
                        </section>

                        <section className="section-1" data-aos="fade-up">
                            <div className="layout-width">
                                <div className="grid-4">
                                    <div>
                                        <h6 className="header-sm">Prepaid for Everyone</h6>
                                        <p>We provide prepaid purchase and distribution services for everyone, in all industries 
                                            and walks of life. We serve individuals and organizations in homes, offices, and 
                                            anywhere prepaid may be needed
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="header-sm">
                                            Get your lights in minutes
                                        </h6>
                                        <p>
                                            With E-prepaid, your prepaid is loaded in 
                                            record time. We provide lightning fast 
                                            services, ensuring that your, home, office 
                                            and business is powered up in no time.
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="header-sm">
                                            Zero Convenience Fees
                                        </h6>
                                        <p>
                                            To make our services accessible to all 
                                            people, we have some of the lowest convenience fees in the industry. 
                                            Buy prepaid with us and enjoy very affordable 
                                            fees that make buying prepaid a great experience.
                                        </p>
                                    </div>
                                    <div>
                                        <h6 className="header-sm">
                                            Multiple ways to use prepaid
                                        </h6>
                                        <p>
                                            We provide top notch assistance to our 
                                            clients, ensuring that your prepaid is used 
                                            efficiently and effectively in every way possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-2" data-aos="fade-up">
                            <div className="layout-width">
                                <h4 className="header text-center">channels</h4>
                                <div className="slider-container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Slider {...reactSliderSettings}>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/zeepay logo.png"} alt="slider-img"/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/GTBank_logo.png"} alt="slider-img"  style={{ margin: '0 auto', position: 'relative', left: '-20%' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/Asset 2.png"} alt="slider-img" style={{ width: '100%', position: 'relative', left: '-6%'  }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/korba.png"} alt="slider-img" style={{ width: '55%', margin: '0 auto', position: 'relative', right: '-8%' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/G-MONEY-Logo.png"} alt="slider-img" style={{  margin: '0 auto' }}/>
                                                </div>
                                                <div className="slider-content-container">
                                                    <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/company-logos/interpay logo.png"} alt="slider-img" style={{ width: '55%' }}/>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section className="section-3" data-aos="fade-up">

                            <div className="layout-width">

                                <h2 className="header-lg text-pink main-header">Pick the right channel for you</h2>

                                <div className="grid-2x2">
                                    <div>
                                        <h3 className="header-md">Eprepaid</h3>
                                        <h4 className="sub-header">
                                            Start distributing prepaid with us today. We provide services that make it 
                                            easy for you to integrate with our system and start vending with us. We 
                                            ensure that all our clients get the best services.
                                        </h4>
                                        <h3 className="header-md">Fintechs</h3>
                                        <h4 className="sub-header">
                                            We help you to seamlessly connect any platform at your disposal to our 
                                            systems, making it easy for you to buy prepaid for your home, 
                                            office or business.
                                        </h4>
                                        <h3 className="header-md">Banks</h3>
                                        <h4 className="sub-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed 
                                            bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra 
                                            odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit
                                        </h4>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow" data-aos="fade-up">

                                        </div>
                                        <div className="img-container-shadow" data-aos="fade-up">

                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="header-md text-pink">Buy from Anywhere</h3>
                                        <h2 className="header-lg">Convenience from day one</h2>
                                        <h4 className="sub-header">
                                            We have very fluid systems that makes it easy for our clients to use all 
                                            our services. We prioritize convenience always, and we endeavour to ensure 
                                            that you have a great experience while using our services. No matter your 
                                            needs as a client, or your demand as a vender, you can rest assured that with 
                                            our systems, you would be able to carry out all transactions conveniently.
                                        </h4>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <section className="section-4" data-aos="fade-up">
                            <div className="layout-width">
                                <h6 className="header-sm text-pink">
                                    Purchase methods
                                </h6>
                                <div className="grid-2">
                                    <div>
                                        <h6 className="header-sm">Prepaid Normal</h6>
                                        <h6 className="sub-header">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit.
                                        </h6>
                                        <h6 className="header-sm">Prepaid Xtra</h6>
                                        <h6 className="sub-header">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit.
                                        </h6>
                                        <h6 className="header-sm">Prepaid Jumbo</h6>
                                        <h6 className="sub-header">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit.
                                        </h6>
                                        <h6 className="header-sm">Prepaid Cards</h6>
                                        <h6 className="sub-header">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit.
                                        </h6>
                                        <h6 className="header-sm">Prepaid Box</h6>
                                        <h6 className="sub-header">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit.
                                        </h6>
                                    </div>
                                    <div>
                                        <div className="img-container-shadow"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="rectangular-gradient-bg"></div>
                        </section>

                        <section className="section-5" data-aos="fade-up">
                            <div className="layout-width">
                                
                                <h2 className="header-lg">E-Prepaid Operational Stack</h2>
                                <h4 className="sub-header">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etia
                                </h4>
                              
                                <div className="grid-5">
                                    <div>
                                        <div className="rectangular-pill bg-pink">Channel</div>
                                        <p>Eprepaid</p>
                                        <p>Banks</p>
                                        <p>Fintechs</p>
                                    </div>
                                    <div>
                                    <div className="rectangular-pill bg-blue">Payment</div>
                                        <p>Mobile money</p>
                                        <p>Debit cards</p>
                                        <p>Voucher cards</p>
                                        <p>Cash</p>
                                    </div>
                                    <div>
                                    <div className="rectangular-pill bg-pink">Origgin</div>
                                        <p>Accra</p>
                                        <p>Kumasi</p>
                                        <p>Takoradi</p>
                                    </div>
                                    <div>
                                    <div className="rectangular-pill bg-blue">ECG</div>
                                        <p>Nuri</p>
                                        <p>Liberty</p>
                                        <p>IMES</p>
                                    </div>
                                    <div>
                                        <div className="rectangular-pill bg-pink">Meters</div>
                                        <p>Kamstrap</p>
                                        <p>Alpha</p>
                                        <p>IMES</p>
                                        <p>Clou</p>
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section className="section-6" data-aos="fade-up">
                            <div className="layout-width">
                                <h2 className="header-lg">Origgin the leader in electricity prepaid services in Ghana</h2>

                                <div className="grid-3">
                                    <h4 className="sub-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed 
                                    bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra 
                                    odio. In hac habitasse platea dictumst. Etia</h4>
                                </div>

                                <div className="blue-gradient-bg" data-aos="fade-up">
                                    <div className="grid-2">
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit. Proin 
                                                sed bibendum nisi, quis mollis neque. Nullam vitae molestie 
                                                eros, ac viverra odio. In hac habitasse platea dictumst. Etiam 
                                                aliquest vitae elit ut maximus. Maecenas mattis lectus id leo 
                                                vulputate vehicula. Pellentesque in vulputate tortor. Praesent 
                                                pretium neque quis tortor viverra, ut sollicitudin mi dignissim.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                               
                            </div>
                        </section>

                        <section className="section-7" data-aos="fade-up">
                            <div className="layout-width">
                                <h2 className="header-lg">
                                    Ready to get Started?
                                </h2>
                                <h2 className="header-lg">
                                    Get in touch or create an account.
                                </h2>
                                
                                <h4 className="sub-header">
                                    Create an account and start accepting payments - no contracts or 
                                    banking details required. Or, contact us to design a custom package for 
                                    your business.
                                </h4>
                                <Link to="/sign-up/individual" className="btn btn-pill btn-pink large fit-content">Start now <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></Link>

                            </div>
                        </section>

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
                                            <img src={ process.env.PUBLIC_URL + "/img/google-play.png" } alt="app-store" style={{ height: '101px' }}/>
                                        </a>
                                        <Link to="/app-store" className="app-store ml-0">
                                            <img src={ process.env.PUBLIC_URL + "/img/app-store.svg" } alt="app-store" style={{ height: '75px' }} />
                                        </Link>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>


                    </div>
                </div>
            </>

        );

    }

}