import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Run } from "../../models/Run";
import { RunServiceProvider } from "../../providers/run-service/run-service";
import { ParticipantsPage } from '../participants/participants';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private runs : Run[];

  private title;

  constructor(public navCtrl: NavController, private runServiceProvider:RunServiceProvider, private navParams:NavParams) {
    this.title = navParams.data.title;
    this.runServiceProvider.getRuntypes().then((runs) => this.runs = runs);
  }

  goToParticipants(params){
    if (!params) params = {};
    this.navCtrl.push(ParticipantsPage);
  }


}
