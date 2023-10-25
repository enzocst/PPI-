import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { ListrDeputadosComponent } from './listr-deputados/listr-deputados.component';

const routes: Routes = [
  {path: 'inicio', component:ListrDeputadosComponent},
  {path: 'buscar', component: BuscaDeputadoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
