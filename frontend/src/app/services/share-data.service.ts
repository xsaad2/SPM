import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShareDataService {
    data: String;

    constructor() {}

    setData(data: String) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
