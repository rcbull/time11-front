import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {PerfilComponent} from './perfil/perfil.component';
import {ExtratoComponent} from './extrato/extrato.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {LoginComponent} from './login/login.component';
import { TitularComponent } from './titular/titular.component';
import { MapaComponent } from './titular/mapa/mapa.component';
import { HeaderComponent } from './titular/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ExtratoComponent,
    EstabelecimentoComponent,
    LoginComponent,
    TitularComponent,
    MapaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
