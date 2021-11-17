import { Button, LinearProgress, TextField } from '@mui/material';
import { useStyles } from '../styles/useStyles';
import { useState } from 'react';
import { parseLink } from '../api/api';
import ContentPlayer from "./ContentPlayer";

export default function ContentPasteLink() {
    const [color, setColor] = useState('info');
    const [link, setLink] = useState('');
    const [video, setVideo] = useState('');
    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleWatch = async () => {
        setLoading(true);
        setColor('secondary');
        setDisabled(true);
        const data = await parseLink(link);
        if (data.includes(' ')) {
            setText(data);
            setVideo('');
        } else {
            setVideo(data);
            setText('');
        }
        setLink('');
        setDisabled(false);
        setColor('info');
        setLoading(false);
    }

    const handleChange = (e) => {
        setLink(e.target.value);
    }

    return (
        <>
            <div>
            <h1>
                Paste link to field below and press "Watch"
            </h1>
            <TextField
                label="Paste your link here"
                variant="standard"
                className={classes.linkField}
                autoFocus={true}
                color={color}
                value={link}
                onChange={handleChange}
                disabled={disabled}
            />
            <Button
                variant="contained"
                color="error"
                className={classes.buttonWatch}
                onClick={handleWatch}
            >
                Watch
            </Button>
            </div>
            <div className={classes.searchLinkContainer}>
                {loading ?
                    <LinearProgress />
                    : null }
                {!!video ? <ContentPlayer id={video} /> : <p>{text}</p>}
            </div>
        </>
    );
}
