import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'All News';
  showSearch = true;
  searchCriteria = null;

  toggleSearch(show: boolean): void {
    console.log(show);
    this.showSearch = show;
  }

  search(searchCriteria: string): void {
    this.searchCriteria = searchCriteria;
  }
}
