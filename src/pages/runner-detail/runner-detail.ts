import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RandomUser} from "../../models/RandomUser";
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Image} from "../../models/Image";
import {Athlete} from "../../models/Athlete";
import {ImageServiceProvider} from "../../providers/image-service/image-service";
import {EnvoirmentServiceProvider} from "../../providers/envoirment-service/envoirment-service";

/**
 * Generated class for the RunnerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-runner-detail',
  templateUrl: 'runner-detail.html',
})
export class RunnerDetailPage {

  images: Image[] = []
  athlete: Athlete;
  baseUrl: string;

  runs = Math.floor(Math.random() * 50) + 4;
  km = Math.floor(Math.random() * 250) + 5;
  rank = Math.floor(Math.random() * 100) + 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider:UserServiceProvider, private imageServiceProvider:ImageServiceProvider, private envoirmentServiceProvider:EnvoirmentServiceProvider) {
    this.baseUrl = this.envoirmentServiceProvider.getBaseUrl();
    this.athlete = this.navParams.data;
    this.imageServiceProvider.getPictures(this.athlete.id).subscribe((pictures) =>{
      var parsed = JSON.parse(pictures._body)._embedded.pictures;
      parsed.map(i => i.user = userServiceProvider.getRandomUser());
      parsed = parsed.reverse();
      this.images = parsed;

    });

  }

  runner: string = "person";
  ionViewDidLoad() {
    console.log('ionViewDidLoad RunnerDetailPage');
  }

}
