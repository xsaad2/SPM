import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bonus } from 'src/app/interfaces/Bonus';
import { SalesMan } from 'src/app/interfaces/SalesMan';
import { SalesManService } from 'src/app/services/sales-man.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { BonusFormComponent } from '../bonus-form/bonus-form.component';
import { BonusHistoryComponent } from '../bonus-history/bonus-history.component';

@Component({
    selector: 'app-pending-bonuses',
    templateUrl: './pending-bonuses.component.html',
    styleUrls: ['./pending-bonuses.component.css'],
})
export class PendingBonusesComponent implements OnInit, OnChanges {
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
        this.salesManService.getSalesMen().subscribe((response): void => {
            this.salesmen = response.body;
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.selectedEmployeeId.currentValue) {
            this.datasource = this.bonuses.filter(
                (bonus) => bonus.code === this.selectedEmployeeId
            );
            let salesman = this.salesmen.filter(
                (salesman) => salesman.code === this.selectedEmployeeId
            );
            this.salesmanName = salesman[0].fullName;
        }
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
