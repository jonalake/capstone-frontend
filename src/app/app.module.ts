import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdListingComponent } from './bird-listing/bird-listing.component';
import { BirdListComponent } from './bird-list/bird-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdListingComponent,
    BirdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
