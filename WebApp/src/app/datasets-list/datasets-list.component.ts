import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.scss']
})
export class DatasetsListComponent implements OnInit {

  defaultBindingsList = [
    { value: 1, label: 'Newest' },
    { value: 2, label: 'Most liked' },
    { value: 3, label: 'Most disliked'}
  ];

  selectedOption = null;

  constructor() { }

  ngOnInit() {
    this.selectedOption = this.defaultBindingsList[0];
  }

}
