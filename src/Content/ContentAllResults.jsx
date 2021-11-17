import { Link, useLocation } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';
import { useStyles } from '../styles/useStyles';

export default function ContentAllResults() {
    const location = useLocation();
    const classes = useStyles();

    return (
        <>
            <h1>Searching results: </h1>
            {
                location.state.list.length ?
                    location.state.list.map((item) => {
                        return (
                            <Link
                                to='/'
                                state={{item}}
                                className={classes.navLink}
                            >
                            <ListItem button key={item.id.videoId} >
                                <img
                                    src={item.snippet.thumbnails.medium.url}
                                    alt={item.snippet.title}
                                    style={{marginRight: '50px'}}
                                />
                                <div>
                                <ListItemText primary={item.snippet.title} />
                                <ListItemText primary={`Channel: ${item.snippet.channelTitle}`} />
                                <ListItemText secondary={item.snippet.description} />
                                </div>
                            </ListItem>
                            </Link>
                        )
                    })
                    : null
            }
        </>
    );
}
