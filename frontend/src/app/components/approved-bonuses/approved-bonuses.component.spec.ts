import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBonusesComponent } from './approved-bonuses.component';

describe('ApprovedBonusesComponent', () => {
  let component: ApprovedBonusesComponent;
  let fixture: ComponentFixture<ApprovedBonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedBonusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
