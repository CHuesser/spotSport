import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RandomUser} from "../../models/RandomUser";
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Image} from "../../models/Image";

/**
 * Generated class for the RunnerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-runner-detail',
  templateUrl: 'runner-detail.html',
})
export class RunnerDetailPage {

  images: Image[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider:UserServiceProvider) {

    this.images.push(new Image());
    this.images.push(new Image());
    this.images.push(new Image());
    
    this.images.map(i => i.user = userServiceProvider.getRandomUser())

  }

  runner: string = "person";
  ionViewDidLoad() {
    console.log('ionViewDidLoad RunnerDetailPage');
  }

}
