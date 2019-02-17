import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../services/storage.service';
import {EstabelecimentoService} from '../services/estabelecimento.service';
import {GeolocationService} from '../services/geolocation.service';
import bugsnagClient from '../BugsnagCliente';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentoForm: FormGroup;
  estabelecimentoInvalid = false;
  submitted = false;
  success = false;
  mensagem: string;
  categorias = [{'nome': 'Entretendimento', 'id': 1},
    {'nome': 'Transporte', 'id': 2},
    {'nome': 'Alimentação', 'id': 3}];

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService,
              private estabelecimentoService: EstabelecimentoService,
              private geolocationService: GeolocationService) {
  }

  ngOnInit() {
    this.estabelecimentoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(1)]],
      sobrenome: ['', [Validators.required, Validators.minLength(1)]],
      telefone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(10)]],
      categoria: ['', Validators.required],
    });

    console.log(this.storageService.getItem('tipo'));
  }

  save() {
    this.submitted = true;

    console.log(this.estabelecimentoForm.value);

    if (this.estabelecimentoForm.invalid) {
      this.estabelecimentoInvalid = true;
      return;
    } else {
      this.geolocationService.getGeolocation().then(pos => {
        this.estabelecimentoInvalid = false;
        this.storageService.setItem('position', JSON.stringify(pos));
        let dados = this.estabelecimentoForm.value;
        this.estabelecimentoService.salvar(dados).subscribe(result => {
            this.estabelecimentoForm.reset({});
            this.mensagem = 'Sucesso no cadastro do estabelecimento';
          },
          error => {
            console.log(error);
            this.mensagem = 'Erro ao cadastrar estabelecimento';
            bugsnagClient.notify(new Error('Test error'));
          });
        this.fecharNotificacao();
      });
    }
    this.success = true;
  }

  fecharNotificacao() {
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }
}
