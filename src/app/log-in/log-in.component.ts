import { Component } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private authService: AuthService, private router:Router) {}

  logIn:boolean= true;

  gotToRegistration(){
    this.logIn = false;
  }

  gotToLogIn(){
    this.logIn = true;
  }

  name:string = "name";
  mobile:string = "mobile";
  email:string = "email";
  password:string = "pass";


  users : User[] = [];

  register(){
    this.users.push(new User(this.name,this.mobile,this.email,this.password));
    this.logIn = true;
    alert("Registration Success.")
  }

  async logInFun(){

    for(let user of this.users){
        if(this.email == user.email && this.password == user.password){
          this.authService.login();
          alert("login Successful. Now you can access all pages.");
          await this.router.navigateByUrl("/Home");
        }
    }

    if(this.authService.isLoggedIn ==  false){
      alert("Wrong credentials");
    }
    
  }


}
