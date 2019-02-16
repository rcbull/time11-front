import { TestBed } from '@angular/core/testing';

import { CobrancaService } from './cobranca.service';

describe('CobrancaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobrancaService = TestBed.get(CobrancaService);
    expect(service).toBeTruthy();
  });
});
