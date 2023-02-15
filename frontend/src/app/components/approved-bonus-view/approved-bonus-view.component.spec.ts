import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBonusViewComponent } from './approved-bonus-view.component';

describe('ApprovedBonusViewComponent', () => {
  let component: ApprovedBonusViewComponent;
  let fixture: ComponentFixture<ApprovedBonusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedBonusViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBonusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
