import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { RunnerPage } from '../runner/runner';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

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
