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

  // Variable to toggle between login and registration form
  logIn:boolean= true;

  // function to open registration form
  gotToRegistration(){
    this.logIn = false;
  }

  // function to open logi form
  gotToLogIn(){
    this.logIn = true;
  }

  // variables to store the values of registration using two way data binding
  name:string = "name";
  mobile:string = "mobile";
  email:string = "email";
  password:string = "pass";


  // arraylist to store users
  users : User[] = [];

  // function to register
  register(){
    this.users.push(new User(this.name,this.mobile,this.email,this.password));
    this.logIn = true;
    alert("Registration Success.");
  }


  // function to login
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
