import { NgModule, OnInit, NO_ERRORS_SCHEMA} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MomentModule } from 'ngx-moment';
import { ErrorStateMatcher } from '@angular/material/core';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from 'ngx-gallery';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { AmazingTimePickerModule } from 'amazing-time-picker';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MailinglistSubscriberComponent } from './components/mailinglist-subscriber/mailinglist-subscriber.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { MenageTimelineComponent } from './components/menage-timeline/menage-timeline.component';
/* modal types */
import { ModalComponent} from './modals/modal/modal.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { ModalOkCancelComponent } from './modals/modal-ok-cancel/modal-ok-cancel.component';
import { ModalCancelComponent } from './modals/modal-cancel/modal-cancel.component';
import { ModalOkComponent } from './modals/modal-ok/modal-ok.component';
import { ModalVanillaComponent } from './modals/modal-vanilla/modal-vanilla.component';
/* modal templates */
import { ErrorMessageComponent } from './components/modal-templates/error-message/error-message.component';
import { ReadMessageComponent } from './components/modal-templates/read-message/read-message.component';
import { SendMessageComponent } from './components/modal-templates/send-message/send-message.component';
import { DeleteConfirmationComponent } from './components/modal-templates/delete-confirmation/delete-confirmation.component';
import { LoginComponent } from './components/modal-templates/login/login.component';
import { LightboxComponent } from './components/modal-templates/lightbox/lightbox.component';

/* services */
import { ModalCommunicationService } from './services/modal-communication-service/modal-communication.service';
import { EventManagementService } from './services/event-management-service/event-management.service';
import { MailinglistSubscriberService } from './services/mailinglist-subscriber/mailinglist-subscriber.service';
import { ReservationsService } from './services/reservations/reservations.service';
import { ImageCardComponent } from './components/component-templates/image-card/image-card.component';
import { LegalModalComponent } from './menage-modals/legal-modal/legal-modal.component';
import { LegalMessageComponent } from './components/modal-templates/legal-message/legal-message.component';
import { EntertainerCardComponent } from './components/component-templates/entertainer-card/entertainer-card.component';
import { OwnersCardComponent } from './components/component-templates/owners-card/owners-card.component';
import { EntertainersComponent } from './components/entertainers/entertainers.component';
import { ModalAgreeDisagreeComponent } from './modals/modal-agree-disagree/modal-agree-disagree.component';
import { ContentWarningModalComponent } from './menage-modals/content-warning-modal/content-warning-modal.component';
import { ContactComponent } from './components/contact/contact.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { MenageSpecialsComponent } from './components/menage-specials/menage-specials.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    MailinglistSubscriberComponent,
    HomeComponent,
    ReservationsComponent,
    HorizontalTimelineComponent,
    MenageTimelineComponent,
    ModalComponent,
    ModalConfirmComponent,
    ModalOkCancelComponent,
    ModalCancelComponent,
    ModalOkComponent,
    ErrorMessageComponent,
    ReadMessageComponent,
    SendMessageComponent,
    DeleteConfirmationComponent,
    ImageCardComponent,
    LegalModalComponent,
    LegalMessageComponent,
    EntertainerCardComponent,
    OwnersCardComponent,
    EntertainersComponent,
    ModalAgreeDisagreeComponent,
    ContentWarningModalComponent,
    ModalVanillaComponent,
    ContactComponent,
    VerticalTimelineComponent,
    LoginComponent,
    LightboxComponent,
    MenageSpecialsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxGalleryModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FileUploadModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MomentModule,
    AmazingTimePickerModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    ModalCommunicationService,
    MailinglistSubscriberService,
    EventManagementService,
    ReservationsService,
    CookieService,
    ErrorStateMatcher
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ErrorMessageComponent,
    ReadMessageComponent,
    SendMessageComponent,
    DeleteConfirmationComponent,
    LegalModalComponent,
    ContentWarningModalComponent
  ]
})
export class AppModule implements OnInit {

  constructor(private overlayContainer: OverlayContainer) {
  }

  ngOnInit(): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add('theme');
  }

}
