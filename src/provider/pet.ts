import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class Pets{
    ip: any;
    port: any;
    uri: any;

    constructor(public http: Http){
        this.ip = "ec2-54-180-121-181.ap-northeast-2.compute.amazonaws.com";
        this.port = "8080";
        this.uri = 'http://' + this.ip + ':' + this.port;
    }

    getPetList(options){
        return new Promise(resolve => {
            this.http.get(this.uri + '/pet/list?user_id=\'' + options + '\'')
            .pipe(map(res => res.json()))
            .subscribe(data => {
                resolve(data);
            });
        });
    }
}