import { TestBed } from '@angular/core/testing';

import { PolygonHTMLElementNodeService } from './polygon-htmlelement-node.service';

describe('PolygonHTMLElementNodeService', () => {
  let service: PolygonHTMLElementNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolygonHTMLElementNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
