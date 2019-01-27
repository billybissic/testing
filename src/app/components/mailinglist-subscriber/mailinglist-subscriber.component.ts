import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscriber } from './../../controllers/subscribers/subscriber';
import { MailinglistSubscriberService } from './../../services/mailinglist-subscriber/mailinglist-subscriber.service';

@Component({
  selector: 'app-mailing-subscriber',
  templateUrl: './mailinglist-subscriber.component.html',
  styleUrls: ['./mailinglist-subscriber.component.scss'],
  providers: [FormBuilder]
})
export class MailinglistSubscriberComponent implements OnInit {

  mailingListForm: FormGroup = new FormGroup({});
  subscriber: Subscriber = new Subscriber;

  constructor(private mailinglistSubscriberService: MailinglistSubscriberService) { }

  ngOnInit() {

    this.mailingListForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email])
    });
  }

  resetMailingListForm() {
    this.mailingListForm.setValue({firstName: '',
                                   lastName: '',
                                   birthday: '',
                                   emailAddress: ''});
    /*this.mailingListForm.markAsUntouched;
    this.mailingListForm.markAsPristine;*/
  }

  submitNewSubscriber() {

    this.subscriber.first_name = this.mailingListForm.controls['firstName'].value;
    this.subscriber.last_name = this.mailingListForm.controls['lastName'].value;
    this.subscriber.birth_day = this.mailingListForm.controls['birthday'].value;
    this.subscriber.subscriber_email = this.mailingListForm.controls['emailAddress'].value;

    this.mailinglistSubscriberService.addNewSubscriber(this.subscriber)
      .subscribe();
    this.resetMailingListForm();
  }
}
