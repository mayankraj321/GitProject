import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams:Team[];

  constructor() { 
    this.teams=[new Team('Team1','This is team number 1','http://www.callfordog.com/asset/images/8751dog-for-sale.png'),
    new Team('2','This is team number 2','http://www.callfordog.com/asset/images/8751dog-for-sale.png'),
    new Team('Team3','This is team number 3','http://www.callfordog.com/asset/images/8751dog-for-sale.png')];

  }

  ngOnInit(): void {
  }

}
