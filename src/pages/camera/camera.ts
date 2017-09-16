import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { RunnerPage } from '../runner/runner';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  constructor(public navCtrl: NavController) {
  }
  goToImage(params){
    if (!params) params = {};
    this.navCtrl.push(ImagePage);
  }goToCamera(params){
    if (!params) params = {};
    this.navCtrl.push(CameraPage);
  }goToRunner(params){
    if (!params) params = {};
    this.navCtrl.push(RunnerPage);
  }
}
