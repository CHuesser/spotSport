import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { RunnerPage } from '../runner/runner';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  constructor(public navCtrl: NavController) {
  }

}
