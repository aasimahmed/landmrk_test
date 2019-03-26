import React from "react";
import "./Nav.css";

//FUNCTIONALITY
import { Link } from "react-router-dom";


export const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
            <span className="navbar-brand">Logo here</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">            
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
            		<li className="nav-item">
                <Link to="/" ><span className="nav-link">Home</span></Link>
            		</li>
								<li className="nav-item">
                <Link to="/search" ><span className="nav-link">Search</span></Link>
            		</li>
            		<li className="nav-item">
                <Link to="/user" ><span className="nav-link">My Routes</span></Link>
            		</li>
            	</ul>
					  </div>
        </nav>      
    )
} 