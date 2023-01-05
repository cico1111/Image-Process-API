import fs from 'fs';

const fileExist = (path: string): boolean => {
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

export default fileExist;
