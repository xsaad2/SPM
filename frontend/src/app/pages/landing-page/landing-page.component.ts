import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonusFormComponent } from 'src/app/components/bonus-form/bonus-form.component';
import { SalesManService } from 'src/app/services/sales-man.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ExamplePageComponent } from '../example-page/example-page.component';
{
}

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        private shareDataService: ShareDataService,
        private salesManService: SalesManService
    ) {}
    employeeId: any;
    salesmanName: String;
    ngOnInit(): void {}

    onBonusBtnClick(): void {
        this.shareDataService.setData(this.employeeId);
        const dialogRef = this.dialog.open(BonusFormComponent, {
            width: '70%',
            height: '80%',
            data: { title: 'Dialog Form', input: '' },
            panelClass: 'dialog',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed', result);
        });
    }
    recieveEmployeeId($event) {
        this.employeeId = $event;
        this.salesManService
            .getSalesManById(this.employeeId)
            .subscribe(
                (response) => (this.salesmanName = response.body.fullName)
            );
    }
}
