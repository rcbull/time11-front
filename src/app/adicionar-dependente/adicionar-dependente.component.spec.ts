import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDependenteComponent } from './adicionar-dependente.component';

describe('AdicionarDependenteComponent', () => {
  let component: AdicionarDependenteComponent;
  let fixture: ComponentFixture<AdicionarDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
