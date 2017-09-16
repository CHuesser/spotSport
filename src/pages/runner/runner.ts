import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Athlete} from "../../models/Athlete";

/**
 * Generated class for the RunnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-runner',
  templateUrl: 'runner.html',
})
export class RunnerPage {

  private athletes : Athlete[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.athletes = navParams.data.athletes;
    console.log(this.athletes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunnerPage');
  }

}
