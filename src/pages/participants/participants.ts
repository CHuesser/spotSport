import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { ImagePage } from '../image/image';
import { RunnerPage } from '../runner/runner';

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  constructor(public navCtrl: NavController) {
  }
  goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }goToImage(params){
    if (!params) params = {};
    this.navCtrl.push(ImagePage);
  }goToRunner(params){
    if (!params) params = {};
    this.navCtrl.push(RunnerPage);
  }
}
