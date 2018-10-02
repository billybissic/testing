import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationsService } from './../../services/reservations/reservations.service';
import { Reservation } from './../../controllers/reservations/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  providers: [FormBuilder]
})

export class ReservationsComponent implements OnInit {

  reservationsForm: FormGroup = new FormGroup({});
  reservation: Reservation = new Reservation;

  contactTimes: any[] = [];
  reservationTypes: any[] = [];
  
  constructor(private reservationService: ReservationsService) { }

  ngOnInit() {
    this.reservationsForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      partySize: new FormControl('', Validators.required),
      desiredReservationsDate: new FormControl('', Validators.required),
      desiredReservationsTime: new FormControl('', Validators.required),
      contactTime: new FormControl('', Validators.required),
      reservationType: new FormControl('', Validators.required)
    })

    this.reservationService.getContactTimes()
    .subscribe(
      (results: any[]) => {
        this.contactTimes = results
        //console.log(this.contactTimes)
      },
      (error) => console.log(error)
    );

    this.reservationService.getInquiryTypes()
    .subscribe(
      (results: any[]) => {
        this.reservationTypes = results
        //console.log(this.reservationTypes)
      },
      (error) => console.log(error)
    );
  }

  resetReservationForm() {
    this.reservationsForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      partySize: '',
      desiredReservationsDate: '',
      desiredReservationsTime: '',
      contactTime: '',
      reservationType: ''
    });

    this.reservationsForm.markAsUntouched;
    this.reservationsForm.markAsPristine;
  }

  submitNewReservation() {

    this.reservation.first_name = this.reservationsForm.controls['firstName'].value;
    this.reservation.last_name = this.reservationsForm.controls['lastName'].value;
    this.reservation.email_address = this.reservationsForm.controls['email'].value;
    this.reservation.day_phone_number = this.reservationsForm.controls['phone'].value;
    this.reservation.requested_party_size = this.reservationsForm.controls['partySize'].value;
    this.reservation.desired_date = this.reservationsForm.controls['desiredReservationsDate'].value;
    this.reservation.desired_time = this.reservationsForm.controls['desiredReservationsTime'].value;
    this.reservation.contact_time_id = this.reservationsForm.controls['contactTime'].value;
    this.reservation.inquiry_type_id = this.reservationsForm.controls['reservationType'].value;

    this.reservationService.addNewReservation(this.reservation)
      .subscribe();

    this.resetReservationForm();
  }

}
