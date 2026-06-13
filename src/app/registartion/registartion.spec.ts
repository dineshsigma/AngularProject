import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registartion } from './registartion';

describe('Registartion', () => {
  let component: Registartion;
  let fixture: ComponentFixture<Registartion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registartion],
    }).compileComponents();

    fixture = TestBed.createComponent(Registartion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
