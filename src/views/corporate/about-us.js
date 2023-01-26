import React from "react";
import '../../assets/sass/about-us.scss';
import AOS from 'aos';
import Slider from "react-slick";

function NextArrow(props) {

    const { className, style, onClick } = props;

    return (
        <div 
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_381_662)">
                <path d="M16.2266 50.325L20.6516 54.75L45.4016 30L20.6516 5.25L16.2266 9.675L36.5516 30L16.2266 50.325Z" fill="white" fillOpacity="0.7"/>
                </g>
                <defs>
                <clipPath id="clip0_381_662">
                <rect width="60" height="60" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );

}

function PrevArrow(props) {

    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_381_659)">
                <path d="M43.7766 9.675L39.3266 5.25L14.6016 30L39.3516 54.75L43.7766 50.325L23.4516 30L43.7766 9.675Z" fill="white" fillOpacity="0.7"/>
                </g>
                <defs>
                <clipPath id="clip0_381_659">
                <rect width="60" height="60" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );

}

export default class AboutUs extends React.Component {

    componentDidMount() {

        AOS.init();

    }

    render() {

        const sliderSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        }

        return (
            <>
            <div className="main-content header-white-bg">
                <div className="page-container about-us">

                    <div className="page-hero" data-aos="fade-up">

                        <div className="layout-width">
                            <div>
                                <h1 className="page-hero-header">All About Origgin</h1>
                                <h1 className="sub-header">Normal Is Boring</h1>
                            </div>
                        </div>

                    </div>

                    <div className="section-1" data-aos="fade-up">
                        <div className="layout-width">
                            <p className="text-center">Our mission is to accelerate the transition of Africa to a technology-first continent.</p>
                            <p className="text-center">Origgin is a technology company that builds tools to connect every side of your life. We create solutions that are the backbone for the lifestyle of the consumer. Businesses of every size – from new startups to public companies – use products our software Technology infrastructure to fuel the lifestyle of the African consumer.</p>
                        </div>
                    </div>

                    <div className="section-2" data-aos="fade-up">
                        <div className="layout-width">
                            <div className="row justify-content-center text-center g-0">
                                <div className="col-md-8 g-0">
                                <h1 className="header-xxl">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed bibendum nisi, quis mollis neque. Nullam vitae molestie eros, ac viverra odio. In hac habi”
                                </h1>
                                <h4 className="sub-header">
                                    Kane Mani, Chief Executive Officer
                                </h4>
                                </div>
                                <div className="col-md-4 g-0">
                                    <img src={ process.env.PUBLIC_URL + "/img/WhatsApp Image 2022-08-05 at 11.18.19 AM.png" } alt="human"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-3" data-aos="fade-up">

                        <div className="grid-2">
                            <div>
                                <img src={ process.env.PUBLIC_URL + "/img/pexels-josh-sorenson-13338739.jpg" } alt="house"/>
                            </div>
                            <div>
                                <h2 className="header-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                            </div>
                        </div>
                        <div className="grid-2">
                            <div>
                                <h2 className="header-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                            </div>
                            <div>
                                <img src={ process.env.PUBLIC_URL + "/img/pexels-august-de-richelieu-4260325.jpg" } alt="woman and child" />
                            </div>
                        </div>

                        <div className="grid-2">
                            <div>
                                <img src={ process.env.PUBLIC_URL + "/img/pexels-cottonbro-3205988.jpg" } alt="man in city"/>
                            </div>
                            <div>
                                <h2 className="header-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                            </div>
                        </div>

                    </div>

                    
                    <div className="section-4" data-aos="fade-up">
                        <div className="layout-width">
                            <p className="text-center">Mission</p>
                            <p className="text-center">Our mission is to accelerate the transition of Africa to a technology-first continent.</p>
                            <p className="text-center">Origgin was founded in 2010 by two Ghanaian entrepreneurs who wanted to prove that it Is possible to build a technology company from Africa that seeks to last. Today, Origgin has moved from a start-up company in building mobile apps and transitioned to a full technology company leading the charge to revolutionized an entire continent.</p>
                            <p className="text-center">Origgin believes if almost everyone in Africa become technology savvy and provided with the needed technology tools, there will be an increase adoption of tech products and demand for tech services to enable it, the better.</p>
                            <p className="text-center">And this is just the beginning. With Tesla building its most affordable car yet, Tesla continues to make products accessible and affordable to more and more people, ultimately accelerating the advent of clean transport and clean energy production. Electric cars, batteries, and renewable energy generation and storage already exist independently, but when combined, they become even more powerful – that’s the future we want.
                            </p>
                        </div>
                    </div>

                    <section className="section-5" data-aos="fade-up">
                            
                        <div className="slider-container">
                            <div className="row">
                                <div className="col-lg-12">

                                    

                                    <Slider {...sliderSettings}>
                                        <div className="slider-content-container">
                                            <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/pexels-christina-morillo-1181352.jpg"} alt="slider-img"/>
                                        </div>
                                        <div className="slider-content-container">
                                            <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/pexels-christina-morillo-1181352.jpg"} alt="slider-img"/>
                                        </div>
                                        <div className="slider-content-container">
                                            <img className="slider-img" src={ process.env.PUBLIC_URL+ "/img/pexels-christina-morillo-1181352.jpg"} alt="slider-img"/>
                                        </div>
                                        <div className="slider-content-container">
                                            <img className="slider-img" src={ process.env.PUBLIC_URL+ "img/pexels-christina-morillo-1181352.jpg"} alt="slider-img"/>
                                        </div>
                                    </Slider>

                                    

                                </div>
                            </div>
                        </div>
                        
                    </section>

                    <section className="section-6" data-aos="fade-up">
                        <div className="layout-width">
                            <h3 className="sub-header text-pink text-center">Learn more about Origgin</h3>
                            <div className="grid-4">
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

                                    <h2 className="header-md">History</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                </div>
                                <div>

                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.8984 29.05C22.8234 29.05 22.7734 29.05 22.6984 29.05C22.5734 29.025 22.3984 29.025 22.2484 29.05C14.9984 28.825 9.52344 23.125 9.52344 16.1C9.52344 8.95 15.3484 3.125 22.4984 3.125C29.6484 3.125 35.4734 8.95 35.4734 16.1C35.4484 23.125 29.9484 28.825 22.9734 29.05C22.9484 29.05 22.9234 29.05 22.8984 29.05ZM22.4984 6.875C17.4234 6.875 13.2734 11.025 13.2734 16.1C13.2734 21.1 17.1734 25.125 22.1484 25.3C22.2984 25.275 22.6234 25.275 22.9484 25.3C27.8484 25.075 31.6984 21.05 31.7234 16.1C31.7234 11.025 27.5734 6.875 22.4984 6.875Z" fill="#292D32"/>
                                        <path d="M41.348 29.375C41.273 29.375 41.198 29.375 41.123 29.35C40.098 29.45 39.048 28.725 38.948 27.7C38.848 26.675 39.473 25.75 40.498 25.625C40.798 25.6 41.123 25.6 41.398 25.6C45.048 25.4 47.898 22.4 47.898 18.725C47.898 14.925 44.823 11.85 41.023 11.85C39.998 11.875 39.148 11.025 39.148 10C39.148 8.975 39.998 8.125 41.023 8.125C46.873 8.125 51.648 12.9 51.648 18.75C51.648 24.5 47.148 29.15 41.423 29.375C41.398 29.375 41.373 29.375 41.348 29.375Z" fill="#292D32"/>
                                        <path d="M22.925 56.375C18.025 56.375 13.1 55.125 9.375 52.625C5.9 50.325 4 47.175 4 43.75C4 40.325 5.9 37.15 9.375 34.825C16.875 29.85 29.025 29.85 36.475 34.825C39.925 37.125 41.85 40.275 41.85 43.7C41.85 47.125 39.95 50.3 36.475 52.625C32.725 55.125 27.825 56.375 22.925 56.375ZM11.45 37.975C9.05 39.575 7.75 41.625 7.75 43.775C7.75 45.9 9.075 47.95 11.45 49.525C17.675 53.7 28.175 53.7 34.4 49.525C36.8 47.925 38.1 45.875 38.1 43.725C38.1 41.6 36.775 39.55 34.4 37.975C28.175 33.825 17.675 33.825 11.45 37.975Z" fill="#292D32"/>
                                        <path d="M45.8494 51.875C44.9744 51.875 44.1994 51.275 44.0244 50.375C43.8244 49.35 44.4744 48.375 45.4744 48.15C47.0494 47.825 48.4994 47.2 49.6244 46.325C51.0494 45.25 51.8244 43.9 51.8244 42.475C51.8244 41.05 51.0494 39.7 49.6494 38.65C48.5494 37.8 47.1744 37.2 45.5494 36.825C44.5494 36.6 43.8994 35.6 44.1244 34.575C44.3494 33.575 45.3494 32.925 46.3744 33.15C48.5244 33.625 50.3994 34.475 51.9244 35.65C54.2494 37.4 55.5744 39.875 55.5744 42.475C55.5744 45.075 54.2244 47.55 51.8994 49.325C50.3494 50.525 48.3994 51.4 46.2494 51.825C46.0994 51.875 45.9744 51.875 45.8494 51.875Z" fill="#292D32"/>
                                    </svg>

                                    <h2 className="header-md">Team</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    
                                </div>
                                <div>
  
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 56.9C27.275 56.9 24.575 56.1 22.45 54.525L11.7 46.5C8.85 44.375 6.625 39.95 6.625 36.4V17.825C6.625 13.975 9.45004 9.87499 13.075 8.52499L25.55 3.85C28.025 2.925 31.925 2.925 34.4 3.85L46.9 8.52499C50.525 9.87499 53.35 13.975 53.35 17.825V36.4C53.35 39.95 51.125 44.375 48.275 46.5L37.525 54.525C35.425 56.1 32.725 56.9 30 56.9ZM26.875 7.34998L14.4 12.025C12.25 12.825 10.375 15.525 10.375 17.825V36.4C10.375 38.775 12.05 42.1 13.925 43.5L24.675 51.5249C27.55 53.6749 32.425 53.6749 35.3 51.5249L46.05 43.5C47.95 42.075 49.6 38.75 49.6 36.4V17.825C49.6 15.55 47.725 12.85 45.575 12.025L33.1 7.34998C31.45 6.72498 28.55 6.72498 26.875 7.34998Z" fill="#292D32"/>
                                    <path d="M30.0007 29.1749C29.9507 29.1749 29.9007 29.1749 29.8257 29.1749C26.2007 29.0749 23.5508 26.2999 23.5508 22.9249C23.5508 19.4749 26.3757 16.6499 29.8257 16.6499C33.2757 16.6499 36.1008 19.4749 36.1008 22.9249C36.0758 26.3249 33.4257 29.0749 30.0507 29.1999C30.0257 29.1749 30.0257 29.1749 30.0007 29.1749ZM29.8257 20.3999C28.4257 20.3999 27.3008 21.5249 27.3008 22.9249C27.3008 24.2999 28.3758 25.3999 29.7258 25.4499C29.7258 25.4499 29.8507 25.4499 30.0007 25.4499C31.3257 25.3749 32.3508 24.2749 32.3508 22.9249C32.3758 21.5249 31.2257 20.3999 29.8257 20.3999Z" fill="#292D32"/>
                                    <path d="M30 43.3749C27.85 43.3749 25.675 42.7999 24 41.6749C22.325 40.5749 21.375 38.9499 21.375 37.2249C21.375 35.4999 22.325 33.8749 24 32.7499C27.375 30.4999 32.65 30.5249 36 32.7499C37.675 33.8499 38.6251 35.4749 38.6251 37.1999C38.6251 38.9249 37.675 40.5499 36 41.6749C34.325 42.7999 32.15 43.3749 30 43.3749ZM26.075 35.8499C25.45 36.2499 25.1 36.7499 25.125 37.1999C25.125 37.6499 25.475 38.1499 26.075 38.5499C28.175 39.9499 31.825 39.9499 33.925 38.5499C34.55 38.1499 34.9 37.6499 34.9 37.1999C34.9 36.7499 34.55 36.2499 33.95 35.8499C31.85 34.4749 28.175 34.4749 26.075 35.8499Z" fill="#292D32"/>
                                    </svg>

                                    <h2 className="header-md">Partners</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                                </div>
                                <div>

                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 31.875C22.075 31.875 15.625 25.425 15.625 17.5C15.625 9.575 22.075 3.125 30 3.125C37.925 3.125 44.375 9.575 44.375 17.5C44.375 25.425 37.925 31.875 30 31.875ZM30 6.875C24.15 6.875 19.375 11.65 19.375 17.5C19.375 23.35 24.15 28.125 30 28.125C35.85 28.125 40.625 23.35 40.625 17.5C40.625 11.65 35.85 6.875 30 6.875Z" fill="#292D32"/>
                                        <path d="M8.52344 56.875C7.49844 56.875 6.64844 56.025 6.64844 55C6.64844 44.325 17.1234 35.625 29.9984 35.625C32.5234 35.625 34.9984 35.9501 37.3984 36.6251C38.3984 36.9001 38.9735 37.925 38.6985 38.925C38.4235 39.925 37.3984 40.5001 36.3984 40.2251C34.3484 39.6501 32.1984 39.375 29.9984 39.375C19.1984 39.375 10.3984 46.375 10.3984 55C10.3984 56.025 9.54844 56.875 8.52344 56.875Z" fill="#292D32"/>
                                        <path d="M45 56.875C40.85 56.875 36.95 54.675 34.85 51.1C33.725 49.3 33.125 47.175 33.125 45C33.125 41.35 34.75 37.9749 37.575 35.7249C39.675 34.0499 42.325 33.125 45 33.125C51.55 33.125 56.875 38.45 56.875 45C56.875 47.175 56.275 49.3 55.15 51.125C54.525 52.175 53.725 53.125 52.775 53.925C50.7 55.825 47.925 56.875 45 56.875ZM45 36.875C43.15 36.875 41.4 37.4999 39.925 38.6749C38 40.1999 36.875 42.525 36.875 45C36.875 46.475 37.275 47.925 38.05 49.175C39.5 51.625 42.175 53.125 45 53.125C46.975 53.125 48.875 52.4 50.325 51.1C50.975 50.55 51.525 49.9 51.925 49.2C52.725 47.925 53.125 46.475 53.125 45C53.125 40.525 49.475 36.875 45 36.875Z" fill="#292D32"/>
                                        <path d="M43.5742 49.3499C43.0992 49.3499 42.6242 49.175 42.2492 48.8L39.7742 46.325C39.0492 45.6 39.0492 44.3998 39.7742 43.6748C40.4992 42.9498 41.6992 42.9498 42.4242 43.6748L43.6242 44.8749L47.6242 41.1748C48.3742 40.4748 49.5742 40.5249 50.2742 41.2749C50.9742 42.0249 50.9242 43.2249 50.1742 43.9249L44.8492 48.8499C44.4742 49.1749 44.0242 49.3499 43.5742 49.3499Z" fill="#292D32"/>
                                    </svg>


                                    <h2 className="header-md">Customers</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

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