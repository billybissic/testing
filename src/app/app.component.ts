import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {LegalModalComponent} from './menage-modals/legal-modal/legal-modal.component';
import { CookieService } from 'ngx-cookie-service';
import {ContentWarningModalComponent} from './menage-modals/content-warning-modal/content-warning-modal.component';

import {ModalCommunicationService} from './services/modal-communication-service/modal-communication.service';

import { environment } from '../environments/environment';

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

    // this.cookieService.set( 'AgeVerification', 'Hello World' );
    // this.cookieService.delete('AgeVerification');
    console.log(this.mailingListService);
    console.log(this.cookieValue);
    // this.getSiteDisclaimer();
    // this.isAgeVerified();
  }

  ngAfterViewInit() {
    // this.getSiteDisclaimer();
  }

  constructor(private modalService: NgbModal,
              private modalConfig: NgbModalConfig,
              private cookieService: CookieService,
              private modalCommunicationService: ModalCommunicationService) {}

  isAgeVerified(): boolean {
    const cookieExists: boolean = this.cookieService.check('AgeVerification');
    console.log('Age Verification Boolean');
    console.log(cookieExists);
    let dialogResponse = false;

    if (cookieExists === false) {
      this.modalConfig.backdrop = 'static';
      this.modalConfig.keyboard = false;
      const modalRef = this.modalService.open(ContentWarningModalComponent, {size: 'lg'});
      modalRef.componentInstance.title = 'Content Warning';
      modalRef.componentInstance.documentName = 'ContentWarning';

      // get response from modal service
      // if user disagrees to the content warning redirect to error page
      if (dialogResponse === false) {
        return false;
      }
      // if user agrees to the content warning continue to the site
      if (dialogResponse === true) {
        return true;
      }

    } else {
      // check the age of the cookie, if it is expired delete and create a new cookie
      this.cookieService.delete('AgeVerification');
      const modalRef = this.modalService.open(ContentWarningModalComponent, {size: 'lg'});
      modalRef.componentInstance.title = 'Content Warning';
      modalRef.componentInstance.document = 'ContentWarning';
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
