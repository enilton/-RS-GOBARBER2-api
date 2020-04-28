import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';


class CreateAppointmentService {

    public async execute({ date, provider }: Omit<Appointment,'id'>): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date);

        if (await appointmentsRepository.findByDate(appointmentDate)){
           throw Error('this appointment is aleread boked');
        }

        const appointment = await appointmentsRepository.create({ provider, date: appointmentDate });
        await appointmentsRepository.save(appointment);
        return appointment;
    }
}

export default CreateAppointmentService;