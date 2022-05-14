import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  rating: number=0;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges):void{
    console.log('ngOnChanges');

  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.rating = 0;
  }

  rate(){
    console.log("Rating");
    this.ratingClicked.emit('Rating:${this.rating}');
  }
}
