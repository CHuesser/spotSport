import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs";
import {Athlete} from "../../models/Athlete";
import {EnvoirmentServiceProvider} from "../envoirment-service/envoirment-service";

/*
 Generated class for the RecognizeServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class RecognizeServiceProvider {

  recognizeUrl;

  constructor(public http: Http, private envoirmentServiceProvider:EnvoirmentServiceProvider) {
    this.recognizeUrl = this.envoirmentServiceProvider.getBaseUrl() + 'recognize';
  }

  postRecognize(base64: String): Observable<any> {
    var data = JSON.stringify({base64: base64});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.recognizeUrl, {base64: base64}, {headers :headers});
  }

}
