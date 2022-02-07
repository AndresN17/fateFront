import React from 'react';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CategoryIcon from '@mui/icons-material/Category';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { DrawerHeader } from '../DrawerHeader/DrawerHeader';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 270;


export default function SideBar(props) {
    const theme = useTheme();
    const navigate = useNavigate();
    const { openDrawer, open } = props;

    const options = [
        { label: 'Dashboards', component: (<AnalyticsIcon />), action: () => navigate('/') },
        { label: 'Usuarios', component: (<GroupsIcon />), action: () => navigate('/usuarios') },
        { label: 'Empresas', component: (<AssuredWorkloadIcon />), action: () => { } },
        { label: 'Locales', component: (<HomeWorkIcon />), action: () => { } },
        { label: 'Categorias', component: (<CategoryIcon />), action: () => { } },
        { label: 'Roles', component: (<PersonAddAlt1Icon />), action: () => { } },
        { label: 'Publicaciones', component: (<NewspaperIcon />), action: () => { } },
        { label: 'Ventas', component: (<AttachMoneyIcon />), action: () => { } },
        { label: 'Reportes', component: (<SummarizeIcon />), action: () => navigate('/reports') },

    ];

    const drawerHeader = (
        <>
            <DrawerHeader>
                <IconButton onClick={openDrawer}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
        </>
    );

    const optionList = (
        <List>
            {options.map((option) => (
                <ListItemButton key={option.label} onClick={option.action}>
                    <ListItemIcon>
                        {option.component}
                    </ListItemIcon>
                    <ListItemText primary={option.label} />
                </ListItemButton>
            ))}
        </List>
    );



    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            {drawerHeader}
            {optionList}
        </Drawer>
    );
}