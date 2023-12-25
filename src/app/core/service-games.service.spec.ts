import { TestBed } from '@angular/core/testing';

import { ServiceGamesService } from './service-games.service';

describe('ServiceGamesService', () => {
  let service: ServiceGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
