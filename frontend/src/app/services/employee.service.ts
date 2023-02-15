import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { SalesMan } from '../interfaces/SalesMan';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    constructor(private http: HttpClient) {}

    getEmployees(): Observable<HttpResponse<SalesMan[]>> {
        return this.http.get<SalesMan[]>(
            'http://localhost:8080/api/employees',
            { observe: 'response', withCredentials: true }
        );
    }
}
