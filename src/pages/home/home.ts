import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import {RunTypesServiceProvider} from "../../providers/run-types-service/run-types-service";
import {RunType} from "../../models/RunType";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private runTypes : RunType[];

  constructor(public navCtrl: NavController, private runTypesServiceProvider:RunTypesServiceProvider) {
    this.runTypesServiceProvider.getRuntypes().then((runTypes => this.runTypes = runTypes));
  }



  goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }

}
