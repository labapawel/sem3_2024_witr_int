import { TestBed } from '@angular/core/testing';

import { MojakasaService } from './mojakasa.service';

describe('MojakasaService', () => {
  let service: MojakasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MojakasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
