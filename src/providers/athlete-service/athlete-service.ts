import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {EnvoirmentServiceProvider} from "../envoirment-service/envoirment-service";

/*
  Generated class for the AthleteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AthleteServiceProvider {

  athletesUrl;

  constructor(public http: Http, private envoirmentServiceProvider:EnvoirmentServiceProvider) {
    this.athletesUrl = this.envoirmentServiceProvider.getBaseUrl() + 'athletes';
  }

  getAthletes(): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.athletesUrl, {headers :headers});
  }

}
