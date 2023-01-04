import React from 'react';
import Logo from "../logo/Logo";
import Location from "../location/Location";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import NavCart from "./cart/NavCart";
import AvatarButton from "./avatar/AvatarButton";
import './navPanel.scss'

const NavPanel = () => {
    return (
        <div className='navPanel_content'>
            <div className="navPanel_header">
                <div className='navPanel_leftBlock'>
                    <div className='navPanel_navPanelItem'><Logo/></div>
                    <div className='navPanel_navPanelItem'><Location/></div>
                </div>
                <div className='navPanel_rightBlock'>
                    <div className='navPanel_navPanelItem'><LanguageSwitcher/></div>
                    <div className='navPanel_navPanelItem'><NavCart/></div>
                    <div className='navPanel_navPanelItem'><AvatarButton/></div>
                </div>
            </div>
        </div>
    );
};

export default NavPanel;