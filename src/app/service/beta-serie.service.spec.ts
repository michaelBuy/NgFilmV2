import { TestBed } from '@angular/core/testing';

import { BetaSerieService } from './beta-serie.service';

describe('BetaSerieService', () => {
  let service: BetaSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetaSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
