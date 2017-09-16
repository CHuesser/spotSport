import { Component } from '@angular/core';
import {CameraPage} from "../../pages/camera/camera";
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CameraButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'camera-button',
  templateUrl: 'camera-button.html'
})
export class CameraButtonComponent {


  constructor(private navCtrl:NavController) {
  }

  goToCamera(params){
    this.navCtrl.push(CameraPage);
  }

}
