import { TestBed } from '@angular/core/testing';

import { ProfesionalsService } from './profesionals.service';

describe('ProfesionalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesionalsService = TestBed.get(ProfesionalsService);
    expect(service).toBeTruthy();
  });
});
