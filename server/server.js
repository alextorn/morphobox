import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'kcors';
// import koaBody from 'koa-body';
import { routes, allowedMethods } from './routes';
import config from './config';

const app = new Koa();

app
  .use(logger())
  .use(cors())
  // .use(koaBody())
  .use(routes())
  .use(allowedMethods())
  .listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at http://localhost: ${config.port}`);
  });
