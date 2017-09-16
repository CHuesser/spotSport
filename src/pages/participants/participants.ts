import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { RunnerDetailPage } from '../runner-detail/runner-detail';
import {Athlete} from "../../models/Athlete";
import {AthleteServiceProvider} from "../../providers/athlete-service/athlete-service";
import {UserServiceProvider} from "../../providers/user-service/user-service";

@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  athletes : Athlete[] = [];

  constructor(public navCtrl: NavController, private athleteServiceProvider:AthleteServiceProvider, private userServiceProvider:UserServiceProvider, private navParams:NavParams) {
    if(this.navParams.data) {
      this.athleteServiceProvider.getAthletes().subscribe((athletes) => {
        var ath = JSON.parse(athletes._body)._embedded.athletes;
        ath.map((u) => u.user = this.userServiceProvider.getRandomUser())
        this.athletes = ath;
      });
    }else{
      var ath = this.navParams.data.athletes;
      ath.map((u) => u.user = this.userServiceProvider.getRandomUser())
      this.athletes = ath;
    }
  }
  goToRunnerDetail(params){
    if (!params) params = {};
    this.navCtrl.push(RunnerDetailPage, params);
  }
}
