import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Run} from "../../models/Run";
import {RunServiceProvider} from "../../providers/run-service/run-service";


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private runs : Run[];

  constructor(public navCtrl: NavController, private runServiceProvider:RunServiceProvider) {
    this.runServiceProvider.getRuntypes().then((runs) => this.runs = runs);
  }


}
