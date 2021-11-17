import ContentPlayer from './ContentPlayer';
import { Link, useLocation } from 'react-router-dom';

export default function ContentHome() {
    const location = useLocation();

    return (
        <>
            <h1>Enjoy watching your favourite YouTube videos!</h1>
            {location.state ?
                <ContentPlayer id={location.state.item.id.videoId} /> :
                <p>Just type in a search field the name of video you want to find
                    or paste YouTube link (any format is supported) <Link to='/links'>here</Link> </p> }
            <h3>Special for Talenya :)</h3>
        </>
    );
}
