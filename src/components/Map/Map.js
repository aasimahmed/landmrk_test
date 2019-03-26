import React, {Component} from "react";
import mapbox from "mapbox-gl"


mapbox.accessToken = 'pk.eyJ1IjoiYWFzaW1haG1lZCIsImEiOiJjanRvOTdwdTkwMXdqNGFwbmVwcXhteDlzIn0.-GyMrPGwpBdtkjnPT-6C-g';


export class Map extends Component{
    state = {

    }

    componentDidMount(){
        this.map = new mapbox.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 1,

        })
    }

    componentWillMount(){
        // this.map.remove()
    }

    render(){

        const style={
            width: "100%",
            height: "100%"
        }


        return(
            <div style={style}className="map-container" ref={e => this.mapContainer= e}>
            </div>
        )
    }


}