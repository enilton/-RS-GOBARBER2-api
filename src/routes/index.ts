import { Router } from 'express';

import defaultRouter from './default.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/', defaultRouter);

routes.use('/appointments', appointmentsRouter);

export default routes;