import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from 'ngx-gallery';
import { RouterModule, Routes } from '@angular/router';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationComponent } from './components/navigation/navigation.component';
/*import { GeolocationComponent } from './components/geolocation/geolocation.component';*/
/*import { PhotogalleryComponent } from './photogallery/photogallery.component';*/
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
/*import { MenageCalendarComponent } from './menage-calendar/menage-calendar.component';*/
import { MailinglistSubscriberComponent } from './components/mailinglist-subscriber/mailinglist-subscriber.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    /*GeolocationComponent,*/
    /*PhotogalleryComponent,*/
    EventTimelineComponent,
    /*MenageCalendarComponent,*/
    MailinglistSubscriberComponent,
    HomeComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxGalleryModule,
    NgbModalModule,
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
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
