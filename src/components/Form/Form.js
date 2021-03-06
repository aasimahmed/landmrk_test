import React, { Component } from "react";
import "./Form.css";
// import "prop-types";

import { Filter } from "../Filter/Filter";


export class Form extends Component{
    state={
        searchboxvalues: {
            city: "",
            lon : "",
            lat : "",
            range: 50
        },
        active : {
            city: true,
            lonlat: false
        }
    }

    componentDidMount(){

    }

     checkSubmission = async (e) => {
         e.preventDefault();
         
        
    }

    setSearchValues = async (inputName, inputValue) => {
        let copyState = {...this.state}
        this.setState({
            searchboxvalues : {
                ...copyState.searchboxvalues,
                [inputName] : inputValue
            }
        })
        console.log(inputName, inputValue)
        
    }

    activeToggle = async (e) => {
        const target = e.target.name
        const copyState = {...this.state};
        
        for(let activeState in copyState.active){
            if(activeState !== target){
                copyState.active[activeState] = false;
            }else{
                copyState.active[activeState] = true;
            }
        }

        this.setState(copyState)
    }

    render(){ 

        const displayCity = {display : `${this.state.active["city"] ? "block" : "none"}`};
        const displayLonLat = {display : `${this.state.active["lonlat"] ? "block" : "none"}`};
        //check which form we are currently showing, whether its by City, by lon/lat.
        //need to autofill these in if user provides us with data through props.

        


        return(
            <form onSubmit={(e) => this.checkSubmission(e)}>
                <Filter active={this.state.active} activeToggle={this.activeToggle}/>
                <div style={displayCity}className="search-city">
                <h2>Search via city</h2>
                <input type="text" placeholder="Search for a city" value={this.state.searchboxvalues.city} onChange={(e) => this.setSearchValues(e.target.name, e.target.value)} name="city"/>
                </div>
                
                <div style={displayLonLat} className="search-lonlat" >
                <h2>Search via lon-lat</h2>
                
                <input type="text" placeholder="Enter your latitude" value={this.state.searchboxvalues.lat} onChange={(e) => this.setSearchValues(e.target.name, e.target.value)} name="lat"/>
                <input type="text" placeholder="Enter your longitude" value={this.state.searchboxvalues.lon} onChange={(e) => this.setSearchValues(e.target.name, e.target.value)} name="lon"/>
                
                </div>

                <div className="search-radius">
                    <label htmlFor="formControlRange">How many miles : <span>{this.state.searchboxvalues.range}</span></label>
                    <input type="range" class="custom-range" id="formControlRange" min="0" max="100" name="range" value={this.state.searchboxvalues.range} onChange={(e) => this.setSearchValues(e.target.name, e.target.value)}></input>
                </div>
                <button className="btn btn-md btn-primary">Submit</button>
                <div className="results-box">
                {}
                </div>
            </form>
        )
    }
}





//THOUGHTS WHEN FORM IS SUBMITTED, ALLOW USER TO USE RADIO BUTTONS TO SELECT WHAT THEY WANT TO SEARCH WITH.