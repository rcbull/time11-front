import {Component, OnInit} from '@angular/core';
import bugsnagClient from '../BugsnagCliente';
import {EstabelecimentoService} from '../services/estabelecimento.service';

@Component({
  selector: 'app-extrato-estabelecimento',
  templateUrl: './extrato-estabelecimento.component.html',
  styleUrls: ['./extrato-estabelecimento.component.css']
})
export class ExtratoEstabelecimentoComponent implements OnInit {

  movimentos = [];
  total: number;

  constructor(private estabelecimentoService: EstabelecimentoService) {
  }

  ngOnInit() {

    this.estabelecimentoService.getMovimentacoes(null).subscribe(response => {
        this.movimentos = response;

        this.total = this.movimentos.reduce(
          function (sum, current) {
            return sum + current.valor;
          }, 0
        );
      },
      error => bugsnagClient.notify(new Error('Test error')));

    this.total = this.movimentos.reduce(
      function (sum, current) {
        return sum + current.valor;
      }, 0
    );

  }

}
