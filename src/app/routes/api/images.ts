import express from 'express';
import checkUrl from '../../../utility/checkUrl';
import fileExist from '../../../utility/fileExist';
import thumbImage from '../../process/imageProcess';

const images = express.Router();

images.get('/', async (req, res):Promise<void> => {
  const filename = req.query['filename'] as string;
  const width = parseInt(req.query['width'] as string);
  const height = parseInt(req.query['height'] as string);

  const thumbFileName = `${filename}-${width}-${height}.thumb.png`;

  // use checkUrl function to check the params of url
  //if right , function return '', if wrong ,return error message
  const message = checkUrl(
    filename,
    req.query['width'] as string,
    req.query['height'] as string
  );

  // if message = '' , means url params have no problem
  if (!message) {
    const path = `./src/assets/thumb/${thumbFileName}`;
    // check if the file has been in the cache
    if (fileExist(path)) {
      res.sendFile(thumbFileName, { root: `src/assets/thumb/` });
    } else {
      try {
        await thumbImage(filename, width, height).then(():void => {
          res.sendFile(thumbFileName, { root: `src/assets/thumb/` });
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    res.status(400).send(message);
  }
});

export default images;
