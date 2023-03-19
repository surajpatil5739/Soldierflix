import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

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
  }


}
