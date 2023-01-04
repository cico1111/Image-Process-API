import sharp from 'sharp';


const thumbImage = async (filename: string, width: string, height: string) =>{
  try {
    await sharp(`./src/assets/full/${filename}.jpg`)
      .resize(parseInt(width), parseInt(height))
      .toFile(`./src/assets/thumb/${filename}.thumb.png`);      
      return {filename: `${filename}.thumb.png`, url:`src/assets/thumb/`}
  } catch (error) {
    console.log(error);
  }
}

export default thumbImage