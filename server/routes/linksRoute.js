import express from 'express';
import { parseLinks } from '../controllers/links/parseLinks.js';

const videoRouter = express.Router();

videoRouter.get('/parse', parseLinks);

export default videoRouter;