import Container from '@mui/material/Container';
import ContentPasteLink from './ContentPasteLink';
import ContentFavourites from './ContentFavourites';
import ContentAddSource from './ContentAddSource';
import ContentHome from './ContentHome';
import ContentAllResults from './ContentAllResults';
import { Routes, Route } from 'react-router-dom';

export default function ContentContainer() {
    return (
        <Container maxWidth="lg">
            <Routes>
            <Route path="/links" element={<ContentPasteLink />} />
            <Route path="/favourites" element={<ContentFavourites />} />
            <Route path="/add-source" element={<ContentAddSource />} />
            <Route path="/all-results" element={<ContentAllResults />} />
            <Route exact path="/" element={<ContentHome />} />
            </Routes>
        </Container>
    );
}