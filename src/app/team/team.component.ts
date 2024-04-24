import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: any[] = [];
  private teamsUrl = 'http://localhost:3000/teams';
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams(): void {
    this.http.get<any>(this.teamsUrl).subscribe(
      (response) => {
        this.teams = response;
        console.log(this.teams);
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  navigateToTeamDetails(id: string){
    
    this.router.navigate(['/teamDetail', id]);    
  }
}
