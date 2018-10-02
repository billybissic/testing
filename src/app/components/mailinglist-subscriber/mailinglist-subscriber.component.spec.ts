import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailinglistSubscriberComponent } from './mailinglist-subscriber.component';

describe('MailingSubscriberComponent', () => {
  let component: MailinglistSubscriberComponent;
  let fixture: ComponentFixture<MailinglistSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailinglistSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailinglistSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
