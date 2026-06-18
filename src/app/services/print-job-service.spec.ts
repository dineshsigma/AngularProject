import { TestBed } from '@angular/core/testing';

import { PrintJobService } from './print-job-service';

describe('PrintJobService', () => {
  let service: PrintJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
