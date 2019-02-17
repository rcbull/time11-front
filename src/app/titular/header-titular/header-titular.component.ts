import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-header-titular',
  templateUrl: './header-titular.component.html',
  styleUrls: ['./header-titular.component.css']
})
export class HeaderTitularComponent implements OnInit {

  filtroForm: FormGroup;
  @Input() listadependentes: any;
  dependente: any
  categoria: any
  dataInicial = moment().add('days', -30).format('YYYY-MM-DD');
  dataFinal = moment().format('YYYY-MM-DD');
  categorias = [{'nome': 'Entretendimento', 'id': 1},
    {'nome': 'Transporte', 'id': 2},
    {'nome': 'Alimentação', 'id': 3}];
  @Output() filtroChange: EventEmitter<any> = new EventEmitter<any>()

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filtroForm = this.formBuilder.group({
      dataInicial: ['', [Validators.required, Validators.minLength(1)]],
      dataFinal: ['', [Validators.required, Validators.minLength(1)]],
      categoria: ['', [Validators.required, Validators.minLength(1)]],
      dependente: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.filtroForm.patchValue({"dataInicial": this.dataInicial,
    "dataFinal": this.dataFinal,
    })
  }

  pesquisar(){
    this.filtroChange.emit(this.filtroForm.value);
  }
}
