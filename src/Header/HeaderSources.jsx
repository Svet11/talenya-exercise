import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function HeaderSources() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant='contained'
                color='primary'
            >
                Sources
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    YouTube
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Instagram
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Vimeo
                </MenuItem>
            </Menu>
        </>
    );
}
