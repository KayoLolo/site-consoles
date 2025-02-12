import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { AppRoutingModule } from './app-routing.modules';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
    CommandeComponent,
    AppRoutingModule // Ajouter CommonModule ici
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
