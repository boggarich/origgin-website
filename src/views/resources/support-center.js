import React from "react";
import "../../assets/sass/support-center.scss";

export default class SupportCenter extends React.Component {

    render() {

        return(
            <div className="main-content support-center">
                
                <div className="layout-width">
                    <div className="grid-2">
                        
                        <div>

                            <section className="page-hero">

                                    <h1 className="page-hero-header no-transform">
                                    How can we help?
                                    </h1>

                                    <div className="position-relative search search-with-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1379_939)">
                                            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" fill-opacity="0.7"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1379_939">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        <input className="w-100 position-relative " placeholder="Search Help articles"/>
                                    </div>

                                    

                            </section>

                            <section className="section-1">
                                <h4 className="sub-header main">Popular articles</h4>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                                <div className="grid-3-row">

                                    <h4 className="sub-header">
                                        <span className="icon-bullet">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1379_944)">
                                                <path d="M10 1.66602C5.40001 1.66602 1.66667 5.39935 1.66667 9.99935C1.66667 14.5993 5.40001 18.3327 10 18.3327C14.6 18.3327 18.3333 14.5993 18.3333 9.99935C18.3333 5.39935 14.6 1.66602 10 1.66602ZM10.8333 15.8327H9.16667V14.166H10.8333V15.8327ZM12.5583 9.37435L11.8083 10.141C11.2083 10.7493 10.8333 11.2493 10.8333 12.4993H9.16667V12.0827C9.16667 11.166 9.54167 10.3327 10.1417 9.72435L11.175 8.67435C11.4833 8.37435 11.6667 7.95768 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10 5.83268C9.08334 5.83268 8.33334 6.58268 8.33334 7.49935H6.66667C6.66667 5.65768 8.15834 4.16602 10 4.16602C11.8417 4.16602 13.3333 5.65768 13.3333 7.49935C13.3333 8.23268 13.0333 8.89935 12.5583 9.37435Z" fill="#6F4CF5"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1379_944">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        Trouble signing in
                                    </h4>
                                    <p>
                                    How to regain access to your Stripe account if you can no longer sign in or have forgotten some of your log in information. Forgotten username or…
                                    </p>
                                    <div className="span-padded">
                                        <span>2FA</span>
                                        <span>*</span>
                                        <span>Account</span>
                                        <span>*</span>
                                        <span>Dashboard</span>
                                    </div>
                                </div>

                            </section>

                            
                        </div>
                        <div>
                            <h4 className="sub-header main">Contact Support</h4>
                            <p>24×7 help from our support staff</p>
                            <div className="page-separator"></div>
                            <h4 className="sub-header main">Popular topics</h4>
                            <a href="#">1099</a>
                            <a href="#">Account</a>
                            <a href="#">Atlas</a>
                            <a href="#">Billing</a>
                            <a href="#">Connect</a>
                            <a href="#">Disputes</a>
                            <a href="#">Getting started</a>
                            <a href="#">Invoice</a>
                            <a href="#">Payments</a>
                            <a href="#">Payouts</a>
                            <a href="#">Privacy</a>
                            <a href="#">Refunds</a>
                            <a href="#">Taxes</a>
                            <a href="#">Third-party integrations</a>
                            <a href="#">Verification</a>
                        </div>
                    </div>
                </div>

                <section className="section-2">
                    <div className="layout-width">

                        <div className='grid-4'>
                                <div className='flex-3-row has-icon'>
                                    <div><img src={ process.env.PUBLIC_URL + "/img/home.svg" }/></div>
                                    <h4 className='sub-header'>What is Stripe?</h4>
                                    <p>
                                    Learn more about Stripe and our products.
                                    </p>
                                </div>
                                <div className='flex-3-row has-icon'>
                                    <div><img src={ process.env.PUBLIC_URL + "/img/book.svg" }/></div>
                                    <h4 className='sub-header'>Stripe docs</h4>
                                    <p>
                                    Get familiar with the Stripe products and their features.
                                    </p>
                                </div>
                                <div className='flex-3-row has-icon'>
                                    <div><img src={ process.env.PUBLIC_URL + "/img/code.svg" }/></div>
                                    <h4 className='sub-header'>API reference</h4>
                                    <p>
                                    Explore complete reference documentation for the Stripe API.
                                    </p>
                                </div>
                                <div className='flex-3-row has-icon'>
                                    <div><img src={ process.env.PUBLIC_URL + "/img/chat_bubble.svg" }/></div>
                                    <h4 className='sub-header'>Developer chat on Discord</h4>
                                    <p>
                                    Chat live with other developers on the official Stripe Discord.
                                    </p>
                                </div>
                        </div>

                        <div className="mini-footer">
                            <h4 className="sub-header">
                                <span className="icon-bullet">

                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1379_1099)">
                                        <path d="M25 2.5H5C3.625 2.5 2.5 3.625 2.5 5V27.5L7.5 22.5H25C26.375 22.5 27.5 21.375 27.5 20V5C27.5 3.625 26.375 2.5 25 2.5Z" fill="#FD3B5E"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1379_1099">
                                        <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                                English (United States)
                            </h4>
                            <h4 className="sub-header">
                            <span className="icon-bullet">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
                                    <path d="M12.2402 16.75C9.62023 16.75 7.49023 14.62 7.49023 12C7.49023 9.38 9.62023 7.25 12.2402 7.25C13.3902 7.25 14.5102 7.67 15.3702 8.44C15.6802 8.71 15.7102 9.19 15.4402 9.5C15.1702 9.81 14.6902 9.84001 14.3802 9.57001C13.7902 9.05001 13.0302 8.76001 12.2402 8.76001C10.4502 8.76001 8.99023 10.22 8.99023 12.01C8.99023 13.8 10.4502 15.26 12.2402 15.26C13.0202 15.26 13.7902 14.97 14.3802 14.45C14.6902 14.18 15.1702 14.21 15.4402 14.52C15.7102 14.83 15.6802 15.31 15.3702 15.58C14.5002 16.33 13.3902 16.75 12.2402 16.75Z" fill="#292D32"/>
                                </svg>
                            </span>

                               Origgin
                            </h4>
                        </div>

                    </div>
                </section>

            </div>  
        );

    }

}