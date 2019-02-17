import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoEstabelecimentoComponent } from './extrato-estabelecimento.component';

describe('ExtratoEstabelecimentoComponent', () => {
  let component: ExtratoEstabelecimentoComponent;
  let fixture: ComponentFixture<ExtratoEstabelecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoEstabelecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
