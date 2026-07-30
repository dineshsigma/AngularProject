import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoforgeDashbaord } from './coforge-dashbaord';

describe('CoforgeDashbaord', () => {
  let component: CoforgeDashbaord;
  let fixture: ComponentFixture<CoforgeDashbaord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoforgeDashbaord],
    }).compileComponents();

    fixture = TestBed.createComponent(CoforgeDashbaord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
