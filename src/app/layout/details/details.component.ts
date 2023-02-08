import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public book:string = '';

  constructor(public activaterouter:ActivatedRoute){
    activaterouter.params.subscribe((param:any)=>{
      console.log(param);
      this.book = param.book
      
    })

  }

}
