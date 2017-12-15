import { TestBed, inject } from '@angular/core/testing';

import { FacebobookService } from './facebobook.service';

describe('FacebobookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebobookService]
    });
  });

  it('should be created', inject([FacebobookService], (service: FacebobookService) => {
    expect(service).toBeTruthy();
  }));
});
