import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @Input() pageTitular: boolean;
  @Input() movimentacoes = [];
  @Input() total: number;

  constructor() {
  }

  ngOnInit() {
  }

}
