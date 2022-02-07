import React from 'react';
import Main from '../Containers/Main';

export default function Users(props) {
    const { openDrawer } = props;

    return (
        <Main open={openDrawer}>
            <p>Hola mundo</p>
        </Main>
    );
}