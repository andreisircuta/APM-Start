import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";


@Component({
  selector:'pm-star',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  public cropWidth: number = 75;
  @Input() public rating: number = 0;
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.recalculate();
  }

  private recalculate() : void{
    this.cropWidth = this.rating * 75/5;
  }

  public onStarClick() : void {
    console.log(`The rating ${this.rating} was clicked!`);
    this.notify.emit(this.rating.toString());
  }
}
