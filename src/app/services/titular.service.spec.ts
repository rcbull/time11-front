import { TestBed } from '@angular/core/testing';

import { TitularService } from './titular.service';

describe('TitularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitularService = TestBed.get(TitularService);
    expect(service).toBeTruthy();
  });
});
