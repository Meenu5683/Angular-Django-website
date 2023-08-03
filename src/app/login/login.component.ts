import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private logservice :LoginService ,private router: Router){}

  logindata : { password: string ,username :string}={
    username : '',
    password : '',
  }


  onsubmit(){
    this.logservice.login(this.logindata).subscribe((res: any) => {
        if (res.username) {
          this.router.navigate(['/profile']);
        } else {
          this.router.navigate(['/login'])
        }
      },
      (error: any) => {
        console.error('Login error:', error);
        // Handle HTTP request error (e.g., display an error message)
      }
    );
  }
}

  
