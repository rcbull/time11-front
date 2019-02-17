import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-header-extrato',
  templateUrl: './header-extrato.component.html',
  styleUrls: ['./header-extrato.component.css']
})
export class HeaderExtratoComponent implements OnInit {

  dataInicial = moment().add('days', -30).format("YYYY-MM-DD");
  dataFinal = moment().format("YYYY-MM-DD");

  constructor() {
  }

  ngOnInit() {
  }

}
