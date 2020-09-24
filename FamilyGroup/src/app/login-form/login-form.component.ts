import { Component, OnInit } from '@angular/core';
import {Login} from '../login';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


	
  constructor(private router: Router) { 
console.log("Login page");
  }
  
  loginFields = new Login();
  successLogin = true;


  ngOnInit(): void {
  	this.loginFields.username = "";
  
  } 

  onSubmit() {
  	console.log(this.loginFields);
  	var username = this.loginFields.username;
  	var password = this.loginFields.password;
  	if (username == 'sarahjoeashi' && password == 12345) {
  		this.successLogin = true;
  		this.router.navigate(['/Family-Group', { relativeTo: 'username = ' + username }]);
  	} else {
  		this.successLogin = false;
  	}
  }
}
