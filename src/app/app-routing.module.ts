import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro } from './registro/registro.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, Logado } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [Logado] },
  {path: 'lista', component: ListaComponent, canActivate: [AuthGuard]},
  {path: 'registro', component: Registro, canActivate: [AuthGuard]},
  {path: 'atualizar/:id', component: AtualizarComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
