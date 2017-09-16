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
  athAll : Athlete[] = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, private athleteServiceProvider:AthleteServiceProvider, private userServiceProvider:UserServiceProvider, private navParams:NavParams) {
    if(this.navParams.data) {
      this.athleteServiceProvider.getAthletes().subscribe((athletes) => {
        var ath = JSON.parse(athletes._body)._embedded.athletes;
        ath.map((u) => u.user = this.userServiceProvider.getRandomUser())
        this.athletes = ath;
        this.athAll = ath;
      });
    }else{
      var ath = this.navParams.data.athletes;
      ath.map((u) => u.user = this.userServiceProvider.getRandomUser())
      this.athletes = ath;
      this.athAll = ath;
    }
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.athletes = this.athAll;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.athletes = this.athletes.filter((athlete) => {
        return (athlete.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (athlete.startNr.toString().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToRunnerDetail(params){
    if (!params) params = {};
    this.navCtrl.push(RunnerDetailPage, params);
  }
}
