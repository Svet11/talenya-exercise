export const parseLinks = async (req, res) => {
    try {
        let {link} = req.query;
        link = link.replace('%3F', '?');
        link = link.replace('%3D', '=');
        link = link.replace('%26', '&');
        link = link.replace('/v/', 'watch?v=');

        if (link.includes('watch?v=')) {
            const index = link.indexOf('watch?v=');
            link = link.slice(index);
            link = link.replace('watch?v=', '');
            const indexQ = link.indexOf('&');
            if (indexQ > 0) {
                link = link.substring(0, indexQ);
            }
            const indexX = link.indexOf('#');
            if (indexX > 0) {
                link = link.substring(0, indexX);
            }
            const indexY = link.indexOf('?');
            if (indexY > 0) {
                link = link.substring(0, indexY);
            }
        } else if (link.includes('youtu.be/')) {
            const index = link.indexOf('youtu.be/');
            link = link.slice(index);
            link = link.replace('youtu.be/', '');
            const indexQ = link.indexOf('&');
            if (indexQ > 0) {
                link = link.substring(0, indexQ);
            }
            const indexX = link.indexOf('#')
            if (indexX > 0) {
                link = link.substring(0, indexX);
            }
            const indexY = link.indexOf('?')
            if (indexY > 0) {
                link = link.substring(0, indexY);
            }
        } else {
            link = 'Something went wrong :( Are you sure that it is YouTube video link?'
        }
        res.status(200).send(link);
    } catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
}