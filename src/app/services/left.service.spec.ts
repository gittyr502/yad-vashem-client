/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeftService } from './left.service';

describe('Service: Left', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftService]
    });
  });

  it('should ...', inject([LeftService], (service: LeftService) => {
    expect(service).toBeTruthy();
  }));
});
