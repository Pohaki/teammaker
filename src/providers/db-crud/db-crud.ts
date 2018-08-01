import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DbCrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbCrudProvider {
  results: any = [];

  constructor(public http: HttpClient, private sqlite: SQLite) {
    console.log('Hello DbCrudProvider Provider');
  }

  //Create Database And Table 
  createDb(){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        //Create Table games then teams with foreign key on games
        db.executeSql('CREATE TABLE IF NOT EXISTS games (game_id INTEGER PRIMARY KEY AUTOINCREMENT, creation_date DATE NOT NULL, update_date DATE NOT NULL, name VARCHAR(100),type VARCHAR(255) NOT NULL, description TEXT )',[])
          .then(res => console.log(res))
          .catch(e => console.log(e));;
        db.executeSql('CREATE TABLE IF NOT EXISTS teams (team_id INTEGER PRIMARY KEY AUTOINCREMENT, creation_date DATE NOT NULL, update_date DATE NOT NULL, name VARCHAR(100),data JSON NOT NULL, FOREIGN KEY(game_id) REFERENCES games(game_id), is_fav BOOLEAN DEFAULT FALSE)',[])
          .then(res => console.log(res))
          .catch(e => console.log(e));;
    })
  }
  //Insert of a Team 
  addTeam(data: Array<any>){
    //[creation_date,update_date,name,data,game_id,is_fav]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO teams (creation_date,update_date,name,data,game_id,is_fav) VALUES (?,?,?,?,?,?)', data)
          .then(res => {
            this.results = [];
            this.results.push({result: true});
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Update a Team
  updateTeam(data: Array<any>){
    //[update_date,name,data,game_id,team_id]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE teams SET update_date=?, name=?, data=?, game_id=? WHERE team_id=?',data)
          .then(res => {
            this.results = [];
            this.results.push({result: true});
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Delete a Team 
  deleteTeam(team_id){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM teams WHERE team_id=?',[team_id])
          .then(res => {
            this.results = [];
            this.results.push({result: true});
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }
  
  //Update a Team with Fav 
  updateTeamToFav(data){
    //[update_date,team_id]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE teams SET update_date=?, is_fav=true WHERE team_id=?',data)
          .then(res => {
            this.results = [];
            this.results.push({result: true});
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }
  //Delete a fav on a Team
  deleteFav(data){
    //[update_date,team_id]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE teams SET update_date=?, is_fav=false WHERE team_id=?',data)
          .then(res => {
            this.results = [];
            this.results.push({result: true});
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Select all Teams
  getAllTeams(){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM teams',[])
        .then(res => {
          this.results = [];
          for(var i = 0; i < res.rows.length; i++){
            this.results.push({
              team_id : res.rows.item(i).team_id,
              creation_date : res.rows.item(i).creation_date,
              update_date : res.rows.item(i).update_date,
              name : res.rows.item(i).name,
              data : res.rows.item(i).data,
              game_id : res.rows.item(i).game_id,
              is_fav : res.rows.item(i).is_fav
            });
          }
        }).catch(e => {
          this.results = [];
          this.results.push({result: false});
          console.log(e)
        });
    })
  }

  //Select teams with filters 
  getTeamsByFilter(filters){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('',[])
          .then(res => {})
          .catch(e => console.log(e));
    })
  }

  //Select on teams names
  getTeamsByName(name){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM teams WHERE name LIKE "%?%"',[name])
          .then(res => {
            this.results = [];
            for(var i = 0; i < res.rows.length; i++){
              this.results.push({
                team_id : res.rows.item(i).team_id,
                creation_date : res.rows.item(i).creation_date,
                update_date : res.rows.item(i).update_date,
                name : res.rows.item(i).name,
                data : res.rows.item(i).data,
                game_id : res.rows.item(i).game_id,
                is_fav : res.rows.item(i).is_fav
              });
            }
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Select on teams names
  getTeamsById(team_id){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM teams WHERE team_id=?',[team_id])
          .then(res => {
            this.results = [];
            for(var i = 0; i < res.rows.length; i++){
              this.results.push({
                team_id : res.rows.item(i).team_id,
                creation_date : res.rows.item(i).creation_date,
                update_date : res.rows.item(i).update_date,
                name : res.rows.item(i).name,
                data : res.rows.item(i).data,
                game_id : res.rows.item(i).game_id,
                is_fav : res.rows.item(i).is_fav
              });
            }
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }
  //Insert of a game 
  addGame(data){
    //[creation_date,update_date,name,type,description]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO games (creation_date,update_date,name,type,description) VALUES (?,?,?,?,?)',[data])
          .then(res => {})
          .catch(e => console.log(e));
    })
  }

  //Update of a Game 
  updateGame(data){
    //[update_date,name,type,description,game_id]
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('UPDATE games SET update_date=?, name=?, type=?, description=? WHERE game_id=?',[data])
          .then(res => {})
          .catch(e => console.log(e));
    })
  }

  //Delete of a Game 
  deleteGame(game_id){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM games WHERE game_id=?',[game_id])
          .then(res => {})
          .catch(e => console.log(e));
    })
  }

  //Select all games
  getAllGames(){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM games',[])
          .then(res => {
            this.results = [];
            for(var i = 0; i < res.rows.length; i++){
              this.results.push({
                game_id : res.rows.item(i).game_id,
                creation_date : res.rows.item(i).creation_date,
                update_date : res.rows.item(i).update_date,
                name : res.rows.item(i).name,
                type : res.rows.item(i).type,
                description : res.rows.item(i).description
              });
            }
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Select game by name
  getGamesByName(name){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM games WHERE name LIKE "%?%"',[name])
          .then(res => {
            this.results = [];
            for(var i = 0; i < res.rows.length; i++){
              this.results.push({
                game_id : res.rows.item(i).game_id,
                creation_date : res.rows.item(i).creation_date,
                update_date : res.rows.item(i).update_date,
                name : res.rows.item(i).name,
                type : res.rows.item(i).type,
                description : res.rows.item(i).description
              });
            }
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }

  //Select Game by type
  getGamesByType(type){
    this.sqlite.create({
      name: 'teams.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM games WHERE type=?',[type])
          .then(res => {
            this.results = [];
            for(var i = 0; i < res.rows.length; i++){
              this.results.push({
                game_id : res.rows.item(i).game_id,
                creation_date : res.rows.item(i).creation_date,
                update_date : res.rows.item(i).update_date,
                name : res.rows.item(i).name,
                type : res.rows.item(i).type,
                description : res.rows.item(i).description
              });
            }
          }).catch(e => {
            this.results = [];
            this.results.push({result: false});
            console.log(e)
          });
    })
  }
}
