import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: any = {}

   avg: number = Math.round(this.item.vote_average) / 2
  
  // get voteAverage() {
  //   return this.avg =Math.round(this.item.vote_average) / 2;
        
  // }
 

}
