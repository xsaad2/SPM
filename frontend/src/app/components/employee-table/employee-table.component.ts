import {
    AfterViewInit,
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SalesMan } from 'src/app/interfaces/SalesMan';
import { SalesManService } from 'src/app/services/sales-man.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
    @Output() employeeIdSelected = new EventEmitter<String>();

    datasource: any;
    displayedColumns = ['code', 'firstName', 'lastName', 'jobTitle', 'unit'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private salesManService: SalesManService,
        private shareDataService: ShareDataService
    ) {}

    ngOnInit(): void {
        this.salesManService.getSalesMen().subscribe((response): void => {
            this.datasource = new MatTableDataSource<SalesMan>(response.body);
            setTimeout(() => (this.datasource.paginator = this.paginator));
        });
    }
    OnCodeClick(data: any) {
        this.employeeIdSelected.emit(data);
    }
}
