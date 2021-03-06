import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mov-item',
  templateUrl: './mov-item.component.html',
  styleUrls: ['./mov-item.component.css']
})
export class MovItemComponent implements OnInit {

  @Input() desc: string;
  @Input() valor: string;
  @Input() dependente: string;
  @Input() estabelecimento: string;

  constructor() {
  }

  ngOnInit() {
  }

}
