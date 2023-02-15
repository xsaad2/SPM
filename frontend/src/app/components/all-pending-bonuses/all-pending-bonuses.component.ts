import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bonus } from 'src/app/interfaces/Bonus';
import { SalesManService } from 'src/app/services/sales-man.service';
import { BonusHistoryComponent } from '../bonus-history/bonus-history.component';

@Component({
    selector: 'app-all-pending-bonuses',
    templateUrl: './all-pending-bonuses.component.html',
    styleUrls: ['./all-pending-bonuses.component.css'],
})
export class AllPendingBonusesComponent implements OnInit {
    constructor(
        private salesManService: SalesManService,
        public dialog: MatDialog
    ) {}
    @Input() selectedEmployeeId: String;

    data: any;

    bonuses: Bonus[];

    salesmanName: String;

    displayedColumns = [
        'yearOfPerf',
        'totalOrderBonus',
        'totalbonusAmount',
        'totalBonus',
        'actions',
    ];

    ngOnInit(): void {
        this.salesManService.getBonuses().subscribe((response): void => {
            this.bonuses = response.body;
        });
    }

    onReview(bonus: Bonus): void {
        const dialogRef = this.dialog.open(BonusHistoryComponent, {
            width: '60%',
            height: '100%',
            data: { title: 'Dialog Form', bonus: bonus },
            panelClass: 'dialog',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed', result);
        });
    }
}
