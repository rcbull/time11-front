import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @Input() pageTitular: boolean;
  @Input() movimentacoes = [];
  total: number;

  constructor() {
  }

  ngOnInit() {
    if (this.movimentacoes) {
      this.total = this.movimentacoes.reduce(
        function (sum, current) {
          return sum + current.valor;
        }, 0
      );
    }
  }

}
