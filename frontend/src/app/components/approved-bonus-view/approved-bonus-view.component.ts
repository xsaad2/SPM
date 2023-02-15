import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-approved-bonus-view',
    templateUrl: './approved-bonus-view.component.html',
    styleUrls: ['./approved-bonus-view.component.css'],
})
export class ApprovedBonusViewComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,

        public dialog: MatDialog,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {}
}
