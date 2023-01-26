import React from "react"
import { Outlet } from "react-router-dom";
import Footer from '../../components/footer';

export default class LayoutNoHeader extends React.Component {

    render() {

        return (
            <>
                <Outlet />
            </>
            
        );

    }

}