import React from "react";
import "./Home.css";

import { Map } from "../../components/Map/Map";

export const Home = () => {
    return(
        <section className="home-container row">
            <div className="col-md-4 querybox-container">
                <h2>query</h2>
            </div>
            <div className="col-md-8 map-container">
                <Map/>
            </div>
        </section>
    )
}