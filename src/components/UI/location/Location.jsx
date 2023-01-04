import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLocationVisible} from "../../../store/toolKitRedux/modalsSlice";
import {setLocation} from "../../../store/toolKitRedux/userDataSlice";
import Modal from "../modal/Modal";
import MyYMaps from "../map/MyYMaps";
import './location.scss'

const Location = () => {
    const locationVisible = useSelector(state => state.modals.locationVisible)
    const selectedLang = useSelector(state => state.userData.lang)
    const selectedLocation = useSelector(state => state.userData.location)
    const dispatch = useDispatch()

    const onSubmitHandler = (value) => {
        dispatch(setLocation(value))
        setLocationModalVisibility(false)
    }
    const setLocationModalVisibility = (value) => {
        dispatch(setLocationVisible(value))
    }
    return (
        <div className='location'>
            <div
                className='location_selectedLocation'
                onClick={() => setLocationModalVisibility(true)}
            >
                {selectedLocation.length ? selectedLocation : `select your location`}
            </div>
            <Modal
                visible={locationVisible}
                title='Select your location:'
                setVisible={() => setLocationModalVisibility(false)}
            >
                <div className='location_locationNav'>
                    <MyYMaps
                        lang={selectedLang}
                        onSubmit={onSubmitHandler}
                    />
                </div>
            </Modal>


        </div>
    );
};

export default Location;