import express from 'express';
import linksRoute from './server/routes/linksRoute.js';
import videoRouter from './server/routes/videoRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

app.use('/api/video', videoRouter);
app.use('/api/links', linksRoute);
export const apiKey = process.env.API_KEY;
function start() {
    const PORT = process.env.PORT || 5000;
    try {
      app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    } catch (err) {
        console.log(err.message);
    };
}

start();
