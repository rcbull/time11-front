import {Component, OnInit} from '@angular/core';
import {TitularService} from '../services/titular.service';
import {EstabelecimentoService} from '../services/estabelecimento.service';
import {StorageService} from '../services/storage.service';
import bugsnagClient from '../BugsnagCliente';
import * as moment from 'moment';

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
  total: number;

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

    this.estabelecimentoService.getMovimentacoes(null).subscribe(response => {
        this.movimentos = response;

        this.total = this.movimentos.reduce(
          function (sum, current) {
            return sum + current.valor;
          }, 0
        );
      },
      error => bugsnagClient.notify(new Error('Test error')));
  }

  fecharNotificacao() {
    setTimeout(() => {
      this.sucess = false;
    }, 3000);
  }

  getFiltro(data: any) {
    console.log(data);

    data.dataInicial = moment(data.dataInicial).format("DD/MM/YYYY");
    data.dataFinal = moment(data.dataFinal).format("DD/MM/YYYY");
    data.categoria = "ALIMENTACAO";

    this.estabelecimentoService.getMovimentacoes(data).subscribe(response => {
        this.movimentos = response;

        this.total = this.movimentos.reduce(
          function (sum, current) {
            return sum + current.valor;
          }, 0
        );
      },
      error => bugsnagClient.notify(new Error('Test error')));
  }
}
