import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusFormComponent } from './bonus-form.component';

describe('BonusFormComponent', () => {
  let component: BonusFormComponent;
  let fixture: ComponentFixture<BonusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
