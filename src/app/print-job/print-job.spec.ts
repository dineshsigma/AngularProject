import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintJob } from './print-job';

describe('PrintJob', () => {
  let component: PrintJob;
  let fixture: ComponentFixture<PrintJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintJob],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintJob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
