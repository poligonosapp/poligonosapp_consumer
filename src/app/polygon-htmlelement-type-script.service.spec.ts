import { TestBed } from '@angular/core/testing';

import { PolygonHTMLElementTypeScriptService } from './polygon-htmlelement-type-script.service';

describe('PolygonHTMLElementTypeScriptService', () => {
  let service: PolygonHTMLElementTypeScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolygonHTMLElementTypeScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
