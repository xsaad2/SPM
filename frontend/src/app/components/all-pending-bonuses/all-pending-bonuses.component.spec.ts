import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPendingBonusesComponent } from './all-pending-bonuses.component';

describe('AllPendingBonusesComponent', () => {
  let component: AllPendingBonusesComponent;
  let fixture: ComponentFixture<AllPendingBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPendingBonusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPendingBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
