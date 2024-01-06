import React from "react";
import "./style.css";

export const Home = () => {
    return (
        <div className="apple-watch-landing">
            <div className="div">
                <div className="overlap">
                    <img className="logo" alt="Logo" src="logo.png" />
                    <div className="menu-bar">
                        <div className="navbar">
                            <div className="text-wrapper">Mac</div>
                            <div className="text-wrapper-2">iPhone</div>
                            <div className="text-wrapper-3">iPad</div>
                            <div className="text-wrapper-4">Support</div>
                            <div className="menu-active">
                                <div className="overlap-group">
                                    <div className="text-wrapper-5">iWatch</div>
                                </div>
                            </div>
                        </div>
                        <img className="search-and-cart" alt="Search and cart" src="search-and-cart.png" />
                    </div>
                    <div className="overlap-2">
                        <div className="overlap-3">
                            <div className="title">
                                <p className="the-perfect-moment">
                                    <span className="span">
                                        The Perfect Moment
                                        <br />
                                    </span>
                                    <span className="text-wrapper-6">
                                        Between Past And <br />
                                        Future.
                                    </span>
                                </p>
                            </div>
                            <div className="watch">
                                <img className="element" alt="Element" src="1-1.png" />
                                <div className="ellipse" />
                            </div>
                        </div>
                        <div className="button-CAT">
                            <div className="overlap-4">
                                <div className="text-wrapper-7">Bye Now</div>
                                <div className="rectangle" />
                            </div>
                        </div>
                    </div>
                    <img className="color-indicator" alt="Color indicator" src="color-indicator.png" />
                    <div className="overlap-wrapper">
                        <div className="overlap-5">
                            <div className="rectangle-2" />
                            <img className="img" alt="Element" src="3.png" />
                        </div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-5">
                            <div className="rectangle-3" />
                            <img className="element-2" alt="Element" src="5.png" />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="overlap-5">
                            <div className="rectangle-4" />
                            <img className="element-3" alt="Element" src="4.png" />
                        </div>
                    </div>
                    <div className="page-indicator">
                        <img className="vector" alt="Vector" src="vector-5.svg" />
                        <img className="vector-2" alt="Vector" src="vector-6.svg" />
                        <div className="text-wrapper-8">1</div>
                    </div>
                </div>
                <img className="nav-menu" alt="Nav menu" src="nav-menu.png" />
                <img className="social-icon" alt="Social icon" src="social-icon.png" />
            </div>
        </div>
    );
};


export default Home;