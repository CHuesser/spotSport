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
        "date": "15 September",
        "location": "Arosa"
      },
      {
        "ID": "2",
        "title": "Greifenseelauf",
        "date": "16 September",
        "location": "Uster"
      },
      {
        "ID": "3",
        "title": "1020 Run",
        "date": "23 September",
        "location": "Renens"
      },
      {
        "ID": "4",
        "title": "Run to run de carouge",
        "date": "23 September",
        "location": ""
      },
      {
        "ID": "5",
        "title": "Course Terry Fox de l’Espoir",
        "date": "24 September",
        "location": "Genève"
      },
      {
        "ID": "6",
        "title": "IWB Basel Marathon",
        "date": "24 September",
        "location": ""
      },
      {
        "ID": "7",
        "title": "Brienzerseelauf",
        "date": "14 October",
        "location": "Bönigen"
      },
      {
        "ID": "8",
        "title": "Ascona-Locarno Run",
        "date": "14 + 15 October",
        "location": "Locarno"
      },
      {
        "ID": "9",
        "title": "Hallwilerseelauf",
        "date": "14 October",
        "location": "Beinwil im See"
      },
      {
        "ID": "10",
        "title": "Lausanne Marathon",
        "date": "21 + 22 October",
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
        "date": "29 October",
        "location": "Luzern"
      },
      {
        "ID": "14",
        "title": "Walliseller Lauf",
        "date": "05 November",
        "location": "Wallisellen"
      },
      {
        "ID": "15",
        "title": "Night Run Just for Smiles by Elite Group",
        "date": "11 November",
        "location": "Morges"
      },
      {
        "ID": "16",
        "title": "Allschwiler Klausenlauf",
        "date": "03 December",
        "location": "Morges"
      },
      {
        "ID": "17",
        "title": "Silvesterlauf Gersau",
        "date": "31 December",
        "location": ""
      },
      {
        "ID": "18",
        "title": "10km de Payerne",
        "date": "04 March",
        "location": ""
      },
      {
        "ID": "18",
        "title": "Rotseelauf",
        "date": "14 April",
        "location": "Ebikon"
      },
      {
        "ID": "19",
        "title": "Zürich Marathon",
        "date": "22 April",
        "location": "Teamrun & Cityrun"
      },
      {
        "ID": "20",
        "title": "Hasli Night Run",
        "date": "25 May",
        "location": "Niederhasli"
      }
    ]));
  }
}
