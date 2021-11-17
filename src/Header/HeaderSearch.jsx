import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import { useStyles } from '../styles/useStyles';
import { useState } from 'react';
import { getVideos } from '../api/api';
import HeaderSearchQuickResults from './HeaderSearchQuickResults';
import { Link } from 'react-router-dom';

export default function HeaderSearch() {
    const [list, setList] = useState([]);
    const [display, setDisplay] = useState('none');
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handleChange = async (e) => {
        setLoading(true);
        const data = await getVideos(e.target.value);
        setDisplay('block');
        setList([...data]);
        setLoading(false);
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.target.value = '';
        }
    }

    const toggleDisplay = () => {
        setDisplay('none');
    }

    const handleFocus = () => {
        setDisplay('block');
    }

    return (
        <>
            <div className={classes.search}>
                <InputBase
                    className={classes.searchInput}
                    placeholder="Search in YouTube..."
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                    onClick={handleFocus}
                    autoFocus={true}
                />
                <Button className={classes.searchButton}>
                    <Link
                        to='/all-results'
                        className={classes.navLink}
                        state={{list}}
                    >
                        search
                    </Link>
                </Button>

                {list.length ?
                    <HeaderSearchQuickResults
                        display={display}
                        loading={loading}
                        list={list}
                        toggleDisplay={toggleDisplay}
                        setDisplay={setDisplay}
                    />
                    : null}
            </div>
        </>
    );
}
