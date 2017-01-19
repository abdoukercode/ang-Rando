import { Injectable } from '@angular/core';
import { Hike } from './hike';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {

    constructor (private _http:Http) {

    }
     
       // getHikes(){
         //   return this.hikes
        //}


getHikesFromAPI(){
    return this._http.get('app/api/hikes.json')
    .do(x=>console.log(x))
    .map(hikes=>hikes.json())
    }
}