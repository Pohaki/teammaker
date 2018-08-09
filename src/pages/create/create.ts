import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbCrudProvider } from '../../providers/db-crud/db-crud';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  nTeams = 0;
  data = [];  
  teamData = {name: "", data: {}, game_id: 0, is_fav: ""};
  gameData = {name: "", type: "", description: ""};
  constructor(public navCtrl: NavController, private db: DbCrudProvider) {

  }

  randomizeTeams(data: Array<String>){
  
  }

  addElementToTeamsMaker(name: String){
    this.data.push(name);
  }
  
  createTeam(){ 
    this.db.addTeam([this.teamData.name,
                    this.teamData.data,
                    this.teamData.game_id,
                    this.teamData.is_fav]);
  }

  createGame(){
    this.db.addGame([this.gameData.name,
                    this.gameData.type,
                    this.gameData.description]);
  }

  goToRootPage(){
    this.navCtrl.popToRoot();
  }
}
