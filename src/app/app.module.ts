import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { IndividualTeamComponent } from './teams/team-list/individual-team/individual-team.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { PlayersComponent } from './players/players.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamListComponent,
    IndividualTeamComponent,
    TeamDetailComponent,
    PlayersComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
