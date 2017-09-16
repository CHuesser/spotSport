import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from "rxjs";

/*
 Generated class for the RecognizeServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class RecognizeServiceProvider {

  backend = 'http://localhost:8080/recognize';

  constructor(public http: Http) {
  }

  postRecognize(base64: String): Observable<any> {
    var data = JSON.stringify({base64: base64});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.backend, {base64: base64}, {headers :headers});
  }

}
