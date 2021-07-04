import startSocket from '../websockets/server';
import app from './app';

startSocket(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening the port ${port}`);
});
