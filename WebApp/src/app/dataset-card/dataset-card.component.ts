import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataCardModel } from './dataset-card.model';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.scss']
})
export class DatasetCardComponent implements OnInit {

  @Input() dataset: DataCardModel;

  @Input() details: boolean;

  @Output() cardCliked: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  constructor() { }

  ngOnInit(): void {
  }

  showDetails(): void {
    this.cardCliked.emit(!this.details);
  }

  like(show: boolean): void {
    if(show && this.dataset.dislike){
      this.dataset.dislike = false;
      this.dataset.dislikes--;
    }
    this.dataset.like = show;
    this.dataset.likes = show ? ++this.dataset.likes: this.dataset.likes--;
  }

  dislike(show: boolean): void {
    if(show && this.dataset.like){
      this.dataset.like = false;
      this.dataset.likes--;
    }
    this.dataset.dislike = show;
    this.dataset.dislikes = show ? ++this.dataset.dislikes : this.dataset.dislikes--;
  }

}
