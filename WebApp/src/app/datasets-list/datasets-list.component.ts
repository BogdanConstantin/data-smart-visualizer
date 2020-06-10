import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataCardModel } from '../dataset-card/dataset-card.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.scss']
})
export class DatasetsListComponent implements OnInit, OnChanges {

  @Input() searchCriteria: string;

  @Output() details: EventEmitter<boolean> = new EventEmitter<boolean>();

  defaultBindingsList = [
    { value: 1, label: 'Newest' },
    { value: 2, label: 'Oldest' },
    { value: 3, label: 'Most liked' },
    { value: 4, label: 'Most disliked'}
  ];

  selectedOption = null;
  showDatasets = true;
  datasetSelected: DataCardModel;
  datasets: DataCardModel[];
  filteredDatasets: DataCardModel[];

  constructor() { }

  ngOnInit() {
    this.selectedOption = this.defaultBindingsList[0];
    this.datasets = this.createDatasets();
    this.filteredDatasets = this.datasets;
    this.datasetSelected = this.datasets[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['searchCriteria']) {
      if(this.searchCriteria) {
        this.filterDatasets(this.searchCriteria);
      } else {
        this.filteredDatasets = this.datasets;
      }
    }
  }

  showDetails(datasetSelected: DataCardModel, show: boolean): void {
    this.details.emit(show);
    this.datasetSelected = datasetSelected;
    this.showDatasets = show;
    this.buildGraph();
  }

  dropdownFilter(sortBy: any): void {
    switch(sortBy.value) {
      case 1: {
        this.sortByNewest();
        break;
      }
      case 2: {
        this.sortByOldest();
        break;
      }
      case 3: {
        this.sortByMostLiked();
        break;
      }
      case 4: {
        this.sortByMostDisliked();
        break;
      }
    }
  }

  private sortByNewest(): void{
    this.filteredDatasets.sort((a,b) => (a.days >= b.days) ? 1 : -1);
  }

  private sortByOldest(): void{
    this.filteredDatasets.sort((a,b) => (a.days <= b.days) ? 1 : -1);
    
  }
  private sortByMostLiked(): void{
    this.filteredDatasets.sort((a,b) => (a.likes <=  b.likes) ? 1 : -1);
  }
  private sortByMostDisliked(): void{
    this.filteredDatasets.sort((a,b) => (a.dislikes <= b.dislikes) ? 1 : -1);
  }

  private filterDatasets(searchCriteria: string): void {
    this.filteredDatasets = [];
    this.datasets.forEach((d:DataCardModel) => {
      if(d.title.toLowerCase().includes(searchCriteria.toLowerCase())) {
        this.filteredDatasets.push(d);
      }
    })
  }

  private createDatasets(): any {
    return [
      {
        title: 'COVID-19 Open Research Dataset Challenge (CORD-19)',
        author: 'Allen Institute For AI',
        days: 2,
        likes: 432432,
        dislikes: 123,
        image: './../../assets/corona-virus.jpg',
        description: 'In response to the COVID-19 pandemic, the White House and a coalition of leading research groups have prepared the COVID-19 Open Research Dataset (CORD-19). CORD-19 is a resource of over 138,000 scholarly articles, including over 69,000 with full text, about COVID-19, SARS-CoV-2, and related coronaviruses. This freely available dataset is provided to the global research community to apply recent advances in natural language processing and other AI techniques to generate new insights in support of the ongoing fight against this infectious disease. There is a growing urgency for these approaches because of the rapid acceleration in new coronavirus literature, making it difficult for the medical research community to keep up.',
        like: false,
        dislike: false
      },
      {
        title: 'Los Angeles 1992 Riot Deaths from LA Times',
        author: 'Tim Hoolihan',
        days:7,
        likes: 4325,
        dislikes: 231,
        image: './../../assets/los-angeles.jpg',
        description: 'The 1992 LA Riots took places as a result of the LAPD beating during the arrest of Rodney King. They were acquitted at trial by a jury. The riots began the day the verdicts were announced.',
        like: true,
        dislike: false
      },
      {
        title: 'League of Legends Diamond Ranked Games (10 min)',
        author: 'Michel\'s fanboi',
        days: 20,
        likes: 3325,
        dislikes: 31,
        image: './../../assets/lol.jpg',
        description: 'This dataset contains the first 10min. stats of approx. 10k ranked games (SOLO QUEUE) from a high ELO (DIAMOND I to MASTER). Players have roughly the same level. Each game is unique. The gameId can help you to fetch more attributes from the Riot API.There are 19 features per team (38 in total) collected after 10min in-game. This includes kills, deaths, gold, experience, level… It\'s up to you to do some feature engineering to get more insights.The column blueWins is the target value (the value we are trying to predict). A value of 1 means the blue team has won. 0 otherwise. So far I know, there is no missing value.',
        like: false,
        dislike: true
      }
    ]
  }

  private buildGraph(): void {
    if(document.getElementById("line-chart")){
    new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: [0,5,10,15,20,25,31],
        datasets: [{ 
            data: [86,114,106,106,107,111,133],
            label: "Views",
            borderColor: "#03a9f4",
            fill: false
          },
          {
            data: [186,14,156,126,107,111,200],
            label: "Downloads",
            borderColor: "#4caf50",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Dataset statistics'
        }
      }
    });
  }
}

}
