import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-runner',
  templateUrl: 'runner.html'
})
export class RunnerPage {

  constructor(public navCtrl: NavController) {
  }  goToCamera(params) {
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }
}
