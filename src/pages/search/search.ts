import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbCrudProvider } from '../../providers/db-crud/db-crud';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  results = [];
  constructor(public navCtrl: NavController, private db: DbCrudProvider) {

  }

  getTeamsOrGameByName(name){
    this.results = [];
    this.results.push(this.db.getTeamsByName(name));
    this.results.push(this.db.getGamesByName(name));
  }

  
}
