import { Router } from 'express';
import defaultRouter from './default.routes';

const routes = Router();

routes.use('/', defaultRouter);

export default routes;
