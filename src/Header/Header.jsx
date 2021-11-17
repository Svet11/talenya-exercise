import HeaderSearch from './HeaderSearch';
import HeaderLeftMenu from './HeaderLeftMenu';
import { useStyles } from '../styles/useStyles';
import HeaderSources from './HeaderSources';

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerToolbar}>
                <HeaderLeftMenu />
                <HeaderSearch />
                <HeaderSources />
            </div>
        </div>
    );
}