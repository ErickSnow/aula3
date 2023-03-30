import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RespostaEndereco } from '../models/dados-correios.model';
import { Endereco } from '../models/endereco.model';
import { Localizacao } from 'src/models/inseri-local-produto';
import { itens } from 'src/models/inseri-dados-do-produto';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RespostaEndereco, Endereco, Localizacao, itens],
  bootstrap: [AppComponent]
})
export class AppModule { }
