import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTitularComponent } from './footer-titular.component';

describe('FooterTitularComponent', () => {
  let component: FooterTitularComponent;
  let fixture: ComponentFixture<FooterTitularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTitularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
