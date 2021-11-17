import { useEffect, useRef } from 'react';
import { LinearProgress, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles/useStyles';

export default function HeaderSearchQuickResults({ display, loading, list, toggleDisplay, setDisplay }) {
    const classes = useStyles();
    const ref = useRef();

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDisplay('none');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div
            className={classes.resultContainer}
            style={{
                display: display
            }}
            ref={ref}
        >
            {loading ? <LinearProgress/> : null}
            {list.map((item) => {
                return (
                    <Link
                        key={item.id.videoId}
                        className={classes.navLink}
                        onClick={toggleDisplay}
                        to='/'
                        state={{item}}
                    >
                        <ListItem
                            button
                            key={item.id.videoId}
                        >
                            <ListItemText
                                primary={
                                    item.snippet ?
                                        item.snippet.title :
                                        'Something went wrong :( Probably server is off or your API_KEY quota is out'
                                }
                            />
                        </ListItem>
                    </Link>
                )
            })}
        </div>
    );
}
