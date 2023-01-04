import express from 'express';
import thumbImage from '../../process/imageProcess';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query['filename'];
  if (filename) {
    try {
      await thumbImage(
        req.query['filename'] as string,
        req.query['width'] as string,
        req.query['height'] as string
      ).then((data) => {
        if (data) res.sendFile(data.filename, { root: data.url });
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return res.status(400).send('filename is required');
  }
});

export default images;
