import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', (request, response) => {
    return response.json({ message: 'Hello world' })
});

export default defaultRouter;