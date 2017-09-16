import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { RunnerPage } from '../runner/runner';
import { EventsPage } from '../events/events';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
  }goToEvents(params){
    if (!params) params = {};
    this.navCtrl.push(EventsPage);
  }
}
