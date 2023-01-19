import React, {useEffect, useRef, useState} from "react";
import LocationPlacemark from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {GeolocationControl, Map, YMaps, ZoomControl} from "react-yandex-maps";
import './myYMaps.scss'
import useMatchMedia from "../../../hooks/useMatchMedia";


const mapOptions = {
    modules: ["geocode", "SuggestView"],
    defaultOptions: {suppressMapOpenBlock: true},
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
export default function MyYMaps({lang, onSubmit}) {
    const [state, setState] = useState({...initialState});
    const [mapConstructor, setMapConstructor] = useState(null);
    const [mapSize, setMapSize] = useState({
        width: 600,
        height: 400,
    })

    const mapRef = useRef(null);
    const searchRef = useRef(null);
    const matches800px = useMatchMedia(800)

    useEffect(() => {
        if (matches800px) {
            setMapSize({width: 350, height: 400})
        } else {
            setMapSize({width: 600, height: 400})
        }
    }, [matches800px])
    // submits
    const handleSubmit = () => {
        if (state.title) {
            // console.log({title: state.title, center: mapRef.current.getCenter()});
            onSubmit(state.title)
        }
    };

    // reset state & search
    const handleReset = () => {
        setState({...initialState});
        searchRef.current.value = "";
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

    return (
        <YMaps  query={{apikey: "29294198-6cdc-4996-a870-01e89b830f3e", lang: lang + "_RU"}}>
            <Box sx={{width: mapSize.width}}  className='myYMaps'>
                <Box className='myYMaps__searchRoot'>
                    <Box className='searchRoot__searchFieldBox'>
                        <input
                            ref={searchRef}
                            placeholder="Search..."
                            disabled={!mapConstructor}
                        />
                        <Box
                            className={`searchFieldBox__titleBox${state.title.length ? ' searchFieldBox__titleBox_show' : ''}`}
                        >
                            <Typography
                                title={state.title}
                                gutterBottom={false}
                            >
                                {state.title}
                            </Typography>
                            <IconButton onClick={handleReset}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Button
                        onClick={handleSubmit}
                        disabled={Boolean(!state.title.length)}
                        className={"searchRoot__searchSubmitBtn"}
                        color='success'
                        variant="contained"
                    >{'OK'}</Button>
                </Box>
                <Box className="myYMaps__mapRoot">
                    <Map
                        {...mapOptions}
                        {...mapSize}
                        state={state}
                        onLoad={setMapConstructor}
                        onBoundsChange={handleBoundsChange}
                        instanceRef={mapRef}
                    >
                        <LocationPlacemark className='mapRoot_placeMark' color="primary"/>
                        <GeolocationControl {...geolocationOptions} />
                        <ZoomControl/>
                    </Map>
                </Box>
            </Box>
        </YMaps>
    );
}
