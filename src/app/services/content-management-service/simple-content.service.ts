import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SimpleContent} from '../../controllers/content/simple-content';


@Injectable({
  providedIn: 'root'
})
export class SimpleContentService {

  constructor(private http: Http ) { }

  // mongoUrl = 'http://cs1.menageadultclub.com:8080/content-management-services/api/ContentManagement/';
  mongoUrl = 'http://localhost:8080/content-management-services/api/ContentManagement/';

  getSimpleContentById(_id: string) {
    const url = `${this.mongoUrl}getSimpleContentById/${_id}`;

    console.log(url);

    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getSimpleContentByDocumentName(documentName: string): Observable<any> {
    const url = this.mongoUrl + 'getSimpleContentByDocumentName?documentName=' + documentName;
    console.log(url);

    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  updateSimpleContentDocument(document: SimpleContent): Observable<any>{
    const url = this.mongoUrl + 'updateSimpleContentDocument';

    console.log(document);
    return this.http.post(url, document)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  createSimpleContentDocument(document: SimpleContent): Observable<any>{
    const url = this.mongoUrl + 'createNewSimpleContentDocument';

    console.log(document);
    return this.http.post(url, document)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  deleteSimpleContentById(_id: string) {
    const url = `${this.mongoUrl}deleteSimpleContentById/{_id}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  handleErrorPromise ( error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error)
  }
}