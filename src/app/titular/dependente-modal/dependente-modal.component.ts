import {Component, Inject, OnInit, Optional} from '@angular/core';

@Component({
  selector: 'app-dependente-modal',
  templateUrl: './dependente-modal.component.html',
  styleUrls: ['./dependente-modal.component.css']
})
export class DependenteModalComponent implements OnInit {

  animal: string;
  name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
