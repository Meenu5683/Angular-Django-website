import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent {
  constructor(private api :ApicallService ,private router :Router){}
  public book={
    "title":'',
    "author":'',
    "price":null,
    "description":''
  }


create(){
  this.api.bookcreate(this.book).subscribe((res)=>{
    if(res){
      this.router.navigate(['/profile'])
    }
  })
}

}
