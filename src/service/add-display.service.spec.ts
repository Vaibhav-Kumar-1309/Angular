import { TestBed } from '@angular/core/testing';

import { AddDisplayService } from './add-display.service';

describe('AddDisplayService', () => {
  let service: AddDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
