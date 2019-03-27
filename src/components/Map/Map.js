import React, {
    Component
} from "react";
import mapbox from "mapbox-gl"


mapbox.accessToken = 'pk.eyJ1IjoiYWFzaW1haG1lZCIsImEiOiJjanRvOTdwdTkwMXdqNGFwbmVwcXhteDlzIn0.-GyMrPGwpBdtkjnPT-6C-g';
const mapbox_tiletoken = "sk.eyJ1IjoiYWFzaW1haG1lZCIsImEiOiJjanRxeGV1OG8wMzNhNDNwMmRvZTZwMjg4In0.hC9O1C0CerIHpGZWzglAUw"

export class Map extends Component {
    state = {
        user : {
            lat: 51.4545,
            long : -2.5879
        },
        dataSet : {

        },
        dataValues: {

        }
    }

    async componentDidMount() {

        const dataVector = await fetch(`https://api.mapbox.com/tilesets/v1/aasimahmed?access_token=${mapbox_tiletoken}`)
        const parsedDataVector = await dataVector.json();

        const dataValues = await fetch(`https://api.mapbox.com/v4/aasimahmed.3b3gram9/tilequery/-2.5879,51.4545.json?radius=1000000&access_token=${mapbox_tiletoken}`)
        const parsedDataValues = await dataValues.json();

        this.setState({
            dataSet: parsedDataVector,
            dataValues: parsedDataValues.features
        })


        this.map = new mapbox.Map({
            container: this.mapContainer,
            style: "mapbox://styles/mapbox/light-v10",
            center: [this.state.user.long, this.state.user.lat],
            zoom: 10,    
        })

        this.setMarker();


}

componentWillMount() {
    // this.map.remove()
}

onMarkerDrag = () => {

}

setMarker = () => {
    
    var marker = new mapbox.Marker({
        draggable: true
        }).setLngLat([this.state.user.long, this.state.user.lat])
        .addTo(this.map);

    marker.on("dragend", this.onMarkerDrag)

}

render() {

    const style = {
        width: "100%",
        height: "100%"
    }
    if(this.state.dataValues.length > 0){
        
    }



    return ( 
    <div style = {
            style
        }
        className = "map-container"
        ref = {
            e => this.mapContainer = e
        }>
        </div>
    )
}


}