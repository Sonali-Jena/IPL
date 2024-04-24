import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token ='';
  constructor(private http:HttpClient) { }

  login(userName:string,password:string):string{
      if(userName==='Admin' && password=='Admin')
      {
        this.token='5#0jjsj';
      }
      return this.token;
  }

  loginApi(userName:string,password:string): Observable<string> {
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username: userName,
      password: password
    }).pipe(tap((token: string) => this.token = token));
  }


  logout(){
      this.token ='';
  }

  IsAuthenticated():boolean{
      return this.token != '';
  }

}
