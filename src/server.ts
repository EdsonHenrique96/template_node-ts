import express from 'express';
import cookieParsr from 'cookie-parser';
import routes from './routes';

const api = express();

api.use(cookieParsr());
api.use(express.json());
api.use(routes);

api.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
