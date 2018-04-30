import { TestBed, inject } from '@angular/core/testing';

import { TypeBienService } from './type-bien.service';

describe('TypeBienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeBienService]
    });
  });

  it('should be created', inject([TypeBienService], (service: TypeBienService) => {
    expect(service).toBeTruthy();
  }));
});
