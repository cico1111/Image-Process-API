import fs from 'fs';
import fileExist from '../../utility/fileExist';
import thumbImage from './imageProcess';

describe('imageProcess test', () => {
  it('gets image process ', async () => {
    const path = `./src/assets/thumb/fjord-200-200.thumb.png`;
    if (fileExist(path)) {
      fs.unlinkSync(path);
    }
    expect(fileExist(path)).toBeFalse;
    await thumbImage('fjord', 200, 200);
    expect(fileExist(path)).toBeTrue;
  });
});
