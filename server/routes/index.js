import path from 'path';
import Router from 'koa-router';
import send from 'koa-send';
// import koaBody from 'koa-body';
// import config from '../config';

const router = new Router();

const fakeResponse = () => {
  const result = {
    title: 'Target title',
    cols: [
      { id: '123123123',
        title: 'Axis title',
        showInput: false,
        rows: [
          { id: '1',
            text: 'value'
          },
          { id: '23',
            text: 'value'
          }
        ]
      },
      { id: '3452315234',
        title: 'Axis title',
        showInput: false,
        rows: [
          { id: '32', text: 'value' }
        ]
      }
    ]
  };
  return result;
};

router
  .get('/', async (ctx) => {
    await send(ctx, ctx.path, { root: path.join(__dirname, '../../build/index.html') });
  })
  .get('/assets/:path*', async (ctx) => {
    await send(ctx, ctx.path, { root: path.join(__dirname, '../../build') });
  })
  .get('/:id', async (ctx, next) => {
    const result = await fakeResponse();
    if (result) {
      ctx.body = result;
    } else {
      ctx.status = 204;
    }
  })
  .get('*', async (ctx, next) => {
    await ctx.redirect('/');
  });

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
