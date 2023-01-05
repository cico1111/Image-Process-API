import express from 'express';
import fileExist from '../../../utility/fileExist';
import thumbImage from '../../process/imageProcess';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query['filename'] as string;
  const width = parseInt(req.query['width'] as string);
  const height = parseInt(req.query['height'] as string);
  const thumbFileName = `${filename}-${width}-${height}.thumb.png`
  
  console.log('ParseInt:width', width);

  const path = `./src/assets/thumb/${thumbFileName}`;

  //Chech url params--check the filename in url params
  if (!filename) {
    return res.status(400).send('filename is required');
  }
  //Chech url params--check the width and height in url params
  if (!width || !height) {
    if (width <= 0 || height <= 0) {
      return res.status(400).send('width or height must be positive number, not to be zero or minus number');
    } else {
      return res.status(400).send('width or height is required and should be a positive number');
    }
  }

  // check if the file has been in the cache
  if (fileExist(path)) {
    res.sendFile(thumbFileName, { root: `src/assets/thumb/`});
  } else {
    try {
      await thumbImage(filename, width, height)
      .then( ()=>{
            res.sendFile(thumbFileName,  { root: `src/assets/thumb/`})      }
    
      );
    } catch (error) {
      console.log(error);
    }
  }
});

export default images;
