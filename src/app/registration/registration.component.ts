import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userData: any = {};
  dbUrl = 'http://localhost:3000/users'; // Assuming json-server is running locally on port 3000

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit() {
    this.http.post<any>(this.dbUrl, this.userData)
      .subscribe(
        response => {
          console.log('User data saved successfully:', response);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User data saved successfully!',
          }).then(() => {
            this.router.navigate(['/login']);
          });
        },
        error => {
          console.error('Error saving user data:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to save user data. Please try again later.',
          });
        }
      );
  }
}