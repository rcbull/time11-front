import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dados-titular',
  templateUrl: './dados-titular.component.html',
  styleUrls: ['./dados-titular.component.css']
})
export class DadosTitularComponent implements OnInit {

  dadosTitularForm: FormGroup;
  dadosTitularInvalid = false;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // TODO: LOAD TITULAR DATA FROM API
  }

  save() {
    this.submitted = true;

    console.log(this.dadosTitularForm.value);

    if (this.dadosTitularForm.invalid) {
      this.dadosTitularInvalid = true
      return;
    } else {
      // TODO: SUBMIT FORM AND UPDATE DATA

    }

    this.success = true;
  }


}
