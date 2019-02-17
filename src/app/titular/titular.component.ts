import {Component, OnInit} from '@angular/core';
import {TitularService} from '../services/titular.service';
import {EstabelecimentoService} from '../services/estabelecimento.service';
import {StorageService} from '../services/storage.service';
import bugsnagClient from '../BugsnagCliente';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {

  email: string;
  mostrarDetalhes = false;
  titularDados: any;
  sucess = false;
  dependentes: any;
  movimentos: any;

  constructor(private titularService: TitularService,
              private estabelecimentoService: EstabelecimentoService,
              private storageService: StorageService) {
  }

  ngOnInit() {

    this.mostrarDetalhes = true;

    this.titularService.consultarTitular(this.storageService.getItem('email'))
      .subscribe(response => {
          console.log(response);
          this.titularDados = response;
          this.dependentes = this.titularDados.dependentes;
        },
        error => bugsnagClient.notify(new Error('Test error')));

    this.estabelecimentoService.getMovimentacoes().subscribe(response => {
        this.movimentos = response;
      },
      error => bugsnagClient.notify(new Error('Test error')));
  }

  fecharNotificacao() {
    setTimeout(() => {
      this.sucess = false;
    }, 3000);
  }
}
