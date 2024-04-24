// team.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'http://localhost:3000/teams'; // URL of your JSON server endpoint

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.teamsUrl);
  }

  getTeamById(id: string): Observable<any> {
    return this.http.get<any>(`${this.teamsUrl}/${id}`);
  }
}
