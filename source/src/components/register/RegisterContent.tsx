/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import logoMixLight from '/assets/img/logo-mix-light.png';
import thumb14 from '/assets/img/thumb/14.jpg';
import { toast } from 'react-toastify';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const RegisterContent = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Registration")
    }

    return (
        <>
            <div className="login-area">
                <div className="container">
                    <div className="login-items">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login-thumb">
                                    <img src={thumb14} alt="Image Not Found" />
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logoMixLight} alt="Image Not Found" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-forms">
                                    <h2>Create an account</h2>
                                    <p>
                                        Enter your details ato create a new account
                                    </p>

                                    <form onSubmit={handleForm}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Email*" type="email" autoComplete='off' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Password*" type="password" autoComplete='off' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Confirm Password*" type="text" autoComplete='off' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <button type="submit">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="login-alternative">
                                        <h4>Or Register With</h4>
                                        <ul>
                                            <li>
                                                <Link to="#" ><i className="fab fa-google" /> Google</Link>
                                            </li>
                                            <li>
                                                <Link to="#" ><i className="fab fa-facebook-f" /> Facebook</Link>
                                            </li>
                                        </ul>
                                        <p>
                                            Already have an account? <Link to="/login">Login Now</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default RegisterContent;