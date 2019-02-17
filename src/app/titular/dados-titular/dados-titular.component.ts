import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TitularService} from '../../services/titular.service';
import {StorageService} from '../../services/storage.service';
import bugsnagClient from '../../BugsnagCliente';

@Component({
  selector: 'app-dados-titular',
  templateUrl: './dados-titular.component.html',
  styleUrls: ['./dados-titular.component.css']
})
export class DadosTitularComponent implements OnInit {

  dadosTitularForm: FormGroup;
  dadosTitularInvalid = false;
  mostrarDetalhes = false;
  titularDados: any;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,
              private titularService: TitularService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.mostrarDetalhes = true;

    this.dadosTitularForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(1)]],
      sobrenome: ['', [Validators.required, Validators.minLength(1)]],
      telefone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.titularService.consultarTitular(this.storageService.getItem('email'))
      .subscribe(response => {
          if (response) {

            this.titularDados = response;

            this.dadosTitularForm.patchValue({
              nome: this.titularDados.nome,
              sobrenome: this.titularDados.sobrenome,
              telefone: this.titularDados.telefone,
              email: this.titularDados.email,
              cpf: this.titularDados.cpf
            }, {emitEvent: false});
          }
        },
        error => bugsnagClient.notify(new Error('Test error')));
  }

  save() {
    this.submitted = true;

    console.log(this.dadosTitularForm.value);

    if (this.dadosTitularForm.invalid) {
      this.dadosTitularInvalid = true;
      return;
    } else {
      // TODO: SUBMIT FORM AND UPDATE DATA

    }

    this.success = true;
  }


}
