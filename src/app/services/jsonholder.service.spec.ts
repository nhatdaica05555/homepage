/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonholderService } from './jsonholder.service';

describe('JsonholderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonholderService]
    });
  });

  it('should ...', inject([JsonholderService], (service: JsonholderService) => {
    expect(service).toBeTruthy();
  }));
});
