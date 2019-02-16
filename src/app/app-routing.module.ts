import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil/perfil.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'estabelecimento',
    component: EstabelecimentoComponent
  },
  {
    path: 'extrato',
    component: ExtratoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
