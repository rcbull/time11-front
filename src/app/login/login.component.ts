import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formEstabelecimento: FormGroup;
  formTitular: FormGroup;
  submitted = false;
  success = false;

  estabelecimentoInvalid = false;
  titularInvalid = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formEstabelecimento = this.formBuilder.group(
      {email: ['', [Validators.required, Validators.email]]}
    );
    this.formTitular = this.formBuilder.group(
      {email: ['', [Validators.required, Validators.email]]}
    );
  }

  saveTitular() {
    this.submitted = true;

    console.log(this.formTitular.value.email);

    if (this.formTitular.invalid) {
      this.titularInvalid = true;
    } else {
      this.titularInvalid = false;
    }

    this.success = true;
  }

  saveEstabelecimento() {
    this.submitted = true;

    console.log(this.formEstabelecimento.value.email);

    console.log(this.formEstabelecimento.invalid)
    if (this.formEstabelecimento.invalid) {
      this.estabelecimentoInvalid = true;
    } else {
      this.estabelecimentoInvalid = false;
    }

    this.success = true;
  }

}
