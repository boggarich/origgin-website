import React, { useEffect, useState } from "react";
import footerPageLogo from '../assets/img/ORRIGGIN-logotypeFooter.png';
import '../assets/sass/footer.scss';
import { Link, useMatch } from 'react-router-dom';
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';

export default function Footer() {

    const supportCenter = useMatch("resources/support-center")
    // google translate element
    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        )
        
    }

    const [ modalPrivacyPolicyShow, setModalPrivacyPolicyShow ] = useState(false);
    const [ modalCookiePolicyShow, setModalCookiePolicyShow ] = useState(false);

    const handleCookiePolicyModalClose = () => {

        setModalCookiePolicyShow(false);
        
    }

    const handleCookiePolicyModalShow = () => {

        setModalCookiePolicyShow(true);

    }

    const handlePrivacyPolicyModalShow = () => {

        setModalPrivacyPolicyShow(true);

    }

    const handlePrivacyPolicyModalClose = () => {

        setModalPrivacyPolicyShow(false);
        
    }


    useEffect(() => {

            var addScript = document.createElement("script");

            addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            );

            document.body.appendChild(addScript);

            window.googleTranslateElementInit = googleTranslateElementInit;

            $(document).ready(function(){ 

                $('.skiptranslate').text('');

            }); 
        

            // console.log($('.skiptranslate'));

    }, []);

    return (

        <footer className={ (Boolean(supportCenter)) ? "isHidden" : "" }>
            
            <div className="footer-container">
                <div className="footer-background">
                    <div className="ellipse-1"></div>
                    <div className="ellipse-2"></div>
                    <div className="ellipse-3"></div>
                    <div className="ellipse-4"></div>
                    <div className="ellipse-5"></div>
                    <div className="ellipse-6"></div>
                    <div className="ellipse-7"></div>
                    <div className="ellipse-8"></div>
                    <div className="ellipse-9"></div>
                    <div className="glass-effect"></div>
                </div>
                <div className="layout-width">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            
                            <div className="footer-content">

                                <section className="social-media-handle-container">
                                    <img className="page-logo" src={footerPageLogo} alt="page-logo"/>

                                    <div>
                                        <p>Origgin Ltd</p>
                                        <p>11 Afram Link, <br></br>Asylum Down, Accra. <br></br> Ghana, West Africa. </p>

                                        <div className="social-media-handles mb-3">
                                            <a href="https://www.facebook.com/OrigginLtd" target="_blank"><img src={ process.env.PUBLIC_URL + "/img/logos/facebook.png" } alt="facebook"/></a>
                                            <a href="https://twitter.com/Origgin_" target="_blank"><img src={ process.env.PUBLIC_URL + "/img/logos/twitter.png"  } alt="twitter"/></a>
                                            <a href="https://www.linkedin.com/company/10888333/admin/" target="_blank"><img src={ process.env.PUBLIC_URL + "/img/logos/linkedin.png"  } alt="linkedIn"/></a>
                                        </div>

                                        <div className="row mb-3 mt-5">
                                            <label className="col col-form-label f-14">Language</label>
                                            
                                            <div className="col-sm-10">

                                            {/* <div class="gtranslate_wrapper"></div> */}
                                            
                                            <div id="google_translate_element"></div>
                                            
                                            </div>

                                        </div>

                                        <p className="pt-5 company-name">© { new Date().getFullYear() } Origgin Ltd. </p>
                                        <p className="privacy-policy"><a href="javascript:void(0);" onClick={handlePrivacyPolicyModalShow} >Privacy Policy</a> | <a href="javascript:void(0);" onClick={handleCookiePolicyModalShow}>Cookie Policy</a></p>

                                    </div>
                                </section>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">

                                <section>
                                    <h5>Products</h5>
                                    <h6>Energy</h6>
                                    <ul>
                                        <li><Link to="products/energy/e-prepaid" reloadDocument><p>E-Prepaid</p></Link></li>
                                        <li><Link to="products/energy/smarthome" reloadDocument><p>SmartHome</p></Link></li>
                                        <li><Link to="products/energy/easysolar" reloadDocument><p>EasySolar</p></Link></li>
                                    </ul>
                                </section>

                                <section>
                                    <h6>Consumer Internet</h6>
                                    <ul>
                                        <li><Link to="products/consumer-internet/waakye-locator" reloadDocument><p>Waakye Locator</p></Link></li>
                                        <li><Link to="products/consumer-internet/Printablly" reloadDocument><p>Printablly</p></Link></li>
                                    </ul>
                                </section>

                                <section>
                                    <h6>Cloud Services</h6>
                                    <ul>
                                        <li><Link to="products/cloud-services/rope" reloadDocument><p>Rope CRM</p></Link></li>
                                        <li><Link to="products/cloud-services/rope" reloadDocument><p>Rope POS</p></Link></li>
                                        <li><Link to="products/cloud-services/rope" reloadDocument><p>Rope ERP</p></Link></li>
                                    </ul>
                                </section>

                                <section>
                                    <h6>Tech Education</h6>
                                    <ul>
                                        <li><Link to="products/tech-education" reloadDocument><p>A Day in Tech</p></Link></li>
                                        <li><Link to="products/tech-education" reloadDocument><p>Kane Mani Tech Tour</p></Link></li>
                                        <li><Link to="products/tech-education" reloadDocument><p>CodeBus</p></Link></li>
                                    </ul>
                                </section>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">

                                <section>
                                    <h6>Solutions</h6>
                                    <ul>
                                        <li><Link to="solutions" reloadDocument><p>Education</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Government</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Financial Services</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Healthcare</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Agriculture</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Hospitality</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Legal</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Manufacturing</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Media</p></Link></li>
                                        <li><Link to="solutions" reloadDocument><p>Logistics</p></Link></li>
                                    </ul>
                                </section>

                                <section>
                                    <h6>Corporate</h6>
                                    <ul>
                                        <li><Link to="company/about-us" reloadDocument><p>About</p></Link></li>
                                        <li><Link to="company/history" reloadDocument><p>History</p></Link></li>
                                        <li><Link to="company/team" reloadDocument><p>Executive Team</p></Link></li>
                                        <li><Link to="company/board-of-directors" reloadDocument><p>Board of Directors</p></Link></li>
                                        <li><Link to="company/partners" reloadDocument><p>Partners</p></Link></li>
                                        <li><Link to="company/customers" reloadDocument><p>Customers</p></Link></li>
                                        <li><Link to="company/careers" reloadDocument><p>Careers</p></Link></li>
                                    </ul>
                                </section>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-content">

                                <section>
                                    
                                    <h6>Resources</h6>
                                    <ul>
                                        <li><Link to="resources/become-a-partner" reloadDocument><p>Become a Partner</p></Link></li>
                                        <li><Link to="resources/support-center" reloadDocument><p>Support Center</p></Link></li>
                                        <li><Link to="resources/customer-stories" reloadDocument><p>Customer Stories</p></Link></li>
                                        <li><Link to="resources/blog" reloadDocument><p>Blog</p></Link></li>
                                    </ul>

                                </section>

                                <section>
                                    
                                    <h6>Kane Mani</h6>
                                    <ul>
                                        <li><Link to="kane-mani/the-origgin-vision" reloadDocument><p>The Origgin Vision</p></Link></li>
                                        <li><Link to="kane-mani/the-origgin-masterplan" reloadDocument><p>The Origgin Masterplan</p></Link></li>
                                        <li><Link to="kane-mani/a-$100-billion-company" reloadDocument><p>A $100 Billion Company</p></Link></li>
                                    </ul>
                                </section>

                                <section>
                                    
                                    <ul>
                                        <li><Link to="contact" reloadDocument><h6>Contact</h6></Link></li>
                                    </ul>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={modalPrivacyPolicyShow}
                onHide={handlePrivacyPolicyModalClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                className="privacy-policy-modal"
                dialogClassName="privacy-policy-modal-dialog"
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-content-container">
                           
                        </div>
                    </Modal.Body>
            </Modal>

            <Modal
                show={modalCookiePolicyShow}
                onHide={handleCookiePolicyModalClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                className="cookie-policy-modal"
                dialogClassName="cookie-policy-modal-dialog"
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-content-container">
                            
                        </div>
                    </Modal.Body>
            </Modal>

        </footer>
        
    );

}
// 

