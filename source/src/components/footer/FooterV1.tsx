/* eslint-disable no-unused-vars */

import shape7 from "/assets/img/shape/7.png";
import { Link } from "react-router-dom";
import logoLight from "/assets/img/logo-light.png";
import { toast } from "react-toastify";
import BlogV1Data from "../../assets/jsonData/blog/BlogV1Data.json";
import FooterRecentPost from "./FooterRecentPost";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV1 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <footer className="bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/8.png)' }}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 item">
                                <div className="footer-item about">
                                    <h4 style={{color: "white", fontWeight: "bold"}}>Heritage Fields & Acreage</h4>
                                    <p>
                                        Cultivating heritage crops and reclaiming food sovereignty for Canada’s African & Caribbean diaspora.
                                    </p>
                                    <form onSubmit={handleForm}>
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                                        <button type="submit"> Go</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/farmers">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop">Our Produce</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-home" />
                                            </div>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                16 Twin Sisters Lake Road, Marmora, Ontario
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@heritagefields.com">info@heritagefields.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:226-555-0182">+226-555-0182</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://www.upwork.com/freelancers/~01572d65a97f81345b" target="_blank">Abimbola</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-right-bottom">
                    <img src={shape7} alt="Image Not Found" />
                </div>
            </footer>
        </>
    );
};

export default FooterV1;