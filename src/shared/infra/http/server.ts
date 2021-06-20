import startSocket from '../websockets/server';
import app from './app';

startSocket(app);

app.listen(4000, () => {
  console.log('Listening the port 4000');
});
