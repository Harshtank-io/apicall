import { Outlet } from "react-router-dom";
import Header from './Header.js';
import Footer from './Footer';
import './index.css'
function Layout(){

    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );

}



export default Layout;
