import React from "react"
import { Outlet } from "react-router-dom";
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class MainLayout extends React.Component {

    render() {

        return (
            <>

                <Header />
                <Outlet />
                <Footer />
                
            </>
            
        );

    }

}