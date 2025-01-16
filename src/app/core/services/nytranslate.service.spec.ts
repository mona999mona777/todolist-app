import { TestBed } from '@angular/core/testing';

import { NytranslateService } from './nytranslate.service';

describe('NytranslateService', () => {
  let service: NytranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NytranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
