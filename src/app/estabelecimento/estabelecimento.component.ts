import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentoForm: FormGroup;
  submitted = false;
  success = false;
  categorias = [{'nome': 'Entretendimento', 'id': 1},
    {'nome': 'Transporte', 'id': 2},
    {'nome': 'Alimentação', 'id': 3}];

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.estabelecimentoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(6)]],
      sobrenome: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(6)]],
      categoria: ['', [Validators.required, Validators.minLength(6)]],
    });

    console.log(this.storageService.getItem('tipo'));
  }

  save() {
    this.submitted = true;

    console.log(this.estabelecimentoForm.value);

    if (this.estabelecimentoForm.invalid) {
      return;
    }

    this.success = true;
  }

}
