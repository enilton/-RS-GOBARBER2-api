import express from 'express';
import routes from './routes';

import 'reflect-metadata';
import './database'

import uploadConfig from './config/upload';

const app = express();
app.use(express.json());
app.use('/avatar', express.static(uploadConfig.directory))
app.use(routes);
app.listen(3333, () => console.log('Server started at por 3333'));