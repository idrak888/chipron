import React from 'react';

const Footer = props => {
    return (
        <div className="Footer">
            <footer class="page-footer font-small blue pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">Terms & conditions</h5>
                            <p>Please read these terms and conditions of use carefully before accessing, you agree to be bound by these terms and conditions (“Terms”) and our Privacy Policy.</p>

                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3"/>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Website</h5>

                            <ul class="list-unstyled">
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                            <li>
                                <a href="#!">Invest</a>
                            </li>
                            <li>
                                <a href="#!">Products</a>
                            </li>
                            </ul>

                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Social</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!">Email</a>
                                </li>
                                <li>
                                    <a href="#!">LinkedIn</a>
                                </li>                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">© 2019 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> Chipron.com</a>
                </div>
                
            </footer>
        </div>
    );
}

export default Footer;