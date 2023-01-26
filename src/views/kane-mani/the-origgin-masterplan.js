import React from "react";
import "../../assets/sass/the-origgin-vision.scss";
import AOS from 'aos';
import Modal from 'react-bootstrap/Modal';
import { handleClose } from "../helpers/common-obj";
import $ from 'jquery';

export default class TheOriginMasterPlan extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            modalShow: false
        }

    }

    componentDidMount() {

        AOS.init();

        $('.pillar-link').on('click', () => {

            this.setState({ modalShow: true });

        });

    }

    render() {

        return (
            <>

                <div className="main-content header-white-bg"> 
                    <div className="page-container the-origgin-vision">

                        <section className="page-hero" data-aos="fade-up">
                            <div className="layout-width">
                                <h1 className="page-hero-header">
                                    THE ORIGGIN MISSION
                                </h1>
                                <h3 className="sub-header">
                                    Our mission is to accelerate the transition of Africa to a technology - first continent.
                                </h3>
                            </div>
                        </section>

                        <section className="section-1" data-aos="fade-up">
                            <div className="grid-2">
                                <div>
                                    <h1 className="header-lg">Why this mission?</h1>

                                    <div>
                                        <h3 className="sub-header">The 4 Pillars of our mission</h3>
                                        <ul>
                                            <li><a href="javascript:void(0);" className="pillar-link">People</a></li>
                                            <li><a href="javascript:void(0);" className="pillar-link">Infrastructure</a></li>
                                            <li><a href="javascript:void(0);" className="pillar-link">Products</a></li>
                                            <li><a href="javascript:void(0);" className="pillar-link">Skills</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <img src={ process.env.PUBLIC_URL + "/img/WhatsApp Image 2022-08-05 at 11.18.19 AM.png" } alt="human"/>
                                </div>
                            </div>
                        </section>

                        <section className="section-2" data-aos="fade-up">
                            <div className="layout-width">
                                <h1 className="header-lg">The Origgin Masterplan</h1>
                                <h3 className="sub-header">ONE IN ALL</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellentesque in vulputate tortor. Praesent pretium neque quis tortor viverra, ut sollicitudin mi dignissim. Fusce vitae ligula vitae sapien pellentesque commodo sit amet sed nisl. Proin eleifend mauris ac nibh aliquet pellentesque. Quisque vehicula nulla vitae velit congue pulvinar. Etiam lobortis facilisis libero, a scelerisque lectus faucibus et. Nullam congue lectus nibh, ornare ultricies lacus molestie et. Suspendisse potenti. Donec finibus auctor sem, ac tempus erat tristique id.
                                </p>
                            </div>
                        </section>

                        <section className="section-3" data-aos="fade-up">
                            <div className="layout-width">
                                <h3 className="sub-header">TECHNOLOGY + PEOPLE + SOCIETY</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellentesque in vulputate tortor. Praesent pretium neque quis tortor viverra, ut sollicitudin mi dignissim. Fusce vitae ligula vitae sapien pellentesque commodo sit amet sed nisl. Proin eleifend mauris ac nibh aliquet pellentesque. Quisque vehicula nulla vitae velit congue pulvinar. Etiam lobortis facilisis libero, a scelerisque lectus faucibus et. Nullam congue lectus nibh, ornare ultricies lacus molestie et. Suspendisse potenti. Donec finibus auctor sem, ac tempus erat tristique id.
                                </p>
                            </div>
                        </section>
            
                        <section className="section-4" data-aos="fade-up">
                            <div className="layout-width">
                                <h3 className="sub-header text-pink text-center">Our Commitments</h3>
                                <div className="grid-3">
                                    <div>

                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_381_670)">
                                            <path d="M32.5 7.5C20.075 7.5 10 17.575 10 30H2.5L12.225 39.725L12.4 40.075L22.5 30H15C15 20.325 22.825 12.5 32.5 12.5C42.175 12.5 50 20.325 50 30C50 39.675 42.175 47.5 32.5 47.5C27.675 47.5 23.3 45.525 20.15 42.35L16.6 45.9C20.675 49.975 26.275 52.5 32.5 52.5C44.925 52.5 55 42.425 55 30C55 17.575 44.925 7.5 32.5 7.5ZM30 20V32.5L40.625 38.8L42.55 35.6L33.75 30.375V20H30Z" fill="#323232"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_381_670">
                                            <rect width="60" height="60" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>

                                        <h2 className="header-md">Transitioning Africa</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                    </div>
                                    <div>

                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.8984 29.05C22.8234 29.05 22.7734 29.05 22.6984 29.05C22.5734 29.025 22.3984 29.025 22.2484 29.05C14.9984 28.825 9.52344 23.125 9.52344 16.1C9.52344 8.95 15.3484 3.125 22.4984 3.125C29.6484 3.125 35.4734 8.95 35.4734 16.1C35.4484 23.125 29.9484 28.825 22.9734 29.05C22.9484 29.05 22.9234 29.05 22.8984 29.05ZM22.4984 6.875C17.4234 6.875 13.2734 11.025 13.2734 16.1C13.2734 21.1 17.1734 25.125 22.1484 25.3C22.2984 25.275 22.6234 25.275 22.9484 25.3C27.8484 25.075 31.6984 21.05 31.7234 16.1C31.7234 11.025 27.5734 6.875 22.4984 6.875Z" fill="#292D32"/>
                                            <path d="M41.348 29.375C41.273 29.375 41.198 29.375 41.123 29.35C40.098 29.45 39.048 28.725 38.948 27.7C38.848 26.675 39.473 25.75 40.498 25.625C40.798 25.6 41.123 25.6 41.398 25.6C45.048 25.4 47.898 22.4 47.898 18.725C47.898 14.925 44.823 11.85 41.023 11.85C39.998 11.875 39.148 11.025 39.148 10C39.148 8.975 39.998 8.125 41.023 8.125C46.873 8.125 51.648 12.9 51.648 18.75C51.648 24.5 47.148 29.15 41.423 29.375C41.398 29.375 41.373 29.375 41.348 29.375Z" fill="#292D32"/>
                                            <path d="M22.925 56.375C18.025 56.375 13.1 55.125 9.375 52.625C5.9 50.325 4 47.175 4 43.75C4 40.325 5.9 37.15 9.375 34.825C16.875 29.85 29.025 29.85 36.475 34.825C39.925 37.125 41.85 40.275 41.85 43.7C41.85 47.125 39.95 50.3 36.475 52.625C32.725 55.125 27.825 56.375 22.925 56.375ZM11.45 37.975C9.05 39.575 7.75 41.625 7.75 43.775C7.75 45.9 9.075 47.95 11.45 49.525C17.675 53.7 28.175 53.7 34.4 49.525C36.8 47.925 38.1 45.875 38.1 43.725C38.1 41.6 36.775 39.55 34.4 37.975C28.175 33.825 17.675 33.825 11.45 37.975Z" fill="#292D32"/>
                                            <path d="M45.8494 51.875C44.9744 51.875 44.1994 51.275 44.0244 50.375C43.8244 49.35 44.4744 48.375 45.4744 48.15C47.0494 47.825 48.4994 47.2 49.6244 46.325C51.0494 45.25 51.8244 43.9 51.8244 42.475C51.8244 41.05 51.0494 39.7 49.6494 38.65C48.5494 37.8 47.1744 37.2 45.5494 36.825C44.5494 36.6 43.8994 35.6 44.1244 34.575C44.3494 33.575 45.3494 32.925 46.3744 33.15C48.5244 33.625 50.3994 34.475 51.9244 35.65C54.2494 37.4 55.5744 39.875 55.5744 42.475C55.5744 45.075 54.2244 47.55 51.8994 49.325C50.3494 50.525 48.3994 51.4 46.2494 51.825C46.0994 51.875 45.9744 51.875 45.8494 51.875Z" fill="#292D32"/>
                                        </svg>

                                        <h2 className="header-md">Dominating the World</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                    <div>
    
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 56.9C27.275 56.9 24.575 56.1 22.45 54.525L11.7 46.5C8.85 44.375 6.625 39.95 6.625 36.4V17.825C6.625 13.975 9.45004 9.87499 13.075 8.52499L25.55 3.85C28.025 2.925 31.925 2.925 34.4 3.85L46.9 8.52499C50.525 9.87499 53.35 13.975 53.35 17.825V36.4C53.35 39.95 51.125 44.375 48.275 46.5L37.525 54.525C35.425 56.1 32.725 56.9 30 56.9ZM26.875 7.34998L14.4 12.025C12.25 12.825 10.375 15.525 10.375 17.825V36.4C10.375 38.775 12.05 42.1 13.925 43.5L24.675 51.5249C27.55 53.6749 32.425 53.6749 35.3 51.5249L46.05 43.5C47.95 42.075 49.6 38.75 49.6 36.4V17.825C49.6 15.55 47.725 12.85 45.575 12.025L33.1 7.34998C31.45 6.72498 28.55 6.72498 26.875 7.34998Z" fill="#292D32"/>
                                        <path d="M30.0007 29.1749C29.9507 29.1749 29.9007 29.1749 29.8257 29.1749C26.2007 29.0749 23.5508 26.2999 23.5508 22.9249C23.5508 19.4749 26.3757 16.6499 29.8257 16.6499C33.2757 16.6499 36.1008 19.4749 36.1008 22.9249C36.0758 26.3249 33.4257 29.0749 30.0507 29.1999C30.0257 29.1749 30.0257 29.1749 30.0007 29.1749ZM29.8257 20.3999C28.4257 20.3999 27.3008 21.5249 27.3008 22.9249C27.3008 24.2999 28.3758 25.3999 29.7258 25.4499C29.7258 25.4499 29.8507 25.4499 30.0007 25.4499C31.3257 25.3749 32.3508 24.2749 32.3508 22.9249C32.3758 21.5249 31.2257 20.3999 29.8257 20.3999Z" fill="#292D32"/>
                                        <path d="M30 43.3749C27.85 43.3749 25.675 42.7999 24 41.6749C22.325 40.5749 21.375 38.9499 21.375 37.2249C21.375 35.4999 22.325 33.8749 24 32.7499C27.375 30.4999 32.65 30.5249 36 32.7499C37.675 33.8499 38.6251 35.4749 38.6251 37.1999C38.6251 38.9249 37.675 40.5499 36 41.6749C34.325 42.7999 32.15 43.3749 30 43.3749ZM26.075 35.8499C25.45 36.2499 25.1 36.7499 25.125 37.1999C25.125 37.6499 25.475 38.1499 26.075 38.5499C28.175 39.9499 31.825 39.9499 33.925 38.5499C34.55 38.1499 34.9 37.6499 34.9 37.1999C34.9 36.7499 34.55 36.2499 33.95 35.8499C31.85 34.4749 28.175 34.4749 26.075 35.8499Z" fill="#292D32"/>
                                        </svg>

                                        <h2 className="header-md">Inventing the Future</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>    
                </div>
                
                <Modal
                    show={this.state.modalShow}
                    onHide={() => handleClose(this)}
                    size="lg"
                    aria-labelledby="contained-modal-title-center"
                    centered
                    className="the-origgin-vision-modal"
                    dialogClassName="the-origgin-vision-modal-dialog"
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-content-container">
                                
                                    <div className="grid-2">

                                        <div></div>
                                        <div>
                                            <h2 className="header-sm">People</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habitasse platea dictumst. Etiam aliquet vitae elit ut maximus. Maecenas mattis lectus id leo vulputate vehicula. Pellentesque in vulputate tortor. Praesent pretium neque quis tortor viverra, ut sollicitudin mi dignissim. Fusce vitae ligula vitae sapien pellentesque commodo sit amet sed nisl. Proin eleifend mauris ac nibh aliquet pellentesque. Quisque vehicula nulla vitae velit congue pulvinar. Etiam lobortis facilisis libero, a scelerisque lectus faucibus et. Nullam congue lectus nibh, ornare ultricies lacus molestie et. Suspendisse potenti. Donec finibus auctor sem, ac tempus erat tristique id.
                                            </p>
                                        </div>

                                    </div>
                                        
                            </div>
                        </Modal.Body>
                </Modal>

            </>
        );

    }

}