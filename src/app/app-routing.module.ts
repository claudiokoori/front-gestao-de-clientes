import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro } from './registro/registro.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: Registro},
  {path: 'atualizar/:id', component: AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
