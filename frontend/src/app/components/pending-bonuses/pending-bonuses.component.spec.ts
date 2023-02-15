import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBonusesComponent } from './pending-bonuses.component';

describe('PendingBonusesComponent', () => {
  let component: PendingBonusesComponent;
  let fixture: ComponentFixture<PendingBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingBonusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
