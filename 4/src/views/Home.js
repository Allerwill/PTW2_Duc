import React from 'react';
import '../App.scss';
import '../sassc/home.scss';


function Home() {
    return (
        <div>
            <section className="hero spad set-bg" data-setbg="./img/hero.jpg">
                <div className="container">
                    <image src="./img/hero.jpg"/>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero__text">
                                <h5>WELCOME Group F</h5>
                                <h2>Experience the greatest for you holidays.</h2>
                            </div>
                            <form action="#" className="filter__form">
                                <div className="filter__form__item filter__form__item--search">
                                    <p>Location</p>
                                    <div className="filter__form__input">
                                        <input type="text" placeholder="Search Location" />
                                        <span className="icon_search" />
                                    </div>
                                </div>
                                <div className="filter__form__item">
                                    <p>Check In</p>
                                    <div className="filter__form__datepicker">
                                        <span className="icon_calendar" />
                                        <input type="text" className="datepicker_pop check__in" />
                                        <i className="arrow_carrot-down" />
                                    </div>
                                </div>
                                <div className="filter__form__item">
                                    <p>Check Out</p>
                                    <div className="filter__form__datepicker">
                                        <span className="icon_calendar" />
                                        <input type="text" className="datepicker_pop check__out" />
                                        <i className="arrow_carrot-down" />
                                    </div>
                                </div>
                                <div className="filter__form__item filter__form__item--select">
                                    <p>Person</p>
                                    <div className="filter__form__select">
                                        <span className="icon_group" />
                                        <select>
                                            <option value>2 Adult, 1 Children</option>
                                            <option value>2 Adult</option>
                                            <option value>1 Adult</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit">BOOK NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home ;
