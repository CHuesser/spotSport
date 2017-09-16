import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { RunnerPage } from '../runner/runner';

@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {

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
