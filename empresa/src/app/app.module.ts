import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ExibirFuncionariosComponent } from './exibir-funcionarios/exibir-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ExibirFuncionariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
