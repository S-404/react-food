import React, {useEffect, useRef, useState} from "react";
import LocationPlacemark from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {GeolocationControl, Map, YMaps, ZoomControl} from "react-yandex-maps";
import './myYMaps.scss'

const mapOptions = {
    modules: ["geocode", "SuggestView"],
    defaultOptions: {suppressMapOpenBlock: true},
    width: 600,
    height: 400,
};

const geolocationOptions = {
    defaultOptions: {maxWidth: 128},
    defaultData: {content: "Determine"},
};

const initialState = {
    title: "",
    center: [55.749451, 37.542824],
    zoom: 12,
};
export default function MyYMaps() {
    const [state, setState] = useState({...initialState});
    const [mapConstructor, setMapConstructor] = useState(null);
    const mapRef = useRef(null);
    const searchRef = useRef(null);

    // submits
    const handleSubmit = () => {
        console.log({title: state.title, center: mapRef.current.getCenter()});
    };

    // reset state & search
    const handleReset = () => {
        setState({...initialState});
        searchRef.current.value = "";
        mapRef.current.setCenter(initialState.center);
        mapRef.current.setZoom(initialState.zoom);
    };

    // search popup
    useEffect(() => {
        if (mapConstructor) {
            new mapConstructor.SuggestView(searchRef.current).events.add("select", function (e) {
                const selectedName = e.get("item").value;
                mapConstructor.geocode(selectedName).then((result) => {
                    const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
                    setState((prevState) => ({...prevState, center: newCoords}));
                });
            });
        }
    }, [mapConstructor]);

    // change title
    const handleBoundsChange = () => {
        const newCoords = mapRef.current.getCenter();
        mapConstructor.geocode(newCoords).then((res) => {
            const nearest = res.geoObjects.get(0);
            const foundAddress = nearest.properties.get("text");
            const [centerX, centerY] = nearest.geometry.getCoordinates();
            const [initialCenterX, initialCenterY] = initialState.center;
            if (centerX !== initialCenterX && centerY !== initialCenterY) {
                setState((prevState) => ({...prevState, title: foundAddress}));
            }
        });
    };

    // RENDER
    return (
        <YMaps query={{apikey: "29294198-6cdc-4996-a870-01e89b830f3e", lang: "en_RU"}}>
            <Box sx={{m: 2, width: 600}} className='myYMaps'>
                <Box className='myYMaps_searchRoot'>
                    <Box className='searchRoot_searchFieldBox'>
                        <input ref={searchRef} placeholder="Search..." disabled={!mapConstructor}/>
                        <Box
                            className={'searchFieldBox_titleBox' + state.title.length ? ' searchFieldBox_titleBox_show' : ''}>
                            <Typography title={state.title} gutterBottom={false}>
                                {state.title}
                            </Typography>
                            <IconButton onClick={handleReset}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Button onClick={handleSubmit} disabled={Boolean(!state.title.length)}
                            className={"searchRoot_searchSubmitBtn"}>
                        Ok
                    </Button>
                </Box>
                <Box className="myYMaps_mapRoot">
                    <Map
                        {...mapOptions}
                        state={state}
                        onLoad={setMapConstructor}
                        onBoundsChange={handleBoundsChange}
                        instanceRef={mapRef}
                    >
                        <LocationPlacemark className='mapRoot_placeMark'  color="primary"/>
                        <GeolocationControl {...geolocationOptions} />
                        <ZoomControl/>
                    </Map>
                </Box>
            </Box>
        </YMaps>
    );
}
