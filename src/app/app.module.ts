import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdListingComponent } from './bird-listing/bird-listing.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { BirdComponent } from './bird/bird.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdListingComponent,
    BirdListComponent,
    AddBirdComponent,
    BirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
