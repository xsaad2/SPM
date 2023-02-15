import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBonusComponent } from './bonus-history.component';

describe('BonusHistoryComponent', () => {
    let component: PendingBonusComponent;
    let fixture: ComponentFixture<PendingBonusComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PendingBonusComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PendingBonusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
