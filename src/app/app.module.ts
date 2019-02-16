import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {PerfilComponent} from './perfil/perfil.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ExtratoComponent,
    EstabelecimentoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
