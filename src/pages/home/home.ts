import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbCrudProvider } from '../../providers/db-crud/db-crud';
import { ListPage } from '../list/list';
import { CreatePage } from '../create/create';
import { FavPage } from '../fav/fav';
import { SearchPage } from '../search/search';
import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private db: DbCrudProvider) {

  }

  ionViewDidLoad(){
    this.db.createDb();
    this.db.getAllTeams();
  }

  ionViewWillEnter(){
    this.db.createDb();
    this.db.getAllTeams();
  }

  goToCreate(){
    this.navCtrl.push(CreatePage);
  }
  
  goToList(){
    this.navCtrl.push(ListPage);
  }

  goToFav(){
    this.navCtrl.push(FavPage);
  }

  goToSearch(){
    this.navCtrl.push(SearchPage);
  }
}
