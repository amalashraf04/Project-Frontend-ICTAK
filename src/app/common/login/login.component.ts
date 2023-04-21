import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login: any
  constructor(private fb: FormBuilder, private api: BackendService, private router: Router) {

    // form building // inside constructor
    this.Login = this.fb.group({
      email: [''],
      password: ['']
    })
  }
    login(){

      let value=this.Login.value
    console.log(value)
    this.api.login(value).subscribe((res:any)=>{
      console.log(res.data)
      if(res.data === 'admin'){
        this.router.navigate(['/users'])
      }
      else if(res.data === 'Trainer Head'){
        alert(res.data)
        this.router.navigate(['/learners'])
      }
      else{
        this.router.navigate(['/home'])
      }

    }) 
    }
  

}
