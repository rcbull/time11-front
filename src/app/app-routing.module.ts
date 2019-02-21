import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil/perfil.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {LoginComponent} from './login/login.component';
import {TitularComponent} from './titular/titular.component';
import {CobrancaComponent} from './cobranca/cobranca.component';
import {ExtratoEstabelecimentoComponent} from './extrato-estabelecimento/extrato-estabelecimento.component';
import {DadosTitularComponent} from './titular/dados-titular/dados-titular.component';
import {AdminComponentComponent} from './admin-component/admin-component.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponentComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
      outlet: 'router1'
    },
      {
        path: 'login2',
        component: LoginComponent,
        outlet: 'router2'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
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
    path: 'extrato-estabelecimento',
    component: ExtratoEstabelecimentoComponent
  },
  {
    path: 'titular',
    component: TitularComponent
  },
  {
    path: 'meus-dados',
    component: DadosTitularComponent
  },
  {
    path: 'cobranca',
    component: CobrancaComponent
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
