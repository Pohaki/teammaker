import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbCrudProvider } from '../../providers/db-crud/db-crud';
import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  results = [];
  constructor(public navCtrl: NavController, private db: DbCrudProvider) {

  }

  ionViewDidLoad(){
    this.getTeamsList();
  }

  ionViewWillEnter(){
    this.getTeamsList();
  }

  getTeamsList(){
    this.results = this.db.getAllTeams();
  }

  getGameList(){
    this.results = this.db.getAllGames();
  }

  getTeamsByGame(game_id){
    this.results = this.db.getTeamsListByGameId(game_id);
  }

  goToTeam(team_id){
    this.navCtrl.push(TeamsPage,{ team_id: team_id });
  }
}
