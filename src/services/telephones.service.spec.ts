import { TestBed } from '@angular/core/testing';

import { TelephonesService } from './telephones.service';

describe('TelephonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelephonesService = TestBed.get(TelephonesService);
    expect(service).toBeTruthy();
  });
});
