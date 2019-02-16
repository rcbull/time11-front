import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cobranca',
  templateUrl: './cobranca.component.html',
  styleUrls: ['./cobranca.component.css']
})
export class CobrancaComponent implements OnInit {

  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'testando hackaton';

  constructor() { }

  ngOnInit() {
  }

}
