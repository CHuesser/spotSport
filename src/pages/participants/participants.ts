import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RunnerDetailPage } from '../runner-detail/runner-detail';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  constructor(public navCtrl: NavController) {
  }
  goToRunnerDetail(params){
    if (!params) params = {};
    this.navCtrl.push(RunnerDetailPage);
  }

}
