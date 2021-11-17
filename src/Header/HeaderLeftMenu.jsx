import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../styles/useStyles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function HeaderLeftMenu() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const sources = [
        {
            text: 'Home',
            link: '/',
            icon: <HomeOutlinedIcon />
        },
        {
            text: 'Find by Link',
            link: '/links',
            icon: <AddLinkOutlinedIcon />
        },
        {
            text: 'Favourites',
            link: '/favourites',
            icon: <ThumbUpOutlinedIcon />
        },
        {
            text: 'Add Source',
            link: '/add-source',
            icon: <AddOutlinedIcon />
        }
    ]

    const list = (sources) => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {sources.map((item) => (
                    <NavLink
                        className={classes.navLink}
                        to={item.link}
                        key={item.text}
                    >
                        <ListItem button key={item.text}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {list(sources)}
            </Drawer>
        </>
    );
}
