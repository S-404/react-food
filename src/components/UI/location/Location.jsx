import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLocationVisible} from "../../../store/toolKitRedux/modalsSlice";
import {setLocation} from "../../../store/toolKitRedux/userDataSlice";
import Modal from "../modal/Modal";
import MyYMaps from "../map/MyYMaps";
import './location.scss'
import useMatchMedia from "../../../hooks/useMatchMedia";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Location = () => {
    const matches800px = useMatchMedia(800)
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
                className='location__selectedLocation'
                onClick={() => setLocationModalVisibility(true)}
            >{
                matches800px ?
                    <>{selectedLocation.length ? <WhereToVoteIcon/> : <AddLocationAltIcon/>}</> :
                    <>{selectedLocation.length ? <><WhereToVoteIcon/>{selectedLocation} </>  : `Выберите ваше местоположение`}</>
            }

            </div>

            <Modal
                visible={locationVisible}
                title='Выберите ваше местоположение:'
                setVisible={() => setLocationModalVisibility(false)}
            >
                <div className='location__locationNav'>
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