import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';


interface createAppointmentRequest {
    date: Date,
    provider_id: string,
}

class CreateAppointmentService {

    public async execute({ date, provider_id }: createAppointmentRequest): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date);
        const existsAppointment = await appointmentsRepository.findByDate(appointmentDate)
;
        if (existsAppointment){
           throw Error('this appointment is aleread boked');
        }

        const appointment = appointmentsRepository.create({ provider_id, date: appointmentDate });
        await appointmentsRepository.save(appointment);
        return appointment;
    }
}

export default CreateAppointmentService;