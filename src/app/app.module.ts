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
import {TitularComponent} from './titular/titular.component';
import {MapaComponent} from './titular/mapa/mapa.component';
import {HeaderComponent} from './header/header.component';
import {MovItemComponent} from './extrato/mov-item/mov-item.component';
import {HeaderTitularComponent} from './titular/header-titular/header-titular.component';
import {AgmCoreModule} from '@agm/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CobrancaComponent} from './cobranca/cobranca.component';
import { FooterTitularComponent } from './titular/footer-titular/footer-titular.component';

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
    MovItemComponent,
    HeaderTitularComponent,
    CobrancaComponent,
    FooterTitularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
