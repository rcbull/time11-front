import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  movimentos = [
    {
    "desc": "Descrição",
      "valor": "100,00"
  },{
    "desc": "Descrição",
      "valor": "100,00"
  }, {
      'desc': 'Descrição',
      'valor': '100,00'
    },{
      'desc': 'Descrição',
      'valor': '100,00'
    }]

  total: number
  constructor() {
  }

  ngOnInit() {

    this.total = 500
  }

}
