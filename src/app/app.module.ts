import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { IncrementationComponent } from './incrementation/incrementation.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    IncrementationComponent,
    AnimalCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
