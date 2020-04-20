import express from 'express';

import defaultRouter from './routes/default.routes';
import appointmentsRouter from './routes/appointments.routes';

const app = express();

app.use(express.json);

app.use('/', defaultRouter);

app.use('/appointments', appointmentsRouter);

app.listen(3333, () => {
  console.log('started at port 3333');
});
