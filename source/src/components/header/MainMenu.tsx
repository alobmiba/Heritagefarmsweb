/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
}

const MainMenu = ({ toggleSubMenu, navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} navbar-right`} data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/shop">Our Produce</Link></li>
                <li><Link to="/farmers">Our Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Pre-Order</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;