import Navbar from "../../components/Navbar/Navbar"
import Navigation from "../../components/Navigation/Navigation"

import "./Header.css"

const Header = () => {
    return (
        <header>
            <Navbar/>
            <Navigation/>
            <div className="header__content mt-10 row-1">
                <div className="container align-items gp-50">
                    <div className="header__content-picture">
                        <img src="img/fruit.png" alt="headpic"/>
                    </div>
                    <div className="header__content-text">
                        <div>
                            <h3 className="mb-10">Fresh And Organic</h3>
                            <h2>Your Daily Need Products</h2>
                            <button className="btn btn-success mt-10">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header