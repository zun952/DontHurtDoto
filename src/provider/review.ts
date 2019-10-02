import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { Diagnosis } from "../app/objects";

@Injectable()
export class Reviews{
    constructor(public http: Http){}

    getDxDetail(options){
        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.get('http://localhost:8080/dx?dx_id=' + options)
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }

    getDxList(options){
        return new Promise(resolve => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.get('http://localhost:8080/dx/list?user_id=' + options)
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }

}
