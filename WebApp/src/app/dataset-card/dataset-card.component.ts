import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.scss']
})
export class DatasetCardComponent implements OnInit {

  imageSrc = './../../assets/corona-virus.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
