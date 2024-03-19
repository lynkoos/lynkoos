import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaHeart, FaFire, FaBell, FaCode, FaSearch, FaInfoCircle } from 'react-icons/fa';
import { PiGearSixFill } from 'react-icons/pi';
import { CiShare1 } from 'react-icons/ci';
import './style.css';

export default function DivComponent() {
    return (
        <div>
            <div className="phone">
                <header className="header">
                    <div className="header-logo">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header-title">Home</div>
                    <div className="header-buttons">
                        <button className="notifications">
                            <FaBell />
                        </button>
                        <button className="avatar">
                            <Image src="Logo-Blue.svg" alt="" width={100} height={100} />
                        </button>
                    </div>
                </header>
                <section className="search">
                    <div className="search-inner">
                        <button className="search-button">
                            <FaSearch />
                        </button>
                        <input type="text" className="search-input" placeholder="Buscar..." />
                    </div>
                </section>

                <nav className="navigation">
                    <Link href="#" className="navigation-item active">
                        Reciente
                    </Link>
                    <Link href="#" className="navigation-item">
                        Sugeridos
                    </Link>
                    <Link href="#" className="navigation-item">
                        Seguidos
                    </Link>
                </nav>
                <section className="playlists">
                    <article className="card">
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="card-image">
                                <Image src="Logo-Blue.svg" alt="" width={100} height={100} />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">red social</span>
                                    <Link href="/linkedin"  className="card-meta-button">
                                        <CiShare1 />
                                    </Link>
                                </div>
                                <h2 className="card-title">Linkedin</h2>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="card-image">
                                <Image src="Logo-Blue.svg" alt="" width={100} height={100} />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">red social</span>
                                    <Link href="/twitter"  className="card-meta-button">
                                        <CiShare1 />
                                    </Link>
                                </div>
                                <h2 className="card-title">Twitter</h2>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="card-image">
                                <Image src="Logo-Blue.svg" alt="" width={100} height={100} />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">red social</span>
                                    <Link href="/instagram"  className="card-meta-button">
                                        <CiShare1 />
                                    </Link>
                                </div>
                                <h2 className="card-title">Instagram</h2>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="currently-playing">
                    <article className="card horizontal">
                        <div className="card-inner">
                            <span className="card-pin simple"></span>
                            <div className="card-image">
                                <Image src="Logo-Blue.svg" alt="" width={100} height={100} />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-artist">Comunidad de WhatsApp</span>
                                    <Link href="/whatsapp" className="card-meta-button">
                                        <CiShare1 />
                                    </Link>
                                </div>
                                <h2 className="card-title">
                                    Unete para que no te pierdas de eventos relevantes
                                    <span className="card-time"></span>
                                </h2>
                            </div>
                            <span className="card-pin simple"></span>
                        </div>
                    </article>
                </section>
                <footer className="menu">
                    <div className="menu-inner">
                        <Link href="#" className="menu-item active">
                            <FaHome />
                        </Link>
                        <Link href="#" className="menu-item">
                            <FaHeart />
                        </Link>
                        <Link href="#" className="menu-item">
                            <FaFire />
                        </Link>
                        <Link href="#" className="menu-item">
                            <PiGearSixFill />
                        </Link>
                        <Link href="#" className="menu-item">
                            <FaCode />
                        </Link>
                        <Link href="#" className="menu-item">
                            <FaInfoCircle />
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
