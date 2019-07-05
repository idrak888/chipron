import React from 'react';

const Header = props => {
    const toggleNavbar = () => {
        const navbar = document.getElementById('navbarCollapse');
        if (navbar.style.display == 'none' || navbar.style.display == '') {
            navbar.style.display = 'block';
        }else {
            navbar.style.opacity = 0;
            setTimeout(() => {
                navbar.style.display = 'none';
                navbar.style.opacity = 1;
            }, 500);
        }
    }
    const toggleInput = e => {
        e.preventDefault();
        
        const navbar = document.getElementById('inputCollapse');
        if (navbar.style.display == 'none' || navbar.style.display == '') {
            navbar.style.display = 'block';
        }else {
            navbar.style.opacity = 0;
            setTimeout(() => {
                navbar.style.display = 'none';
                navbar.style.opacity = 1;
            }, 500);
        }
    }
    return (
        <div className="Header">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img src="/static/logo.png"/></a>
                <button onClick={toggleNavbar} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img  src="/static/bars.png"/>
                </button>
                <div id="navbarCollapse" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-item dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">NanoX</a>
                            <a class="dropdown-item" href="#">GB-6 series</a>
                            <a class="dropdown-item" href="#">GB-3 series</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">Our investors</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <input id="inputCollapse" class="form-control mr-sm-2" type="search" placeholder="Search something" aria-label="Search"/>
                        <button onClick={toggleInput} class="btn btn-primary my-2 my-sm-0" type="submit"><img src="/static/search.png" width="20"/></button>
                    </form>
                </div>
                
            </nav>
        </div>
    );
}

export default Header;