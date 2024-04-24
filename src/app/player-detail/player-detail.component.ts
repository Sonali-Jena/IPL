import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})

export class PlayerDetailComponent {
  teamId: string | null = null;
  playerId: any;
  playerDetail: any;
  private teamsUrl = 'http://localhost:3000/teams';
  constructor(private http: HttpClient,private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
  this.teamId = this.route.snapshot.paramMap.get('teamId');
  this.playerId = this.route.snapshot.paramMap.get('playerId');

  this.http.get<any>(`${this.teamsUrl}/${this.teamId}`).subscribe(
    (response) => {
      if (response && response.players && response.players.length > this.playerId) {
        this.playerDetail = response.players[this.playerId];
        console.log(this.playerDetail);
      } else {
        console.error('Player not found');
      }
    },
    (error) => {
      console.error('Error fetching team Detail:', error);
    }
  );
  
}
}
