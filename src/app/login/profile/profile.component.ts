import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApicallService } from 'src/app/apicall.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private api :ApicallService ,private router :Router){}
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

  edit(id : any){
   this.router.navigate([`/bookedit/${id}`])
  }

  create(){
    this.router.navigate(['/bookcreate'])
  }

  delete(id :any){
    this.api.bookdelete(id).subscribe((res: any)=>{
     console.log(res) 
    })
  }
  
}
