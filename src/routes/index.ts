import { Router } from 'express';

import defaultRouter from './default.routes';
import sessionsRouter from './sessions.routes';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', defaultRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/appointments', appointmentsRouter);

routes.use('/users', usersRouter);

export default routes;