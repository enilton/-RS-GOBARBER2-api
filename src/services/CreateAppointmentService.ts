import { startOfHour } from 'date-fns'

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface CreateAppointmentRequestDTO {
    provider: string,
    date: Date,
}

class CreateAppointmentService {

    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository){
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: CreateAppointmentRequestDTO): Appointment {
        const appointmentDate = startOfHour(date);

        if (this.appointmentsRepository.findByDate(appointmentDate)){
           throw Error('this appointment is aleread boked');
        }

        const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate });
        return appointment;
    }
}

export default CreateAppointmentService;