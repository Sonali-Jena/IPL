import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any = {};
  dbUrl = 'http://localhost:3000/users'; // Assuming json-server is running locally on port 3000

  constructor(private http: HttpClient,private router: Router) {}

  
    onSubmit(): void {    
       const credentials = { username: this.userData.username, password: this.userData.password };
       this.http.post<any>('http://localhost:3000/users', credentials).toPromise().then(
         (data: { success: any; username: any; }) => {
           console.log(data);
           if (data) {
             localStorage.setItem('currentUser', JSON.stringify(data.username));
             this.router.navigate(['/team']);
           } else {
              Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Invalid username or password',
            }).then(() => {
              this.router.navigate(['/login']);
            });
           }
         },
         (error: any) => {
           console.error('Error authenticating user:', error);
           Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error Authenticating User',
          }).then(() => {
            this.router.navigate(['/login']);
          });
         }
       );
     }
}