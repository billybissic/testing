import { Time } from "@angular/common";

export class Reservation {

    first_name!: string;
    last_name!: string;
    email_address!: string;
    day_phone_number!: string;
    requested_party_size!: number;
    desired_date!: Date;
    desired_time!: Time;
    contact_time_id!: number;
    inquiry_type_id!: number;
    message!: string;

    constructor() {
        

    }
}