import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalesManService } from 'src/app/services/sales-man.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
    selector: 'app-bonus-history',
    templateUrl: './bonus-history.component.html',
    styleUrls: ['./bonus-history.component.css'],
})
export class BonusHistoryComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private salesManService: SalesManService,
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private shareDataService: ShareDataService
    ) {}

    ngOnInit(): void {
        console.log('Bonus object:', this.data.bonus);
    }
    onApprove() {
        this.salesManService.addApprovedBonus(this.data.bonus);
        this.salesManService.deletePendingBonus(this.data.bonus);
        this.dialog.closeAll();

        this._snackBar.open('Succefully Approved Bonus record', 'OK', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
        });
        window.location.reload();
    }
    onDecline() {
        this.salesManService.deletePendingBonus(this.data.bonus);
        this.dialog.closeAll();

        this._snackBar.open('Succefully Removed Bonus record', 'OK', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
        });
        window.location.reload();
    }
}
