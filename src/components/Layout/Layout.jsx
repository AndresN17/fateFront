import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

export default function Layout(props) {
    const { handleClick, openDrawer, handleOpenDrawer } = props;
    return (
        <>
            <Header showSnack={handleClick} open={openDrawer} openDrawer={handleOpenDrawer} />
            <SideBar openDrawer={handleOpenDrawer} open={openDrawer} />
            {props.children}
        </>
    );
}