import express from 'express';
import routes from './app/routes';

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, ():void => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
