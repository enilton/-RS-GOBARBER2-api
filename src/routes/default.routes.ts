import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', (request, response) => {
    return response.json({ message: 'Teste'});
})


export default defaultRouter;