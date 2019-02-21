import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {PerfilComponent} from './perfil/perfil.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {LoginComponent} from './login/login.component';
import {TitularComponent} from './titular/titular.component';
import {MapaComponent} from './titular/mapa/mapa.component';
import {HeaderComponent} from './header/header.component';
import {MovItemComponent} from './extrato/mov-item/mov-item.component';
import {HeaderTitularComponent} from './titular/header-titular/header-titular.component';
import {HeaderExtratoComponent} from './extrato-estabelecimento/header-extrato/header-extrato.component';
import {AgmCoreModule} from '@agm/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CobrancaComponent} from './cobranca/cobranca.component';
import {FooterTitularComponent} from './titular/footer-titular/footer-titular.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {DependenteModalComponent} from './titular/dependente-modal/dependente-modal.component';
import {ExtratoEstabelecimentoComponent} from './extrato-estabelecimento/extrato-estabelecimento.component';
import {AdicionarDependenteComponent} from './adicionar-dependente/adicionar-dependente.component';
import {DadosTitularComponent} from './titular/dados-titular/dados-titular.component';
import bugsnag from '@bugsnag/js';
import {BugsnagErrorHandler} from '@bugsnag/plugin-angular';
import { AdminComponentComponent } from './admin-component/admin-component.component';

const bugsnagClient = bugsnag('014e002718adf7c5837ba5af37facb23');

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient);
}

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ExtratoComponent,
    EstabelecimentoComponent,
    LoginComponent,
    TitularComponent,
    MapaComponent,
    HeaderComponent,
    HeaderExtratoComponent,
    MovItemComponent,
    HeaderTitularComponent,
    CobrancaComponent,
    FooterTitularComponent,
    DependenteModalComponent,
    ExtratoEstabelecimentoComponent,
    AdicionarDependenteComponent,
    DadosTitularComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [{provide: ErrorHandler, useFactory: errorHandlerFactory}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
