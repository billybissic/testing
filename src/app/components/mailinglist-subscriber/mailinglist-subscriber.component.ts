import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Subscriber } from './../../controllers/subscribers/subscriber';
import { MailinglistSubscriberService } from './../../services/mailinglist-subscriber/mailinglist-subscriber.service';
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
  selector: 'app-mailing-subscriber',
  templateUrl: './mailinglist-subscriber.component.html',
  styleUrls: ['./mailinglist-subscriber.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [FormBuilder,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})
export class MailinglistSubscriberComponent implements OnInit {

  threshhold: string;
  ageCheckResults: string;
  subscriber: Subscriber = new Subscriber;

  constructor(private mailinglistSubscriberService: MailinglistSubscriberService,
              private snackBar: MatSnackBar) { }

  mailingListForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthday: new FormControl(moment('YYYY-MM-DD').format('YYYY-MM-DD'), [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit() {
  }

  resetMailingListForm() {
    this.mailingListForm.setValue({firstName: '',
                                   lastName: '',
                                   birthday: '',
                                   emailAddress: ''});
  }

  submitNewSubscriber() {

    this.subscriber.firstName = this.mailingListForm.controls['firstName'].value;
    this.subscriber.lastName = this.mailingListForm.controls['lastName'].value;

    let ageCheckResults = this.ageCheck(moment(this.mailingListForm.controls['birthday'].value).format('YYYY-MM-DD'));

    if(ageCheckResults === 0) {
      this.subscriber.birthDay = moment(this.mailingListForm.controls['birthday'].value).format('YYYY-MM-DD');
    } else {
      /* throw error message to user */
      this.openSnackBar('Must be 18 years or older to subscribe.', 'Ok');
      return false;
    }
    this.subscriber.subscriberEmail = this.mailingListForm.controls['emailAddress'].value;

    this.mailinglistSubscriberService.addNewSubscriber(this.subscriber)
      .subscribe();
    this.resetMailingListForm();
  }

  ageThreshhold(){
    this.threshhold = (moment().subtract(18, 'years').format('YYYY-MM-DD'));

    console.log(this.threshhold);
    return this.threshhold;
  }

  demoAgeVerification() {
    let birthday = '2001-10-21';
    this.ageCheck(birthday);
  }

  ageCheck(currentAge: string): number {
    let currentThreshhold = moment(this.ageThreshhold(), "YYYY-MM-DD");
    let birthday = moment(currentAge, "YYYY-MM-DD");

    /******NOTE*******
     * if the result is less than zero the person is under age
     */
    return currentThreshhold.diff(birthday, 'years');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000}
      );
  }
}
