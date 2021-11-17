import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    headerToolbar: {
        justifyContent: 'left',
        display: "flex",
        padding: '1% 5%',
        height: '11vh',
    },
    header: {
      position: 'static',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    navLink: {
        color: 'inherit',
        textDecoration: 'none',
    },
    searchInput: {
        color: '#000 !important',
        padding: '0 20px',
        width: '100%'
    },
    searchButton: {
        backgroundColor: '#dd1f1f !important',
        color: '#fff !important',
        borderRadius: '0 10px 10px 0 !important',
        width: '140px'
    },
    search: {
        position: 'relative',
        margin: '0 auto',
        borderRadius: '10px 10px 10px 10px',
        width: '50vw',
        backgroundColor: 'rgba(100, 100, 100, 0.15)',
        boxShadow: '0px 0px 1px 1px ',
        color: '#fff',
        display: "flex",
        justifyContent: "space-between"
    },
    resultContainer: {
        position: "absolute",
        width: '100%',
        backgroundColor: '#fff',
        top: '100%',
        boxShadow: '0px 10px 20px 0px #202020',
        borderRadius: '5px',
        color: '#000',
        zIndex: '9999',
        overflowY: 'scroll',
        maxHeight: '70vh'
    },
    videoThumb: {
        display: "flex",
        alignItems: "center",
        padding: '20px 0',
        justifyContent: 'space-between',
        textAlign: "center"
    },
    linkField: {
        width: '50vw'
    },
    buttonWatch: {
        marginLeft: '50px !important',
        backgroundColor: '#dd1f1f !important'
    },
    searchLinkContainer: {
        marginTop: '30px'
    }
});
