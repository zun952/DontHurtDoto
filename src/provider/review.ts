import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class Reviews{
    ip: any;
    port: any;
    uri: any;

    constructor(public http: Http){
        this.ip = "ec2-54-180-121-181.ap-northeast-2.compute.amazonaws.com";
        this.port = "8080";
        this.uri = 'http://' + this.ip + ':' + this.port;
    }

    getDxDetail(option){
        return new Promise(resolve => {
            this.http.get(this.uri + '/dx?dx_id=' + option)
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

    postDx(options: {}){
        return new Promise(resolve => {
            this.http.post(this.uri + '/dx/post', {
                user_id: options["user_id"],
                diagnosis_date: options["diagDate"],
                clinic_code: options["clinic"],
                pet_id: options["pet_id"],
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

    putDx(options: {}){
        return new Promise(resolve => {
            this.http.put(this.uri + '/dx/mod', {
                dx_id: options["dx_id"],
                diagnosis_date: options["diagDate"],
                clinic_code: options["clinic"],
                pet_id: options["pet_id"],
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

    delDx(option){
        console.log(option)
        return new Promise(resolve => {
            this.http.delete(this.uri + '/dx/remove?dx_id=' + option)
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            })
        })
    }
}
