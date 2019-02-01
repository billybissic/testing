import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ReservationsService } from './../../services/reservations/reservations.service';
import { ReservationInterface } from './../../controllers/reservations/reservation.interface';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';

const moment = _moment; // _rollupMoment || _moment;

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FormBuilder,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class ReservationsComponent implements OnInit {

  reservationsForm: FormGroup = new FormGroup({});
  reservation: ReservationInterface;

  contactTimes: any[] = [];
  reservationTypes: any[] = [];

  constructor(private reservationService: ReservationsService) {}

  ngOnInit() {

    this.reservationsForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      partySize: new FormControl('', Validators.required),
      desiredReservationsDate: new FormControl(moment('YYYY-MM-DD').format('YYYY-MM-DD'), Validators.required),
      desiredReservationsTime: new FormControl('', Validators.required),
      //desiredReservationsTime: new FormControl(moment('HH:mm:ss').format('HH:mm:ss'), Validators.required),
      contactTime: new FormControl('', Validators.required),
      reservationType: new FormControl('', Validators.required)
    });

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
      desiredReservationsDate: 'Select Date',
      desiredReservationsTime: 'Select Time',
      contactTime: '',
      reservationType: ''
    });

    // this.reservationsForm.markAsUntouched;
    // this.reservationsFor m.markAsPristine;
  }

  submitNewReservation() {
    this.reservation = {
      inquiry_id: null,
      first_name: this.reservationsForm.controls['firstName'].value,
      last_name: this.reservationsForm.controls['lastName'].value,
      email_address: this.reservationsForm.controls['email'].value,
      day_phone_number: this.reservationsForm.controls['phone'].value,
      requested_party_size: this.reservationsForm.controls['partySize'].value,
      desired_date:moment(this.reservationsForm.controls['desiredReservationsDate'].value).format('YYYY-MM-DD'),
      desired_time: this.reservationsForm.controls['desiredReservationsTime'].value,
      contact_time_id: this.reservationsForm.controls['contactTime'].value,
      inquiry_type_id: this.reservationsForm.controls['reservationType'].value,
      inquiryStatusId: 1,
      message: null,
      inquiry_timestamp: null
      //confirmation_status: 1
  };

   console.log(this.reservation);
   this.reservationService.addNewReservation(this.reservation)
      .subscribe();

    this.resetReservationForm();
  }
}
