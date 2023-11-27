import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListrDeputadosComponent } from './listr-deputados/listr-deputados.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListrDeputadosComponent,
    BuscaDeputadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
