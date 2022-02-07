import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DrawerHeader } from '../DrawerHeader/DrawerHeader';


const drawerWidth = 270;

const MainContainer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

export default function Main(props) {
    const { open } = props;

    return (
        <MainContainer open={open}>
            <DrawerHeader />
            <Box sx={{ paddingLeft: 35 }}>
                {props.children}
            </Box>
        </MainContainer>
    );
}
