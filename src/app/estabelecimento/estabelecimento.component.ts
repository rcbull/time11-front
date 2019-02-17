import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../services/storage.service';
import {EstabelecimentoService} from '../services/estabelecimento.service';

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
              private storageService: StorageService,
              private estabelecimentoService: EstabelecimentoService) {
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
    } else {
      let dados = this.estabelecimentoForm.value;
      this.estabelecimentoService.salvar(dados).subscribe(result => console.log(result));
    }

    this.success = true;
  }

}
