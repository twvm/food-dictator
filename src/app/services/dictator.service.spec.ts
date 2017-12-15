import { TestBed, inject } from '@angular/core/testing';

import { DictatorService } from './dictator.service';

describe('DictatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictatorService]
    });
  });

  it('should be created', inject([DictatorService], (service: DictatorService) => {
    expect(service).toBeTruthy();
  }));
});
