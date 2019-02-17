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
    {'nome': 'Cinema', 'id': 2},
    {'nome': 'Cantina', 'id': 3}];

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.estabelecimentoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      cnpj: ['', Validators.required],
      categoria: ['', Validators.required],
    });

    console.log(this.storageService.getItem('tipo'));
  }

  save() {
    this.submitted = true;

    if (this.estabelecimentoForm.invalid) {
      return;
    }

    console.log(this.estabelecimentoForm.value.nome);

    this.success = true;
  }

}
