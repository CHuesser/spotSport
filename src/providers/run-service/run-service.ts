import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Run} from "../../models/Run";

/*
  Generated class for the RunServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RunServiceProvider {

  constructor() {
  }

  getRuntypes(): Promise<Run[]> {
    return new Promise((resolve, reject) => resolve([
      {
        "ID": "1",
        "title": "Swiss Management Run",
        "date_day": "15",
        "date_month": "September",
        "location": "Arosa"
      },
      {
        "ID": "2",
        "title": "Greifenseelauf",
        "date_day": "16",
        "date_month": "September",
        "location": "Uster"
      },
      {
        "ID": "3",
        "title": "1020 Run",
        "date_day": "23",
        "date_month": "September",
        "location": "Renens"
      },
      {
        "ID": "4",
        "title": "Run to run de carouge",
        "date_day": "23",
        "date_month": "September",
        "location": ""
      },
      {
        "ID": "5",
        "title": "Course Terry Fox de l’Espoir",
        "date_day": "24",
        "date_month": "September",
        "location": "Genève"
      },
      {
        "ID": "6",
        "title": "IWB Basel Marathon",
        "date_day": "24",
        "date_month": "September",
        "location": ""
      },
      {
        "ID": "7",
        "title": "Brienzerseelauf",
        "date_day": "14",
        "date_month": "October",
        "location": "Bönigen"
      },
      {
        "ID": "8",
        "title": "Ascona-Locarno Run",
        "date_day": "14 + 15",
        "date_month": "October",
        "location": "Locarno"
      },
      {
        "ID": "9",
        "title": "Hallwilerseelauf",
        "date_day": "14",
        "date_month": "October",
        "location": "Beinwil im See"
      },
      {
        "ID": "10",
        "title": "Lausanne Marathon",
        "date_day": "21 + 22",
        "date_month": "October",
        "location": ""
      },
      {
        "ID": "11",
        "title": "Schlosslauf Rapperwil-Jona",
        "date": "22 October",
        "location": ""
      },
      {
        "ID": "12",
        "title": "Muttenzer Herbstlauf",
        "date": "22 October",
        "location": ""
      },
      {
        "ID": "13",
        "title": "Swisscitymarathon-Luzern",
        "date_day": "29",
        "date_month": "October",
        "location": "Luzern"
      },
      {
        "ID": "14",
        "title": "Walliseller Lauf",
        "date_day": "09",
        "date_month": "November",
        "location": "Wallisellen"
      },
      {
        "ID": "15",
        "title": "Night Run Just for Smiles by Elite Group",
        "date_day": "11",
        "date_month": "November",
        "location": "Morges"
      },
      {
        "ID": "16",
        "title": "Allschwiler Klausenlauf",
        "date_day": "03",
        "date_month": "December",
        "location": "Morges"
      },
      {
        "ID": "17",
        "title": "Silvesterlauf Gersau",
        "date_day": "31",
        "date_month": "December",
        "location": ""
      },
      {
        "ID": "18",
        "title": "10km de Payerne",
        "date_day": "04",
        "date_month": "March",
        "location": ""
      },
      {
        "ID": "18",
        "title": "Rotseelauf",
        "date_day": "14",
        "date_month": "April",
        "location": "Ebikon"
      },
      {
        "ID": "19",
        "title": "Zürich Marathon",
        "date_day": "22",
        "date_month": "April",
        "location": "Teamrun & Cityrun"
      },
      {
        "ID": "20",
        "title": "Hasli Night Run",
        "date_day": "25",
        "date_month": "May",
        "location": "Niederhasli"
      }
    ]));
  }
}
