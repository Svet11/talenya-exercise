import YouTube from 'react-youtube';

export default function ContentPlayer({ id }) {
    const opts = {
        height: '570',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <YouTube
                videoId={id}
                opts={opts}
            />
        </>
    );
}
