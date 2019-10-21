import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class Reviews{
    ip: any;
    port: any;
    uri: any;

    constructor(public http: Http){
        this.ip = "localhost";
        this.port = "8080";
        this.uri = 'http://' + this.ip + ':' + this.port;
    }

    getDxDetail(options){
        return new Promise(resolve => {
            this.http.get(this.uri + '/dx?dx_id=' + options)
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }

    getDxList(options: {}){
        return new Promise(resolve => {
            this.http.get(this.uri + '/dx/list?user_id=' + '\'' + options['user_id'] + '\'' + '&dx_date=' + options['dx_date'])
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }

    
    putDx(options: {}){
        return new Promise(resolve => {
            console.log(options);

            this.http.put(this.uri + '/dx/mod', {
                diagnosis_date: options["diagDate"],
                clinic_code: options["clinic"],
                pet_id: options["pet"],
                diagnosis_name: options["diagnosis"],
                sick_date: options["sickDate"],
                diagnosis_symptom: options["symptom"],
                diagnosis_prognosis: options["prognosis"],
                diagnosis_cost: options["cost"]
            }).pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
            
        });
    }
    
    postDx(options: {}){
        return new Promise(resolve => {
            this.http.post(this.uri + '/dx/post', {
                user_id: options["user_id"],
                diagnosis_date: options["diagDate"],
                clinic_code: options["clinic"],
                pet_id: options["pet"],
                diagnosis_name: options["diagnosis"],
                sick_date: options["sickDate"],
                diagnosis_symptom: options["symptom"],
                diagnosis_prognosis: options["prognosis"],
                diagnosis_cost: options["cost"]
            }). pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            })
        })
    }

}
