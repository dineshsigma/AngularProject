import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSliders } from './dashboard-sliders';

describe('DashboardSliders', () => {
  let component: DashboardSliders;
  let fixture: ComponentFixture<DashboardSliders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSliders],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSliders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
