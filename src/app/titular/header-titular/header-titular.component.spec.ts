import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderTitularComponent} from './header-titular.component';

describe('HeaderTitularComponent', () => {
  let component: HeaderTitularComponent;
  let fixture: ComponentFixture<HeaderTitularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTitularComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
