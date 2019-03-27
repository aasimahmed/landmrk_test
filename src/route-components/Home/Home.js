import React from "react";
import "./Home.css";

import { Map } from "../../components/Map/Map";
import { Form } from "../../components/Form/Form";

export const Home = () => {


    
    return(
        <section className="home-container row">
        
            <div className="col-md-4 querybox-container">
            <h1> NATIONAL GEOGRAPHIC DATA FINDER </h1>
                <Form />
            </div>
            <div className="col-md-8 map-container">
                <Map/>
            </div>
            
        </section>
    )
    }
