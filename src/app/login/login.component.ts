import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router"
import {StorageService} from '../services/storage.service';

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

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private storageService: StorageService) {
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

      this.storageService.setItem("tipo", 'titular')
      this.router.navigate(['/titular'])
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

      this.storageService.setItem("tipo", 'estabelecimento')
      this.router.navigate(['/extrato-estabelecimento'])
    }

    this.success = true;
  }

  novoEstabelecimento() {
    this.router.navigate(['/estabelecimento'])
  }
}
