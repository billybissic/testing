import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {LegalModalComponent} from './menage-modals/legal-modal/legal-modal.component';
import { CookieService } from 'ngx-cookie-service';
import * as _moment from 'moment';
import {ContentWarningModalComponent} from './menage-modals/content-warning-modal/content-warning-modal.component';

import {ModalCommunicationService} from './services/modal-communication-service/modal-communication.service';

import { environment } from '../environments/environment';

const moment = _moment;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'menage-trois';
  private message: string;

  private mailingListService = environment.mailingListService;

  cookieValue = 'UNKNOWN';
  faBars = faBars;
  faTwitter = faTwitter;
  faFB = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faInstagram = faInstagram;

  ngOnInit(): void {
    this.modalCommunicationService.currentMessage
      .subscribe( message => this.message = message );
    console.log(this.mailingListService);

    // this.getSiteDisclaimer();
    this.isAgeVerified();
  }

  ngAfterViewInit() {
    // this.getSiteDisclaimer();
  }

  constructor(private modalService: NgbModal,
              private modalConfig: NgbModalConfig,
              private cookieService: CookieService,
              private modalCommunicationService: ModalCommunicationService) {}

  isAgeVerified(): void {
    const ageVerificationExists: boolean = this.cookieService.check('agVerified');
    const verificationExpirationExists: boolean = this.cookieService.check('verificationExpiration');

    if (ageVerificationExists) {
      console.log('Verification exists, checking expiration');
      if (verificationExpirationExists) {
        console.log('Expiration exits. Checking to see if current time is beyond expiration date.');
        const verificationExpiration: string = this.cookieService.get('verificationExpiration');
        const currentDate: string = moment().format('YYYY-MM-DD');
        const dateA = new Date(verificationExpiration);
        const dateB = new Date(currentDate);
        console.log('dateA:' + dateA);
        console.log('dateB:' + dateB);
        if (dateB <= dateA) {
          console.log('Verification date is good.');
          // do nothing, go to the site
        } else {
          console.log('Verification date is bad.');
          window.location.href = 'http://www.menageadultclub.com';
        }
      }
    } else {
      console.log('Age verification not found sending back to gate!');
      window.location.href = 'http://www.menageadultclub.com';
    }
  }

  getTermsOfService(): void {
    const modalRef = this.modalService.open(LegalModalComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Terms of Service';
    modalRef.componentInstance.documentName = 'TermsOfService';
  }

  getPrivacyPolicy(): void {
    const modalRef = this.modalService.open(LegalModalComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Privacy Policy';
    modalRef.componentInstance.documentName = 'PrivacyPolicy';
  }

  getSiteDisclaimer(): void {
    const modalRef = this.modalService.open(LegalModalComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Site Disclaimer';
    modalRef.componentInstance.documentName = 'Disclaimer';
  }

  getContentWarning(): void {
    const modalRef = this.modalService.open(LegalModalComponent, {size: 'lg'});
    modalRef.componentInstance.title = 'Content Warning';
    modalRef.componentInstance.documentName = 'ContentWarning';
  }
}
