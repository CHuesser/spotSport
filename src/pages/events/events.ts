import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParticipantsPage } from '../participants/participants';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  constructor(public navCtrl: NavController) {
  }goToParticipants(params){
    if (!params) params = {};
    this.navCtrl.push(ParticipantsPage);
  }


}
