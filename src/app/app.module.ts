import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { ListPage } from '../pages/list/list';
import { FavPage } from '../pages/fav/fav';
import { SearchPage } from '../pages/search/search';
import { TeamsPage } from '../pages/teams/teams';
import { DbCrudProvider } from '../providers/db-crud/db-crud';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    ListPage,
    FavPage,
    SearchPage,
    TeamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    ListPage,
    FavPage,
    SearchPage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DbCrudProvider
  ]
})
export class AppModule {}
