import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Subscriber } from './../../controllers/subscribers/subscriber';
import { environment} from '../../../environments/environment';

@Injectable()
export class MailinglistSubscriberService {

  constructor(private http:Http) { }

  serverUrl = environment.mailingListService;

  addNewSubscriber(subscriber: Subscriber): Observable<any>{
    console.log("inside service for addNewSubscriber");
    let url = this.serverUrl + "subscribe";
    console.log(subscriber);
    //console.log(url);
    return this.http.post(url, subscriber)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleErrorObservable));
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
