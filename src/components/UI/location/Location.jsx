import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLocationVisible} from "../../../store/toolKitRedux/modalsSlice";
import Modal from "../modal/Modal";
import MyYMaps from "../map/MyYMaps";
import './location.scss'

const Location = () => {
    const locationVisible = useSelector(state => state.modals.locationVisible)
    const dispatch = useDispatch()
    return (
        <div className='location'>
            <div
                className='location_selectedLocation'
                onClick={() => dispatch(setLocationVisible(true))}
            >
                select your location
            </div>
            <Modal
                visible={locationVisible}
                title='Select your location:'
                setVisible={() => dispatch(setLocationVisible(false))}
            >
                <div className='location_locationNav'>
                    <MyYMaps/>
                </div>
            </Modal>


        </div>
    );
};

export default Location;