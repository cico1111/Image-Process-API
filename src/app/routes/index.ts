import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.use('/api/images', images);
routes.get('/',(req, res)=>{
    res.sendFile('index.html', {root: __dirname})
})
export default routes;
