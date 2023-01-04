import React from 'react';
import CheckIcon from "@mui/icons-material/Check";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../../../store/toolKitRedux/userDataSlice";

const LanguagesList = ({setVisibility}) => {
    const selectedLang = useSelector(state => state.userData.lang)
    const availableLang = useSelector(state => state.userData.availableLang)
    const dispatch = useDispatch()
    const langListItemClickHandler = (lang) => {
        dispatch(setLang(lang))
        setVisibility(false)
    }
    return (
        <div
            className={`languageSwitcher__languagesList`}>
            {availableLang.map(item => (
                <div
                    id={`availableLang_listItem${item}`}
                    className='languagesList__item'
                    onClick={()=>langListItemClickHandler(item)}
                >
                    {item}
                    {
                        selectedLang === item ?
                            <CheckIcon fontSize='small'/> :
                            null
                    }
                </div>
            ))}
        </div>
    );
};

export default LanguagesList;