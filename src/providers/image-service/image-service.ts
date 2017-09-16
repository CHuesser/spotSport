import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {EnvoirmentServiceProvider} from "../envoirment-service/envoirment-service";

/*
  Generated class for the ImageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageServiceProvider {

  picturesUrl;

  constructor(public http: Http, private envoirmentServiceProvider:EnvoirmentServiceProvider) {
    this.picturesUrl = this.envoirmentServiceProvider.getBaseUrl() + 'athletes/';
  }

  getPictures(startNr:number): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.picturesUrl + startNr + '/pictures', {headers :headers});
  }

}
