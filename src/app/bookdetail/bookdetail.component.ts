import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent {
  constructor(private api :ApicallService ,private router :Router ){}
  public book : any=[
    {'title':'',
    'price':null ,
    'author' : '',
    'description' :''
  }
  ]

  ngOnInit(){
    this.api.bookget().subscribe((res:any)=>{
      console.log(res)
      this.book =res
    })
 
}

}
