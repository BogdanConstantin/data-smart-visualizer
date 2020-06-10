import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxInputSearchModule } from 'ngx-input-search';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import { DatasetCardComponent } from './dataset-card/dataset-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatasetsListComponent,
    DatasetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxInputSearchModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
