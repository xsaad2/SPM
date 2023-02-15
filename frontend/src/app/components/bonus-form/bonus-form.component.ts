import { Component, Inject, OnInit } from '@angular/core';
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Bonus } from 'src/app/interfaces/Bonus';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SalesManService } from 'src/app/services/sales-man.service';
import { Product } from 'src/app/interfaces/Product';
import { Account } from 'src/app/interfaces/Account';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalesMan } from 'src/app/interfaces/SalesMan';
import { ShareDataService } from 'src/app/services/share-data.service';
@Component({
    selector: 'app-bonus-form',
    templateUrl: './bonus-form.component.html',
    styleUrls: ['./bonus-form.component.css'],
})
export class BonusFormComponent implements OnInit {
    displayedColumns = [
        'productName',
        'clientName',
        'clientRating',
        'nbrOfItems',
        'bonusAmount',
        'action',
    ];
    employeeId: any;
    employees: SalesMan[];
    year: Number;
    orders = [];
    socialPer: any;
    remarks: String;
    products: Product[];
    accounts: Account[];
    ratingValue: any;
    detailsForm: FormGroup;
    ordersForm: FormGroup;
    socialForm: FormGroup;
    remarksForm: FormGroup;

    constructor(
        private salesManService: SalesManService,
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private shareDataService: ShareDataService
    ) {}

    ngOnInit() {
        this.employeeId = this.shareDataService.getData();
        this.ordersForm = this.formBuilder.group({
            productName: ['', Validators.required],
            clientName: ['', Validators.required],
            clientRating: ['', Validators.required],
            nbrOfItems: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]+$/)],
            ],
        });
        this.ordersForm.addControl('clientRating', new FormControl(''));
        this.socialForm = this.formBuilder.group({
            leadership: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}/)],
            ],
            openness: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}$/)],
            ],
            behaviour: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}$/)],
            ],
            attitude: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}$/)],
            ],
            communication: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}$/)],
            ],
            integrity: [
                '',
                [Validators.required, Validators.pattern(/^[0-9]{1}$/)],
            ],
        });
        this.remarksForm = this.formBuilder.group({
            remarks: ['', Validators.required],
        });
        this.detailsForm = this.formBuilder.group({
            year: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
        });
        this.getALlFromDb();
    }

    private getALlFromDb() {
        this.salesManService.getProducts().subscribe((response): void => {
            this.products = response.body;
        });
        this.salesManService.getAccounts().subscribe((response): void => {
            this.accounts = response.body.filter(
                (account) => account.accountRating > 0
            );
        });
        this.salesManService.getSalesMen().subscribe((response): void => {
            this.employees = response.body;
        });
    }

    onSubmit() {
        this.pushToOrders();
        this.ordersForm.reset();
        this.ordersForm.clearValidators();
    }
    pushToOrders() {
        if (this.ordersForm.invalid) {
            return;
        }
        this.orders.push(this.ordersForm.value);
    }
    onSocialSubmit() {
        this.socialPer = this.socialForm.value;
        console.log(this.socialPer);
    }
    onRemarksSubmit() {
        this.remarks = this.remarksForm.value.remarks;
    }
    onDetailsSubmit() {
        this.year = this.detailsForm.value.year;
    }

    deleteOrder(index) {
        this.orders.splice(index, 1);
    }

    updateInputValue(event: any) {
        const account = this.accounts.filter(
            (c) => c.fullName === this.ordersForm.value.clientName
        )[0];

        switch (account.accountRating) {
            case 1:
                this.ratingValue = 'Excellent';
                break;
            case 2:
                this.ratingValue = 'Very Good';
                break;
            case 3:
                this.ratingValue = 'Good';
                break;
            default:
                this.ratingValue = 'default';
                break;
        }
    }
    addBonus() {
        console.log(this.employeeId);
        const foundEmployee: SalesMan = this.employees.find((employee) => {
            return employee.code === this.employeeId;
        });
        console.log(foundEmployee);

        let newBonus: Bonus = {
            yearOfPerf: this.year,
            code: foundEmployee.code,
            employeeId: foundEmployee.employeeId,
            fullName: foundEmployee.fullName,
            unit: foundEmployee.unit,
            jobTitle: foundEmployee.jobTitle,
            orders: this.orders,
            socialPer: this.socialPer,
            remarks: this.remarks,
            totalBonus: 0,
        };
        console.log(newBonus);
        this.salesManService.addBonus(newBonus);
        this.getALlFromDb();
        this.dialog.closeAll();

        this._snackBar.open('Succefully Added Bonus record', 'OK', {
            duration: 3000,
            panelClass: ['custom-snackbar'],
        });
        window.location.reload();
    }
}
