import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/Account';
import { Bonus } from '../interfaces/Bonus';
import { Product } from '../interfaces/Product';
import { SalesMan } from '../interfaces/SalesMan';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SalesManService {
    constructor(private http: HttpClient) {}

    getSalesMen(): Observable<HttpResponse<SalesMan[]>> {
        return this.http.get<SalesMan[]>(
            environment.apiEndpoint + '/api/salesmen',
            {
                observe: 'response',
                withCredentials: true,
            }
        );
    }

    getSalesManById(code): Observable<HttpResponse<SalesMan>> {
        return this.http.get<SalesMan>(
            environment.apiEndpoint + `/api/salesman/${code}`,
            {
                observe: 'response',
                withCredentials: true,
            }
        );
    }
    addBonus(bonus: Bonus): void {
        this.http
            .post<Bonus>(environment.apiEndpoint + '/api/addbonus', bonus, {
                observe: 'response',
                withCredentials: true,
            })
            .subscribe();
    }
    deletePendingBonus(bonus: Bonus): void {
        this.http
            .post(environment.apiEndpoint + '/api/deletependingbonus', bonus, {
                withCredentials: true,
                observe: 'response',
                responseType: 'text',
            })
            .subscribe();
    }
    addApprovedBonus(bonus: Bonus): void {
        this.http
            .post<Bonus>(
                environment.apiEndpoint + '/api/addapprovedbonus',
                bonus,
                {
                    observe: 'response',
                    withCredentials: true,
                }
            )
            .subscribe();
    }
    getApprovedBonuses(): Observable<HttpResponse<Bonus[]>> {
        return this.http.get<Bonus[]>(
            environment.apiEndpoint + '/api/approvedbonuses',
            {
                observe: 'response',
                withCredentials: true,
            }
        );
    }
    getBonuses(): Observable<HttpResponse<Bonus[]>> {
        return this.http.get<Bonus[]>(environment.apiEndpoint + '/api/bonus', {
            observe: 'response',
            withCredentials: true,
        });
    }
    getProducts(): Observable<HttpResponse<Product[]>> {
        return this.http.get<Product[]>(
            environment.apiEndpoint + '/api/products',
            {
                observe: 'response',
                withCredentials: true,
            }
        );
    }
    getAccounts(): Observable<HttpResponse<Account[]>> {
        return this.http.get<Account[]>(
            environment.apiEndpoint + '/api/accounts',
            {
                observe: 'response',
                withCredentials: true,
            }
        );
    }
}
