import fs from 'fs';
import thumbImage from '../../app/process/imageProcess';
import fileExist from '../../utility/fileExist';



describe('imageProcess test', ():void => {
  it('gets image process ', async (): Promise<void> => {
    const path = `./src/assets/thumb/fjord-200-200.thumb.png`;
    if (fileExist(path)) {
      fs.unlinkSync(path);
    }
    expect(fileExist(path)).toBeFalse;
    await thumbImage('fjord', 200, 200);
    expect(fileExist(path)).toBeTrue;
  });
});
