import { TestBed } from '@angular/core/testing';

import { MailinglistSubscriberService } from './mailinglist-subscriber.service';

describe('MailingSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailinglistSubscriberService = TestBed.get(MailinglistSubscriberService);
    expect(service).toBeTruthy();
  });
});
