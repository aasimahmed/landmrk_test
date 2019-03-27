import React from "react";
import "./Filter.css";

export const Filter = ({active, activeToggle}) => {

    console.log(active, active.city, active.lonlat)
    return(
        <div className="row">
            <div className="col">
            <button className={`btn btn-success btn-md ${active.city === true ? `active` : `` }`} name="city" onClick={(e) => activeToggle(e)}>Search by City</button>
            <button className={`btn btn-danger btn-md ${active.lonlat === true ? `active` : ``}`} name="lonlat" onClick={(e) => activeToggle(e)}>Search by Lon/lat</button>
            </div>
        </div>

    )
}