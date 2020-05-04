import { getRepository } from  'typeorm';
import { hash } from 'bcryptjs';
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

            const hashedPassword = await hash(password,8);

            const user = await usersRepository.create({
                name, email, password: hashedPassword
            });

            return await usersRepository.save(user);

        }
}