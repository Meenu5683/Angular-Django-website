import { Component } from '@angular/core';
import { ResgistrationService } from '../resgistration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private regservice :ResgistrationService){}

  data : { password: string ,username :string ,email :string}={
    username : '',
    email : '',
    password : '',
  }
  onsubmit(){
    this.regservice.register(this.data).subscribe((res)=>{
      console.log(res)
    })
  }
}
