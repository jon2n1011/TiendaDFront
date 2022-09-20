import { TestBed } from '@angular/core/testing';

import { EncriptacionJCBService } from './encriptacion-jcb.service';

describe('EncriptacionJCBService', () => {
  let service: EncriptacionJCBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncriptacionJCBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
