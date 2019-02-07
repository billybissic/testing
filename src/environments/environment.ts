// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uat: false,
  development: true,
  calendarEventService: "http://localhost:8080/calendar-service/api/CalendarEvents/",
  eventManagementService: "http://localhost:8080/event-management-service/api/EventManagementService/",
  galleryService: 'http://localhost:8080/gallery-service/api/GalleryServices/',
  imageService: 'http://localhost:8080/image-service/api/ImageServices',
  mailingListService: 'http://localhost:8080/mailinglist-service/MailingListServices/',
  mediaDataService: 'http://localhost:8080/mediadata-service/api/MediadataServices/',
  reservationService: 'http://localhost:8080/bookinginquiry-service/BookingInquiryServices/',
  simpleContentService: "http://localhost:8080/content-management-services/api/ContentManagement/"
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
