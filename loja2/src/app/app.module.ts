import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscaProdutosComponent } from './busca-produtos/busca-produtos.component';
import { MostraProdutosComponent } from './mostra-produtos/mostra-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaProdutosComponent,
    MostraProdutosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
