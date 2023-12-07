import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MostraProdutosComponent } from './mostra-produtos/mostra-produtos.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraProdutosComponent,
    BuscaProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
