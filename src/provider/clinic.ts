import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Headers } from '@angular/http';
=======
import { Http } from '@angular/http';
>>>>>>> master
import { map } from "rxjs/operators";

@Injectable()
export class Clinics{
    ip: any;
    port: any;
    uri: any;

    constructor(public http: Http){
<<<<<<< HEAD
        this.ip = "localhost";
=======
        this.ip = "ec2-54-180-121-181.ap-northeast-2.compute.amazonaws.com";
>>>>>>> master
        this.port = "8080";
        this.uri = 'http://' + this.ip + ':' + this.port;
    }

<<<<<<< HEAD
    getClinicDetail(options){
        console.log("start clinic.js getClinicDetail")
        return new Promise(resolve => {
            //let headers = new Headers();
            //headers.append('Content-Type', 'application/json');
            this.http.get(this.uri + '/clinic?clinic_code=' + options)
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
                console.log("provider data",data)
                console.log("provider option",options)
            });
        });
    }

    getClinicList(options){
        return new Promise(resolve => {
            //let headers = new Headers();
            //headers.append('Content-Type', 'application/json');

            this.http.get(this.uri + '/dx/list?user_id=' + options)
=======
    getClinicList(options){
        return new Promise(resolve => {
            this.http.get(this.uri + '/clinic/list?clinic_name=' + options)
>>>>>>> master
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
<<<<<<< HEAD
        });
    }

    
    putClinic(options: {}){
        return new Promise(resolve => {
            //let headers = new Headers();
            console.log(options);
            //headers.append('Content-Type', 'application/json');

            this.http.put(this.uri + '/clinic/mod', {
                clinic_code: options["clinic_code"],
                clinic_name: options["clinicname"],
                //clinic_code: options["clinic"],
                clinicX: options["clinicx"],
                clinicY: options["clinicy"]
                // diagnosis_name: options["diagnosis"],
                // sick_date: options["sickDate"],
                // diagnosis_symptom: options["symptom"],
                // diagnosis_prognosis: options["prognosis"],
                // diagnosis_cost: options["cost"]
            }).pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }
    
    postDx(options: {}){
        return new Promise(resolve => {
            console.log(options);
            this.http.post(this.uri + 'clinic/post', {
                // user_id: options["user_id"],
                // pet_id: options["pet"],
                // clinic_code: options["clinic"],
                // diagnosis_date: options["diagDate"],
                // diagnosis_name: options["diagnosis"],
                // sick_date: options["sickDate"],
                // diagnosis_symptom: options["symptom"],
                // diagnosis_prognosis: options["prognosis"],
                // diagnosis_cost: options["cost"]
                clinic_code: options["clinic_id"],
                clinic_name: options["clinicname"],
                clinicX: options["clinicx"],
                clinicY: options["clinicy"]
            }). pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            })
        })
    }

=======
        })
    }
>>>>>>> master
}