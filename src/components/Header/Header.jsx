import React, { useState } from 'react';
import {
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const drawerWidth = 270;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




export default function Header(props) {
    const [posicion, setPosicion] = useState(null);

    const { open, openDrawer } = props;

    const opciones = [
        { label: 'Perfil', icon: (<PersonIcon sx={{ marginRight: 2 }} />), action: () => { props.showSnack(true) } },
        { label: 'Configuracion', icon: (<SettingsIcon sx={{ marginRight: 2 }} />), action: () => { } },
        { label: 'Ayuda', icon: (<HelpOutlineIcon sx={{ marginRight: 2 }} />), action: () => { } },
        { label: 'Salir', icon: (<LogoutIcon sx={{ marginRight: 2 }} />), action: () => { } },
    ];

    const handleOpen = (event) => {
        setPosicion(event.currentTarget);
    };

    const handleClose = () => {
        setPosicion(null);
    };


    const logoControl = (
        <React.Fragment>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={openDrawer}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Fate App
            </Typography>
        </React.Fragment>
    );

    const menuOptions = (
        <div>
            <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
                <NotificationsIcon />
            </Badge>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                sx={{ mt: '44px' }}
                id="menu-appbar"
                anchorEl={posicion}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(posicion)}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
            >
                {opciones.map((opcion) => (
                    <MenuItem key={opcion.label} onClick={opcion.action} sx={{ width: 220, margin: 0 }}>
                        {opcion.icon}
                        <Typography textAlign="center">{opcion.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                {logoControl}
                {menuOptions}
            </Toolbar>
        </AppBar>
    );
}