import express from 'express';
import { getVideo } from '../controllers/video/getVideo.js';

const videoRouter = express.Router();

videoRouter.get('/get', getVideo);

export default videoRouter;
