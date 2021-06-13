import { TestBed } from '@angular/core/testing';

import { LibPoligonosappService } from './lib-poligonosapp.service';

describe('LibPoligonosappService', () => {
  let service: LibPoligonosappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibPoligonosappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
