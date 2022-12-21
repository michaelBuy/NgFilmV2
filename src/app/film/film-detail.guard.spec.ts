import { TestBed } from '@angular/core/testing';

import { FilmDetailGuard } from './film-detail.guard';

describe('FilmDetailGuard', () => {
  let guard: FilmDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilmDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
