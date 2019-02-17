import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import * as moment from 'moment';

@Component({
  selector: 'app-header-titular',
  templateUrl: './header-titular.component.html',
  styleUrls: ['./header-titular.component.css']
})
export class HeaderTitularComponent implements OnInit {

  @Input() listadependentes: any;
  dataInicial = moment().add('days', -30).format('YYYY-MM-DD');
  dataFinal = moment().format('YYYY-MM-DD');
  categorias = [{'nome': 'Entretendimento', 'id': 1},
    {'nome': 'Transporte', 'id': 2},
    {'nome': 'Alimentação', 'id': 3}];


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }
}
