import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // Retrieve currentUser data from localStorage
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
