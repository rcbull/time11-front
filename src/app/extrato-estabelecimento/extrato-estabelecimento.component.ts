import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato-estabelecimento',
  templateUrl: './extrato-estabelecimento.component.html',
  styleUrls: ['./extrato-estabelecimento.component.css']
})
export class ExtratoEstabelecimentoComponent implements OnInit {

  movimentos = [
    {
      'dependente': 'Joãozinho',
      'desc': 'Lan House',
      'valor': 80.00
    }, {
      'dependente': 'Maria',
      'desc': 'Lanche',
      'valor': 100.00
    }, {
      'dependente': 'Maria',
      'desc': 'Skin do Fortnite',
      'valor': 15.00
    }, {
      'dependente': 'Joãozinho',
      'desc': 'Balas',
      'valor': 100.00
    }];

  total: number

  constructor() { }

  ngOnInit() {

    this.total = this.movimentos.reduce(
      function(sum, current){
        return sum + current.valor;
      }, 0
    );

  }

}