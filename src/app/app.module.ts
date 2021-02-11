import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { IncrementationComponent } from './incrementation/incrementation.component';
import { TableIndividuComponent } from './table-individu/table-individu.component';
import { InputIndivComponent } from './input-indiv/input-indiv.component';
import { CardAnimauxComponent } from './card-animaux/card-animaux.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailIndivComponent} from './detail-indiv/detail-indiv.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { Exo6Component } from './exo6/exo6.component';
import { Exo7Component } from './exo7/exo7.component';
import { Exo8Component } from './exo8/exo8.component';
import { Exo9Component } from './exo9/exo9.component';


const mesRoutes:Routes=[
  {path : "detail/:id", component : DetailIndivComponent},
  {path : "exo1", component: Exo1Component},
  {path : "exo2", component: Exo2Component},
  {path : "exo3", component: Exo3Component},
  {path : "exo4", component: Exo4Component},
  {path : "exo5", component: Exo5Component},
  {path : "exo6", component: Exo6Component},
  {path : "exo7", component: Exo7Component},
  {path : "exo8", component: Exo8Component},
  {path : "exo9", component: Exo9Component}

];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    IncrementationComponent,
    TableIndividuComponent,
    InputIndivComponent,
    CardAnimauxComponent,
    DetailIndivComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo4Component,
    Exo5Component,
    Exo6Component,
    Exo7Component,
    Exo8Component,
    Exo9Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
