import { getRepository } from  'typeorm';
import User from '../models/User'

interface RequestCreateUser {
    name:string,
    email:string,
    password:string,
}

export default class CreateUserSerivice {

        async execute({ name, email, password}: RequestCreateUser):Promise<User>{
            const usersRepository = getRepository(User);

            const checkUserExists = await usersRepository.findOne({
                where: { email }
            });

            if (checkUserExists){
                throw new Error('Email address alread used');
            }

            const user = await usersRepository.create({
                name, email, password
            });

            return await usersRepository.save(user);

        }
}