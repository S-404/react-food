import React from 'react';
import Logo from "../logo/Logo";
import Location from "../location/Location";
import NavCart from "./cart/NavCart";
import AvatarButton from "./avatar/AvatarButton";
import './navPanel.scss'
import NavMenuButton from "./menu/NavMenuButton";

const NavPanel = () => {
    return (
        <div className='navPanel__content'>
            <div className="navPanel__header">
                <div className='navPanel__leftBlock'>
                    <div className='navPanel__navPanelItem'><Logo/></div>
                    <div className='navPanel__navPanelItem'><NavMenuButton/></div>
                    <div className='navPanel__navPanelItem'><Location/></div>
                </div>
                <div className='navPanel__rightBlock'>
                    <div className='navPanel__navPanelItem'><NavCart/></div>
                    <div className='navPanel__navPanelItem'><AvatarButton/></div>
                </div>
            </div>
        </div>
    );
};

export default NavPanel;