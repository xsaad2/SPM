import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bonus } from 'src/app/interfaces/Bonus';
import { SalesMan } from 'src/app/interfaces/SalesMan';
import { SalesManService } from 'src/app/services/sales-man.service';
import { ApprovedBonusViewComponent } from '../approved-bonus-view/approved-bonus-view.component';

@Component({
    selector: 'app-approved-bonuses',
    templateUrl: './approved-bonuses.component.html',
    styleUrls: ['./approved-bonuses.component.css'],
})
export class ApprovedBonusesComponent implements OnInit {
    constructor(
        private salesManService: SalesManService,
        public dialog: MatDialog
    ) {}
    @Input() selectedEmployeeId: String;

    data: any;
    datasource: any;
    bonuses: Bonus[];
    salesmen: SalesMan[];
    salesmanName: String;

    displayedColumns = [
        'fullName',
        'yearOfPerf',
        'totalOrderBonus',
        'totalbonusAmount',
        'totalBonus',
        'actions',
    ];

    ngOnInit(): void {
        this.salesManService
            .getApprovedBonuses()
            .subscribe((response): void => {
                this.bonuses = response.body;
            });
        this.salesManService.getSalesMen().subscribe((response): void => {
            this.salesmen = response.body;
        });
        console.log(this.bonuses);
    }
    onReview(bonus: Bonus): void {
        const dialogRef = this.dialog.open(ApprovedBonusViewComponent, {
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
