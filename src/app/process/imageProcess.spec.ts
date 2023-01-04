import thumbImage from './imageProcess';

describe('imageProcess test', () => {
  it('gets imageProcess filename and url', async () => {
    const imgFile = await thumbImage('fjord', '200', '200');
    expect(imgFile).toEqual({
      filename: 'fjord.thumb.png',
      url: `src/assets/thumb/`,
    });
  });
});
