import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovItemComponent} from './mov-item.component';

describe('MovItemComponent', () => {
  let component: MovItemComponent;
  let fixture: ComponentFixture<MovItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
