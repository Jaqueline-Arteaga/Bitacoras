import { TestBed } from '@angular/core/testing';

import { BinnacleProjectService } from './binnacle-project.service';

describe('BinnacleProjectService', () => {
  let service: BinnacleProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinnacleProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
