import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import { Reservation } from './../../controllers/reservations/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http:Http) { }

  serverUrl = 'http://www.menageadultclub.com:8080/bookinginquiry-service-uat/BookingInquiryServices/';
  //serverUrl = 'http://localhost:8080/bookinginquiry-service/BookingInquiryServices/';

  addNewReservation(reservation: Reservation): Observable<any>{
    let url = this.serverUrl + "createInquiry"; 
    //console.log(reservation);
    return this.http.post(url, reservation)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleErrorObservable));
  }

  getContactTimes() {
    let url = this.serverUrl + "getContactTimes";
    return this.http.get(url)
      .pipe(map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      ));
  }

  getInquiryTypes() {
    let url = this.serverUrl + "getInquiryTypes";
    return this.http.get(url)
      .pipe(map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      ));
  }

  extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  handleErrorPromise ( error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error)
  }
}
