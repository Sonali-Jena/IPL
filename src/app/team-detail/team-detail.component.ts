import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})
export class TeamDetailComponent {

  id: string | null = null;
  teamDetail: any;
  topBatsman: any | undefined;
  topBowler: any | undefined;
  
  championshipWonCount: number = 0;
  private teamsUrl = 'http://localhost:3000/teams';
  constructor(private http: HttpClient,private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`${this.teamsUrl}/${this.id}`).subscribe(
      (response) => {
        this.teamDetail = response;
        this.calculateTopBatsman();
        this.calculateTopBowler();
        this.calculateChampionshipWonCount();
      },
      (error) => {
        console.error('Error fetching team Detail:', error);
      }
    );
  }
  navigateToPlayerDetail(playerIndex: number): void {
    this.router.navigate(['/playerDetail', this.id, playerIndex]);
  }


  calculateTopBatsman(): void {
    if (this.teamDetail) {
      this.topBatsman = this.teamDetail.players.reduce((prev: any | null, current: any) => {
        if (current.role === 'Batsman' && (!prev || parseFloat(current.price) > parseFloat(prev.price))) {
          return current;
        }
        return prev;
      }, null);
    }
  }

  calculateTopBowler(): void {
    if (this.teamDetail) {
      this.topBowler = this.teamDetail.players.reduce((prev: any | null, current: any) => {
        if (current.role === 'Bowler' && (!prev || parseFloat(current.price) > parseFloat(prev.price))) {
          return current;
        }
        return prev;
      }, null);
    }
  }

  calculateChampionshipWonCount(): void {
    // Logic to calculate championship won count based on your business logic
    // For example, you can count the number of times the team has won the championship from a separate API or based on specific conditions in your data.
    // For demonstration purposes, let's assume the count is 3 for Mumbai Indians and 2 for Chennai Super Kings
    if (this.teamDetail && this.teamDetail.name === 'Mumbai Indians') {
      this.championshipWonCount = 3;
    } else if (this.teamDetail && this.teamDetail.name === 'Chennai Super Kings') {
      this.championshipWonCount = 2;
    }
  }
}
