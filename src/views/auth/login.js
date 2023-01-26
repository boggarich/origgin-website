import React from "react";
import "../../assets/sass/auth.scss";
import pageLogo from '../../assets/img/ORRIGGIN-logotype.png';
import $ from 'jquery';

export default class Login extends React.Component {

    componentDidMount() {
        $('body').addClass('empty-layout');
    }

    render() {

        return (

            <>
                
                <div className="main-content auth">
                    <header>
                       
                        <div className="header-wrapper">
                            <div className="layout-width d-block">
                                <div className="page-logo"><a href="/"><img src={ pageLogo } alt="logo" /></a></div>
                            </div>
                        </div>
                    </header>
                    <div className="layout-width">
                        <div className="logo-container">
                            
                            <h4>One account for Everything</h4>
                            <h4>Your Origgin ID and password gives you access to all Origgin services.</h4>

                        </div>
                        <div className="card-shadow-container">
                        
                            <div className="card-shadow">
                                <div className="padding-horizontal">
                             
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Origgin ID</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1" className="d-flex justify-between w-100"><span className="flex-grow-1">Password</span><span><a href="/reset">Forgot your password?</a></span></label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="" />
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                            <label class="form-check-label" for="exampleCheck1">Stay signed in</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100"><span>Continue</span></button>
                                    </form>
                                    <p>Don't have an account? <span><a href="/signup">Sign up</a></span></p>
                                </div>
                            </div>
                            
                            <div className="footer-wrapper">
                                <ul>
                                    <li>© Origgin</li>
                                    <li>·</li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li>·</li>
                                    <li><a href="/privacy-and-terms">Privacy & terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );


    }

}