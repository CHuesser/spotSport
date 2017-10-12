import { Injectable } from '@angular/core';

/*
  Generated class for the EnvoirmentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvoirmentServiceProvider {

  getBaseUrl(){
    return 'http://46.102.152.131:8080/';
  }

}
