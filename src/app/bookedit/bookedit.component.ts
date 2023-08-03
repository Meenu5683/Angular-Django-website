import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent {
  constructor( private route :ActivatedRoute,private api :ApicallService ,private router :Router ){}
public book={
  "title":'',
  "author":'',
  "price":null,
  "description":''
}

id:any


ngOnInit(){
this.id=this.route.snapshot.paramMap.get('id')
    this.api.bookeditget(this.id).subscribe((res:any)=>{
      console.log({res})
      this.book=res
    })
  }

edit(){
    if(this.id){
      this.api.bookedit(this.id,this.book).subscribe((res:any)=>{
        if(res){
          this.router.navigate(['/profile'])
        }
      })
    }
    
  }


}
