import sharp from 'sharp';

const thumbImage = async (filename: string, width: number, height: number) => {

  try {
    await sharp(`./src/assets/full/${filename}.jpg`)
      .resize(width, height)
      .toFile(`./src/assets/thumb/${filename}-${width}-${height}.thumb.png`);       
  } catch (error) {
    console.log(error);
  }
};

export default thumbImage;
