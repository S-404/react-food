import React, {useState} from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import {useSelector} from "react-redux";
import './languageSwitcher.scss'
import LanguagesList from "./languagesList/LanguagesList";

const LanguageSwitcher = () => {
    const selectedLang = useSelector(state => state.userData.lang)
    const [languageListVisibility, setLanguageListVisibility] = useState(false)

    const clickButtonHandler = () => {
        setLanguageListVisibility((prevState) => !prevState)
    }

    return (
        <div className='languageSwitcher'>
            <div
                className='languageSwitcher__button'
                onClick={clickButtonHandler}
            >
                <span>{selectedLang}</span>
                <LanguageIcon fontSize='small'/>
            </div>
            {
                languageListVisibility ?
                <LanguagesList setVisibility={setLanguageListVisibility}/> :
                null
            }
        </div>
    );
};

export default LanguageSwitcher;